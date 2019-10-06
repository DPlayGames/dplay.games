DPlayGames.NewGame = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let content = DIV({
			style : {
				paddingTop : 200,
				margin : 'auto',
				width : 500
			},
			c : [
			FORM({
				style : {
					backgroundColor : 'rgba(0, 0, 0, 0.5)',
					padding : 30
				},
				c : [
				P({
					c : '게임의 기본 정보를 입력해주세요. 게임의 이름과 소개는 게임 생성 후 상세 정보 입력에서 입력하실 수 있습니다.'
				}),
				
				UUI.FULL_INPUT({
					style : {
						marginTop : 10
					},
					name : 'price',
					placeholder : '게임 가격'
				}),
				
				UUI.FULL_INPUT({
					style : {
						marginTop : 10
					},
					name : 'gameURL',
					placeholder : '게임 다운로드 URL'
				}),
				
				UUI.FULL_CHECKBOX({
					style : {
						marginTop : 10
					},
					name : 'isWebGame',
					label : '웹 게임인가요?'
				}),
				
				P({
					style : {
						marginTop : 10
					},
					c : '웹 게임의 경우, 게임 다운로드 URL에 웹 게임의 주소를 입력해주세요.'
				}),
				
				H5({
					style : {
						marginTop : 20
					},
					c : '기본 언어'
				}),
				
				UUI.FULL_SELECT({
					style : {
						marginTop : 10
					},
					name : 'defaultLanguage',
					options : [OPTION({
						value : 'ko',
						c : '한국어'
					})]
				}),
				
				UUI.FULL_SUBMIT({
					style : {
						marginTop : 10
					},
					value : '게임 생성'
				})],
				on : {
					submit : (e, form) => {
						
						let gameData = form.getData();
						
						// 실제 가격 환산
						gameData.price = DPlayCoinContract.getActualPrice(gameData.price);
						
						DPlayStoreContract.newGame(gameData, () => {
							
							DPlayInventory.getAccountId((accountId) => {
								
								// 가장 최신의 게임 ID를 가져옵니다.
								DPlayStoreContract.getPublishedGameIds(accountId, (gameIds) => {
									
									// 게임 정보 화면으로 이동
									DPlayGames.GO('game/' + gameIds[gameIds.length - 1]);
								});
							});
						});
					}
				}
			})]
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});