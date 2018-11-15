

/**
 * $http 请求后台数据
 */
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // post 请求的时候数据格式是Request Payload
    // 将其修改成 Form Data
    if (config.method === 'post') {
        config.transformRequest = [function (data) {
            // Do whatever you want to transform the data
            var ret = '';
            for (var it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }];
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
Vue.prototype.$http = axios;

/**
 * 添加数值过滤器, 使数值能够显示俩位小数
 */
Vue.filter('numTo2', function (value) {
    if (value == null || value == undefined || value == '') {
        if (value == 0) {
            return '0.00';
        }
        return value
    } else {
        return value.toFixed(2)
    }
    // return value != undefined ? value.toFixed(2) : value
});

/**
 * 添加身份证过滤器, 使数值前三后三显示正常，中间的数值用*代替
 */
Vue.filter('SFZ', function (value) {
    return value.replace(/(\w)/g, function(a,b,c,d) {
        return ( c > 3 && c < value.length - 3 ) ? '*' : a;
    });
});

/**
 * 获取地址栏参数
 */
function getRequest() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
Vue.prototype.$route = {};
Vue.prototype.$route.params = getRequest();

/**
 * $local 获取本地缓存
 */
Vue.prototype.$local = {};
Vue.prototype.$local.get = function (key) {
    try {
        // 由于在存入的时候会把值为false的数据转换为字符串，导致if判断出错。所以此处将对应的值转化为对应的对象
        switch (localStorage.getItem(key)) {
            case 'undefined' :
                return undefined;
            case 'null' :
                return null;
            case 'false' :
                return false;
            default :
                return JSON.parse(localStorage.getItem(key));
        }
    }
    catch (err) {
        return localStorage.getItem(key);
    }
};

Vue.prototype.$local.set = function (key, value) {
    var value2 = value;
    if (typeof value === 'object') {
        value2 = JSON.stringify(value);
    }
    localStorage.setItem(key, value2);
};
Vue.prototype.$local.remove = function (key) {
    localStorage.removeItem(key)
};
// 各种验证
Vue.prototype.$reg = {
    // 验证手机号
    mobile: function (value) {
        var reg = /(^1[3|4|5|6|7|8|9][0-9]{9}$)/;
        return reg.test(value);
    },
    // 验证座机号
    phone: function (value) {
        var reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
        return reg.test(value);
    },
    // 验证邮箱
    email: function (value) {
        var flag = false;
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        if(reg.test(value)==false){
        }else{
            flag = true;
        }
        return flag;
    },
    // 验证身份证
    card: function (value) {
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
        //最后一位是字母也只能是大写字母X
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X)$)/;
        return reg.test(value);
    }

};

// 模仿数据
// new Vue().$local.set('userId', 557921);
// new Vue().$local.set('unionid', 'oLPEV06H8pDjRoLlqb4uaG-x26fs');
// new Vue().$local.set('openid', 'ocVzx1TkjhGGY_2HvZwhagwHdP8U');

//验证手机号码
function isMobile(mobile){
    var re = /(^1[3|4|5|6|7|8|9][0-9]{9}$)/;
    return re.test(mobile);
}

// 验证邮箱
function isEmail(email){
    // 验证邮箱
    var flag = false;
    var re = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if(re.test(email)==false){
    }else{
        flag = true;
    }
    return flag;
}

// 验证座机号
function isPhone(phone) {
    var re = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    return re.test(phone);
}

/**
 * 微信支付
 * vm 页面的vue实例， 必须存在参数paySn,openid,isSplit,orderSn
 * paySn 第三方支付订单号
 * openid 微信用户ID
 * isSplit 是否拆单
 * orderSn 订单号
 */
