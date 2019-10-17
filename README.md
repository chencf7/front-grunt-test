### grunt配置学习

1. 全局已安装 npm install -g grunt-cli
2. 创建项目目录，执行命令npm init，初始化package.json
3. 安装grunt插件 npm install grunt --save-dev
4. 在项目根目录下创建文件 Gruntfile.js
5. 添加Gruntfile.js配置项 module.exports=function(grunt){...}

##### uglify
1. 安装插件grunt-contrib-uglify

##### connect
1. 安装插件grunt-contrib-connect

##### proxy
直接使用live-server配置代理请求
+ 在package.json内部scripts配置项添加以下启动内容
```json
 "start": "live-server --open=./index.html --port=3000 --proxy=/api:http://127.0.0.1:8080",
 ```
 + 前提，全局或者局部安装live-server插件
 + live-server启动端口为3000的静态资源服务器
 + 插件live-server设置代理请求地址为http://127.0.0.1:8080，拦截http://127.0.0.1:3000/api/xxx的请求，转换为代理服务发出http://127.0.0.1:8080/xxx请求


