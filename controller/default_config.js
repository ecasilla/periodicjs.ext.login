'use strict';

module.exports = {
	settings: {
		authLoginPath: '/auth/login',
		authLogoutPath: '/',
		authLoggedInHomepage: '/p-admin',
		usepassword: true,
		requireusername: true,
		requireemail: true,
		disablesocialsignin: true
	},
	passport: {
		oauth: {
			facebook: {
				appid: 'NEEDFBAPPID',
				appsecret: 'NEEDFBAPPSECRET',
				callbackurl: 'http://local.getperiodic.com:8786/auth/facebook/callback',
				scope: ['email', 'publish_actions', 'offline_access', 'user_status', 'user_likes', 'user_checkins', 'user_about_me', 'read_stream']
			}
		}
	},
	token: {
		ttl: '3600000',
		resetTokenExpiresMinutes: '60',
		secret: 'periodicjs'
	}
};