Vue.prototype.$payStart = function (vm) {
    var appId = "";
    var timeStamp = "";
    var nonceStr = "";
    var pg = "";
    var signType = "";
    var paySign = "";
    // paySuccess 存在说明此比订单金额小于0，不需要微信支付，直接将支付状态修改为支付成功
    if (vm.paySuccess) {
        paySuccess();
    } else {
        payStart();
    }

    function payStart() {

        var url = '/app/pay/wechat/unifiedOrder';
        var data = {
            orderNumber: vm.paySn,
            orderType: 3,
            openid: vm.openid,
            isSplit:vm.isSplit
        };
        vm.$http.post(url, data)
            .then(function (res) {
                //预支付订单请求失败
                if(res.data.status == 1) {
                    vm.$toast(res.data.msg);
                    return;
                }
                appId 	   = res.data.data.appid;
                timeStamp = res.data.data.timeStamp;
                nonceStr  = res.data.data.nonceStr;
                pg 	   = res.data.data.prepay_id;
                signType  = res.data.data.signType;
                paySign   = res.data.data.sign;

                if(appId=='' || timeStamp=='' || nonceStr=='' || pg=='' || signType=='' || paySign=='') {
                    vm.$toast('支付数据获取失败');
                    return;
                }
                pay(vm.paySn);
            })
            .catch(function (error) {
                // 订单创建失败
                vm.$indicator.close();
            });
    }


    // 唤起微信支付
    function pay(){
        if (typeof WeixinJSBridge == "undefined"){
            if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        }else{
            onBridgeReady();
        }
    }
    // 开始支付
    function onBridgeReady () {
        var data = {
            "appId":appId,     // 公众号名称，由商户传入
            "timeStamp":timeStamp,         // 时间戳，自1970年以来的秒数
            "nonceStr":nonceStr, // 随机串
            "package":"prepay_id=" + pg,
            "signType":signType,         // 微信签名方式：
            "paySign":paySign // 微信签名
        };
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            data,
            function (res) {
                if (res.err_msg == "get_brand_wcpay_request:ok" ) {
                    // 微信无法保证订单准确性需要单独请求后台获取支付状态
                    queryWechatPay(vm.paySn);
                } else if (res.err_msg == "get_brand_wcpay_request:cancel")  {
                    vm.$toast("支付过程中用户取消");
                    location.href = '/urlController?url=wechat/order/orderResult&toggle=' + false + '&paySn=' + vm.paySn + '&openid=' + vm.openid + '&isSplit=' + vm.isSplit + '&orderSn=' + vm.orderSn;
                } else {
                    // 支付失败
                    vm.$toast(res.err_msg);
                    location.href = '/urlController?url=wechat/order/orderResult&toggle=' + false + '&paySn=' + vm.paySn + '&openid=' + vm.openid + '&isSplit=' + vm.isSplit + '&orderSn=' + vm.orderSn;
                }
            }
        );
    }

    /**
     * 支付结果查询
     */
    function queryWechatPay() {
        var url = '/app/pay/wechat/order?orderNumber=' + vm.paySn;
        vm.$http.get(url)
            .then(function (res) {
                vm.$indicator.close();
                var data = res.data.data;
                var code = data.return_code;
                if('SUCCESS'==code && 'SUCCESS'==data.trade_state) {
                    // 支付成功
                    paySuccess(vm.paySn);
                } else {
                    // 支付失败
                    vm.$toast("支付失败");
                }
            })
            .catch(function (error) {
                vm.$indicator.close();
            });
    }

    /**
     * 付款成功发起微信消息推送
     * @param vm.paySn 付款编号
     */
    function paySuccess () {
        // 增加微信模板消息推送
        var url = '/wechat/push/pushorder?paysn=' + vm.paySn + '&openid=' + vm.openid;
        vm.$http.get(url);
        location.href = '/urlController?url=wechat/order/orderResult&vm.paySn=' +vm.paySn + '&toggle=' + true + '&orderSn=' + vm.orderSn;
    }
};

Vue.prototype.$historyBack = function (url, vm) {
    // 有一些页面是正常返回到首页的，这种会直接触发popstate事件，所以给一定的时间反应。
    var toggle = false;
    setTimeout( function () {
        toggle = true;
    }, 500);
    pushHistory();
    window.addEventListener("popstate", function(e) {  //回调函数中实现需要的功能
        if (toggle) {
            if (url == 'close') {
                vm.wxClose();

            } else {
                window.location.href = url;  //在这里指定其返回的地址
            }
        }
    }, false);
    function pushHistory() {
        var state = {
            title: "我的合同",
            url: "#"
        };
        window.history.pushState(state, state.title, state.url);
    }
};

// 判断是什么浏览器
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        location.href="/urlController?url=wechat/pc";
    } else {
    }
}
browserRedirect();

