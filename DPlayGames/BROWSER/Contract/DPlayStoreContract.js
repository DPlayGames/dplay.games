global.DPlayStoreContract = OBJECT({
	
	preset : () => {
		return DPlaySmartContract;
	},
	
	params : () => {
		return {
			
			abi : [{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"gameId","type":"uint256"}],"name":"transferGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"gameId","type":"uint256"}],"name":"checkIsPublisher","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"buyer","type":"address"}],"name":"getBoughtGameIds","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"price","type":"uint256"},{"name":"gameURL","type":"string"},{"name":"isWebGame","type":"bool"},{"name":"defaultLanguage","type":"string"}],"name":"newGame","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"}],"name":"release","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"gameId","type":"uint256"}],"name":"getGameInfo","outputs":[{"name":"publisher","type":"address"},{"name":"isReleased","type":"bool"},{"name":"price","type":"uint256"},{"name":"gameURL","type":"string"},{"name":"isWebGame","type":"bool"},{"name":"defaultLanguage","type":"string"},{"name":"createTime","type":"uint256"},{"name":"lastUpdateTime","type":"uint256"},{"name":"releaseTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"},{"name":"gameURL","type":"string"},{"name":"isWebGame","type":"bool"},{"name":"defaultLanguage","type":"string"}],"name":"changeGameInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"}],"name":"unrelease","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"network","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"publisher","type":"address"}],"name":"getPublishedGameIds","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"gameId","type":"uint256"},{"name":"language","type":"string"}],"name":"getGameDetails","outputs":[{"name":"title","type":"string"},{"name":"summary","type":"string"},{"name":"description","type":"string"},{"name":"titleImageURL","type":"string"},{"name":"bannerImageURL","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"gameId","type":"uint256"}],"name":"checkIsBuyer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"},{"name":"price","type":"uint256"}],"name":"changePrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"},{"name":"language","type":"string"},{"name":"title","type":"string"},{"name":"summary","type":"string"},{"name":"description","type":"string"},{"name":"titleImageURL","type":"string"},{"name":"bannerImageURL","type":"string"}],"name":"setGameDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"}],"name":"buy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getGameCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"ChangePrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"},{"indexed":false,"name":"gameURL","type":"string"},{"indexed":false,"name":"isWebGame","type":"bool"},{"indexed":false,"name":"defaultLanguage","type":"string"}],"name":"ChangeGameInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"}],"name":"Release","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"}],"name":"Unrelease","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"},{"indexed":true,"name":"buyer","type":"address"}],"name":"Buy","type":"event"}],
			
			addresses : {
				Kovan : '0x4d907141549bA4D311fEdDB3B0aDa6bA71587f27'
			}
		};
	}
});