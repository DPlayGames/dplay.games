global.DPlayCriticContract = OBJECT({
	
	preset : () => {
		return DPlaySmartContract;
	},
	
	params : () => {
		return {
			
			abi : [{"constant":true,"inputs":[{"name":"rater","type":"address"}],"name":"getRatedGameIds","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ratingDecimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"gameId","type":"uint256"}],"name":"getRatingCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"rater","type":"address"},{"name":"gameId","type":"uint256"}],"name":"getRating","outputs":[{"name":"rating","type":"uint256"},{"name":"review","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"gameId","type":"uint256"}],"name":"getOverallRating","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"network","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"},{"name":"rating","type":"uint256"},{"name":"review","type":"string"}],"name":"updateRating","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"},{"name":"rating","type":"uint256"},{"name":"review","type":"string"}],"name":"rate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"gameId","type":"uint256"}],"name":"checkIsRater","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"},{"indexed":true,"name":"rater","type":"address"},{"indexed":false,"name":"rating","type":"uint256"},{"indexed":false,"name":"review","type":"string"}],"name":"Rate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"},{"indexed":true,"name":"rater","type":"address"},{"indexed":false,"name":"rating","type":"uint256"},{"indexed":false,"name":"review","type":"string"}],"name":"UpdateRating","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameId","type":"uint256"},{"indexed":true,"name":"rater","type":"address"}],"name":"RemoveRating","type":"event"}],
			
			addresses : {
				Kovan : '0x9D787c1eD7e7b692D3a469670B75D3cfB5FbF352'
			}
		};
	}
});