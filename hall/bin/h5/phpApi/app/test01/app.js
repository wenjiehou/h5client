//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
	
	//校验用户当前session_key是否有效。
	wx.checkSession({
		success : function(){
			console.log("登录未过期");
			console.log(wx.getStorageSync('openid'));
			init();
		},
		fail : function(){
			console.log("重新登录");
			 // 登录
			wx.login({
			  success: res => {
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
				//http://localhost/phpApi/xiaochengxu/onLogin.php
				if (res.code) {
				  //发起网络请求
				  wx.request({
					url: 'http://192.168.1.108/phpApi/xiaochengxu/preLogin.php',
					data: {
					  code: res.code
					},
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function(res) {
						console.log(res.data);
						if(res.data.status == 1){
							wx.setStorageSync('openid',res.data.openid);
							console.log(wx.getStorageSync('openid'));
							init();
						}else{
							console.log('登录失败！' + res.data.msg);
						}
					}
				  })
				} else {
				  console.log('登录失败！' + res.errMsg)
				}
			  }
			})
		},
		complete : function(){
			console.log("session_key校验完毕！");
		},
	});
	
	function init(){
		const app = getApp()
		// 获取用户信息
	    wx.getSetting({
	      success: res => {
	        if (res.authSetting['scope.userInfo']) {
	          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
	          wx.getUserInfo({
	        	  success: res => {
	              // 可以将 res 发送给后台解码出 unionId
	        	  console.log(res);
	        	  
	        	  wx.request({
						url: 'http://192.168.1.108/phpApi/xiaochengxu/onLogin.php',
						data: {
							openid: wx.getStorageSync('openid'),
							signature:res.signature,
							rawData:res.rawData,
							userInfo:res.userInfo
						},
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function(ret) {
							console.log(ret.data);
							console.log(ret.data.msg);
							if(ret.data.status == 1){
								app.globalData.userInfo = res.userInfo;
					              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
					              // 所以此处加入 callback 以防止这种情况
					              if (app.userInfoReadyCallback) {
					            	  app.userInfoReadyCallback(res)
					              }
							}
						}
					  })
	            }
	          })
	        }
	        else{
	        	wx.authorize({
	                scope: 'scope.userInfo',
	                success() {
	                    // 用户已经同意功能，后续调用 接口不会弹窗询问
	                	 wx.getUserInfo({
	         	            success: res => {
	         	              // 可以将 res 发送给后台解码出 unionId
	         				  console.log(res);
	         				  
	         				 wx.request({
	     						url: 'http://192.168.1.108/phpApi/xiaochengxu/onLogin.php',
	     						data: {
	     							openid: wx.getStorageSync('openid'),
	     							signature:res.signature,
	     							rawData:res.rawData,
	     							userInfo:res.userInfo
	     						},
	     						header: {
	     							'content-type': 'application/json' // 默认值
	     						},
	     						success: function(ret) {
	     							console.log(ret.data);
	     							console.log(ret.data.msg);
	     							if(ret.data.status == 1){
	     								app.globalData.userInfo = res.userInfo;
	     					              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
	     					              // 所以此处加入 callback 以防止这种情况
	     					              if (app.userInfoReadyCallback) {
	     					            	  app.userInfoReadyCallback(res)
	     					              }
	     							}
	     						}
	     					  })
	         	            }
	         	          })
	                }
	            })
	        }
	      }
	    })
	}
  },
  globalData: {
    userInfo: null
  }
})