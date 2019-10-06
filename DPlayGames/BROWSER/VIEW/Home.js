DPlayGames.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let goodGameList;
		let newGameList;
		
		let content = DIV({
			style : {
				padding : '30px 20px'
			},
			c : [DIV({
				c : [A({
					style : {
						flt : 'left',
						color : '#efece9',
						padding : 10,
						paddingRight : 50,
						borderBottom : '1px solid #c40000'
					},
					c : '좋은 평가를 받는 게임'
				}), A({
					style : {
						marginLeft : 20,
						flt : 'left',
						color : '#949291',
						padding : 10,
						paddingRight : 50
					},
					c : '새로 출시한 게임'
				}), CLEAR_BOTH()]
			}), DIV({
				style : {
					marginTop : 86
				},
				c : [H2({
					style : {
						marginLeft : 10,
						color : '#949291'
					},
					c : '좋은 평가를 받은 게임'
				}), goodGameList = UL({
					style : {
						marginTop : 15
					}
				}), CLEAR_BOTH()]
			}), DIV({
				style : {
					marginTop : 20,
					paddingTop : 15,
					borderTop : '1px solid #726d6d'
				},
				c : [H2({
					style : {
						marginLeft : 10,
						color : '#949291'
					},
					c : '새로 출시한 게임'
				}), newGameList = UL({
					style : {
						marginTop : 15
					}
				}), CLEAR_BOTH()]
			})]
		});
		
		let createGameItem = () => {
			return DPlayGames.GameInfoPanel({
				style : {
					flt : 'left',
					marginRight : 10,
					marginBottom : 30
				}
			});
		};
		
		DPlayStoreSearchContract.getGameIdsByRating(100, (gameIds) => {
			console.log(gameIds);
		});
		
		DPlayStoreSearchContract.getGameIdsNewest((gameIds) => {
			
			EACH(gameIds, (gameId) => {
				
				newGameList.append(DPlayGames.GameInfoPanel({
					style : {
						flt : 'left',
						marginRight : 10,
						marginBottom : 30
					},
					gameId : gameId
				}));
			});
		});
		
		DPlayGames.TagListLayout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});