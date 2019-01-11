#!/bin/bash

cd /xu/vue-ylbs-shop

echo [INFO] "更新最新代码..."

git fetch

git pull

echo [INFO] "安装依赖模块"

npm install

echo [INFO] "依赖模块安装完成"
echo [INFO] "编译新的文件"

npm run build

echo [INFO] "编译完成"