module.exports = {
	admins: ['76561198164478717'],
	rates: {
		tf2SellPrice: 1.50, // Users sell their TF2 keys for this price
		vgoSellPrice: 2.30, // Users sell their VGO keys for this price
		tf2BuyPrice: 1.59, // Users buy the bot's TF2 keys for this price
		vgoBuyPrice: 2.39 // Users buy the bot's VGO keys for this price
	},
	api: {
		opskins: {
			opskinsTradeApiKey: 'API KEY', // The API key of the bot account to be used for trades
			opskinsTradeSecret: 'SECRET', // The secret of the bot account to be used for trades
			opskinsPollInterval: 5,
			opskinsBalanceApiKey: 'API KEY' // The API key of the account to be used for balance transfers.
		},
		steam: {
			steamApiKey: 'API KEY', // Your Steam API key
			realm: 'SITE', // Name of your site WITH PORT
			returnUrl: 'SITE' // Return URL WITH PORT
		}
	},
	steamBot: {
		botSharedSecret: 'SECRET=', // Your Steam bot account's shared secret
		botIdentitySecret: 'SECRET=', // Your Steam bot account's identity secret
		botUsername: 'USER', // Bot username
		botPassword: 'PASS', // Bot password
		inGame: 730 // Either an appid, or a string of the game you want to play
	},
	contact: {
		email: 'test@test.com', // Contact email address
		twitterLink: 'https://twitter.com/key.supply', // Twitter link
		steamLink: 'https://steamcommunity.com/groups/key.supply', // Steam group link
		discordLink: 'https://discordapp.com/invite/' // Discord invite link
	},
	database: {
		schema: 'keysupply', // Database schema
		password: 'nikolas', // Database password
		host: 'localhost', // You don't need to change this
		user: 'root', // You don't need to change this
		port: 3306 // You don't need to change this
	},
	max: {
		vgo: 200, // Max VGO keys per single trade
		tf2: 50 // Max TF2 keys per single trade
	},
	siteName: 'Key.supply', // Displayed in the title and footer of the website 
	port: 3037, // Use port 80 if you're not using reverse proxy.
	tradeTimeout: 1, // Seconds to wait between trade requests,
	tf2OfferRefresh: 15, // Seconds for polling TF2 offers
	vgoOfferRefresh: 15 // Seconds for polling VGO offers
}