DPlayGames.MyGames = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let publishedGameList;
		let content = DIV({
			style : {
				paddingTop : 120,
				margin : 'auto',
				width : 800
			},
			c : [publishedGameList = DIV(), CLEAR_BOTH()]
		});
		
		NEXT([
		(next) => {
			SmartContract.checkWalletLocked((isLocked) => {
				if (isLocked === true) {
					SmartContract.enableWallet(next);
				} else {
					next();
				}
			});
		},
		
		(next) => {
			return () => {
				SmartContract.getWalletAddress(next);
			};
		},
		
		() => {
			return (walletAddress) => {
				
				let createPublishedGamePanel = (gameId, title, summary, description, titleImageURL, bannerImageURL) => {
					
					if (title === '') {
						title = '지정되지 않음';
					}
					
					publishedGameList.append(DPlayGames.GameInfoPanel({
						style : {
							flt : 'left',
							marginRight : 10,
							marginBottom : 30
						},
						gameId : gameId
					}));
				};
				
				DPlayStoreContract.getPublishedGameIds(walletAddress, (gameIds) => {
					
					EACH(gameIds, (gameId) => {
						
						DPlayStoreContract.getGameDetails({
							gameId : gameId,
							language : INFO.getLang()
						}, (title, summary, description, titleImageURL, bannerImageURL) => {
							
							// 현재 언어에 해당하는 이름이 없는 경우 기본 언어의 정보를 가져옵니다.
							if (title === '') {
								
								DPlayStoreContract.getGameInfo(gameId, (publisher, isReleased, price, gameURL, isWebGame, defaultLanguage, createTime, lastUpdateTime) => {
									
									DPlayStoreContract.getGameDetails({
										gameId : gameId,
										language : defaultLanguage
									}, (title, summary, description, titleImageURL, bannerImageURL) => {
										createPublishedGamePanel(gameId, title, summary, description, titleImageURL, bannerImageURL);
									});
								});
							}
							
							else {
								createPublishedGamePanel(gameId, title, summary, description, titleImageURL, bannerImageURL);
							}
						});
					});
				});
				
				DPlayStoreContract.getBoughtGameIds(walletAddress, (boughtGameIds) => {
					console.log(boughtGameIds);
				});
			};
		}]);
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});