DPlayGames.GameInfoPanel = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.gameId
		
		let gameId = params.gameId;
		
		let wrapper = DIV({
			style : {
				cursor : 'pointer'
			},
			on : {
				tap : () => {
					DPlayGames.GO('game/' + gameId);
				}
			}
		}).appendTo(self);
		
		DPlayStoreContract.getGameInfo(gameId, (publisher, isReleased, price, gameURL, isWebGame, defaultLanguage, createTime, lastUpdateTime) => {
			
			NEXT([
			(next) => {
				
				DPlayStoreContract.getGameDetails({
					gameId : gameId,
					language : INFO.getLang()
				}, (title, summary, description, titleImageURL, bannerImageURL) => {
					
					// 현재 언어에 해당하는 이름이 없는 경우 기본 언어의 정보를 가져옵니다.
					if (title === '') {
						
						DPlayStoreContract.getGameDetails({
							gameId : gameId,
							language : defaultLanguage
						}, next);
					}
					
					else {
						next(title, summary, description, titleImageURL, bannerImageURL);
					}
				});
			},
			
			() => {
				return (title, summary, description, titleImageURL, bannerImageURL) => {
					
					let ratingPanel;
					wrapper.append(DIV({
						c : [DIV({
							style : {
								width : 192,
								height : 108,
								backgroundImage : bannerImageURL === '' ? undefined : bannerImageURL,
								backgroundSize : 'cover',
								backgroundPosition : 'center center'
							}
						}), H3({
							style : {
								marginTop : 8,
								marginLeft : 10,
								color : '#efece9'
							},
							c : title
						}), H4({
							style : {
								marginTop : 2,
								marginLeft : 10,
								color : '#726d6d',
								fontSize : 12,
								width : 172,
								overflow : 'hidden',
								textOverflow : 'ellipsis',
								whiteSpace : 'nowrap'
							},
							c : publisher
						}), DIV({
							style : {
								marginTop : 6,
								marginLeft : 10,
								color : '#c40000',
								fontSize : 12
							},
							c : DPlayCoinContract.getDisplayPrice(price) + ' DC'
						}), ratingPanel = DIV({
							style : {
								marginTop : 2,
								marginLeft : 10
							}
						})]
					}));
					
					DPlayCriticContract.getOverallRating(gameId, (rating) => {
						
						ratingPanel.append(DIV({
							style : {
								width : 60,
								height : 9,
								backgroundImage : '/DPlayGames/R/staroff.png',
								backgroundSize : '12px 9px'
							},
							c : DIV({
								style : {
									width : rating * 6,
									height : 9,
									backgroundImage : '/DPlayGames/R/staron.png',
									backgroundSize : '12px 9px'
								}
							})
						}));
					});
				};
			}])
		});
	}
});
