获取设备信息
=========

> 简介：l该方法返回了丰富的设备信息

参考 ： 

[http://www.layui.com/doc/base/infrastructure.html](http://www.layui.com/doc/base/infrastructure.html)


##先看个实例

	var device = require('layui_device')();

	{
	  os: "windows" //底层操作系统，windows、linux、mac等
	  ,ie: false //ie6-11的版本，如果不是ie浏览器，则为false
	  ,weixin: false //是否微信环境
	  ,android: false //是否安卓系统
	  ,ios: false //是否ios系统
	}


有时你的App可能会对userAgent插入一段特定的标识，譬如： 
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 myapp/1.8.6 Safari/537.36

你要验证当前的WebView是否在你的App环境，即可通过上述的myapp（即为Native给Webview插入的标识，可以随意定义）来判断。

	var device = layui.device('myapp');
	if(device.myapp){
	  alert('在我的App环境');
	} 