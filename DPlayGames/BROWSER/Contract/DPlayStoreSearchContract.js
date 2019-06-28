global.DPlayStoreSearchContract = OBJECT({
	
	preset : () => {
		return SmartContract;
	},
	
	params : () => {
		return {
			
			abi : [{"constant":true,"inputs":[{"name":"ratingCount","type":"uint256"}],"name":"getGameIdsByRating","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"network","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"gameId","type":"uint256"},{"name":"language","type":"string"}],"name":"getGameTags","outputs":[{"name":"tag1","type":"string"},{"name":"tag2","type":"string"},{"name":"tag3","type":"string"},{"name":"tag4","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getGameIdsNewest","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"language","type":"string"},{"name":"tag","type":"string"},{"name":"ratingCount","type":"uint256"}],"name":"getGameIdsByTagAndRating","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"language","type":"string"},{"name":"tag","type":"string"}],"name":"getGameIdsByTagNewest","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReleasedGameIds","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"gameId","type":"uint256"},{"name":"language","type":"string"},{"name":"tag1","type":"string"},{"name":"tag2","type":"string"},{"name":"tag3","type":"string"},{"name":"tag4","type":"string"}],"name":"setGameTags","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],
			
			address : {
				Kovan : '0xEb854DA8d55BC539633790769b9BB742A372f53F'
			}[CONFIG.ethereumNetworkName]
		};
	}
});