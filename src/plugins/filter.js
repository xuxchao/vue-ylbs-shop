import Vue from 'vue'

function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
  };
  for (var k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
          var str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
/**
 * time：时间
 * format: 时间的格式如：yyyy-MM-dd hh:mm
 */
Vue.filter('formatDate', function (time , format) {
  var date = new Date(time);
  if ( !format ) {
      format = 'yyyy-MM-dd hh:mm';
  }
  return formatDate(date, format);
})
