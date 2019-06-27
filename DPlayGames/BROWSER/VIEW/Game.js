DPlayGames.Game = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let content = DIV({
			style : {
				paddingTop : 110,
				margin : 'auto',
				width : 1000
			}
		});
		
		inner.on('paramsChange', (params) => {
			
			let gameId = params.gameId;
			
			content.empty();
			
			DPlayStoreContract.getGameInfo(gameId, (publisher, isReleased, price, gameURL, isWebGame, defaultLanguage, createTime, lastUpdateTime) => {
				
				let language = INFO.getLang();
				
				NEXT([
				(next) => {
					
					DPlayStoreContract.getGameDetails({
						gameId : gameId,
						language : language
					}, (title, summary, description, titleImageURL, bannerImageURL) => {
						
						// 현재 언어에 해당하는 이름이 없는 경우 기본 언어의 정보를 가져옵니다.
						if (title === '') {
							
							DPlayStoreContract.getGameDetails({
								gameId : gameId,
								language : language = defaultLanguage
							}, next);
						}
						
						else {
							next(title, summary, description, titleImageURL, bannerImageURL);
						}
					});
				},
				
				() => {
					return (title, summary, description, titleImageURL, bannerImageURL) => {
						
						let menuPanel;
						
						content.append(menuPanel = DIV({
							c : [
							// 게임 세부 내용 수정 버튼
							setGameDetailsButton = A({
								style : {
									flt : 'left'
								},
								c : '게임 세부 내용 수정',
								on : {
									tap : () => {
										DPlayGames.GO('game/' + gameId + '/details');
									}
								}
							}),
							
							// 게임 출시 버튼
							releaseButton = A({
								style : {
									flt : 'right'
								},
								c : isReleased !== true ? '게임 출시' : '게임 출시 취소',
								on : {
									tap : () => {
										
										// 게임 출시
										if (isReleased !== true) {
											DPlayStoreContract.release(gameId, () => {
												releaseButton.empty();
												releaseButton.append('게임 출시 취소');
											});
										}
										
										// 게임 출시
										else {
											DPlayStoreContract.unrelease(gameId, () => {
												releaseButton.empty();
												releaseButton.append('게임 출시');
											});
										}
									}
								}
							}),
							
							CLEAR_BOTH()]
						}));
						
						menuPanel.hide();
						
						SmartContract.getWalletAddress((walletAddress) => {
							if (walletAddress === publisher) {
								menuPanel.show();
							}
						});
						
						// 상단 게임 정보
						content.append(DIV({
							style : {
								backgroundColor : 'rgba(0, 0, 0, 0.5)',
								padding : 6
							},
							c : [
							DIV({
								style : {
									flt : 'left',
									backgroundColor : '#000000',
									width : 640
								},
								c : [UUI.V_CENTER({
									style : {
										backgroundColor : '#000000',
										width : 640,
										height : 360,
										textAlign : 'center',
										color : '#726d6d',
										backgroundImage : titleImageURL === '' ? undefined : titleImageURL,
										backgroundSize : 'cover',
										backgroundPosition : 'center center'
									},
									c : titleImageURL === '' ? '이미지가 없습니다.' : undefined
								})]
							}),
							
							DIV({
								style : {
									flt : 'right',
									backgroundColor : '#000000',
									width : 342
								},
								c : [
								UUI.V_CENTER({
									style : {
										backgroundColor : '#000000',
										width : 342,
										height : 192.375,
										textAlign : 'center',
										color : '#726d6d',
										backgroundImage : bannerImageURL === '' ? undefined : bannerImageURL,
										backgroundSize : 'cover',
										backgroundPosition : 'center center'
									},
									c : bannerImageURL === '' ? '이미지가 없습니다.' : undefined
								})]
							}),
							
							CLEAR_BOTH()]
						}));
						
						// 기타 게임 정보
						content.append(DIV({
							style : {
								padding : 6
							},
							c : [
							DIV({
								style : {
									flt : 'left',
									width : 640
								},
								c : description
							}),
							
							DIV({
								style : {
									flt : 'right',
									width : 342
								},
								c : [
								DIV({
									style : {
										backgroundColor : 'rgba(0, 0, 0, 0.5)'
									},
									c : ['태그들', UUI.BUTTON({
										c : '태그 설정',
										on : {
											tap : () => {
												DPlayGames.GO('game/' + gameId + '/tags');
											}
										}
									})]
								})]
							}),
							
							CLEAR_BOTH()]
						}));
						
						DPlayStoreSearchContract.getGameTags({
							gameId : gameId,
							language : language
						}, (tag1, tag2, tag3, tag4) => {
							console.log(tag1, tag2, tag3, tag4);
						});
					};
				}])
			});
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});