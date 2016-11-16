
var device = function(key){
	var agent = navigator.userAgent.toLowerCase();

	//获取版本号
	var getVersion = function(label){
		var exp = new RegExp(label + '/([^\\s\\_\\-]+)');
		label = (agent.match(exp)||[])[1];
		return label || false;
	};

	var result = {
		os: function(){ //底层操作系统
			if(/windows/.test(agent)){
				return 'windows';
			} else if(/linux/.test(agent)){
				return 'linux';
			} else if(/iphone|ipod|ipad|ios/.test(agent)){
				return 'ios';
			}
		}()
		,ie: function(){ //ie版本
			return (!!win.ActiveXObject || "ActiveXObject" in win) ? (
				(agent.match(/msie\s(\d+)/) || [])[1] || '11' //由于ie11并没有msie的标识
			) : false;
		}()
		,weixin: getVersion('micromessenger')  //是否微信
	};
	
	//任意的key
	if(key && !result[key]){
		result[key] = getVersion(key);
	}
	
	//移动设备
	result.android = /android/.test(agent);
	result.ios = result.os === 'ios';
	
	return result;
};

module.exports = device