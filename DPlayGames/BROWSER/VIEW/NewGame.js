DPlayGames.NewGame = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let gameURLInput;
		let content = DIV({
			style : {
				paddingTop : 200,
				margin : 'auto',
				width : 500,
				color : '#979b9b'
			},
			c : [
			FORM({
				style : {
					backgroundColor : 'rgba(0, 0, 0, 0.5)',
					padding : 20
				},
				c : [
				H1({
					style : {
						fontWeight : 'bold',
						fontSize : 20,
						textAlign : 'center'
					},
					c : MSG('CREATE_GAME_TITLE')
				}),
				
				P({
					style : {
						marginTop : 20
					},
					c : MSG('CREATE_GAME_DESCRIPTION')
				}),
				
				UUI.FULL_INPUT({
					style : {
						marginTop : 10,
						border : '1px solid #abacad',
						backgroundColor : '#e6e2dd'
					},
					name : 'price',
					placeholder : MSG('GAME_PRICE_INPUT')
				}),
				
				gameURLInput = UUI.FULL_INPUT({
					style : {
						marginTop : 10,
						border : '1px solid #abacad',
						backgroundColor : '#e6e2dd'
					},
					name : 'gameURL',
					placeholder : MSG('GAME_DOWNLOAD_URL_INPUT')
				}),
				
				UUI.FULL_CHECKBOX({
					style : {
						marginTop : 10
					},
					name : 'isWebGame',
					label : MSG('IS_WEB_GAME_CHECKBOX'),
					on : {
						change : (e, checkbox) => {
							if (checkbox.getValue() === true) {
								gameURLInput.setPlaceholder(MSG('GAME_PLAY_URL_INPUT'));
							} else {
								gameURLInput.setPlaceholder(MSG('GAME_DOWNLOAD_URL_INPUT'));
							}
						}
					}
				}),
				
				H5({
					style : {
						marginTop : 20,
						fontWeight : 'bold'
					},
					c : MSG('GAME_BASE_LANG_INPUT')
				}),
				
				UUI.FULL_SELECT({
					style : {
						marginTop : 10,
						border : '1px solid #abacad',
						backgroundColor : '#e6e2dd'
					},
					name : 'defaultLanguage',
					value : INFO.getLang(),
					options : RUN(() => {
						
						let options = [];
						
						EACH(DPlayGames.LANGS, (name, lang) => {
							options.push(OPTION({
								value : lang,
								c : name
							}));
						});
						
						return options;
					})
				}),
				
				UUI.FULL_SUBMIT({
					style : {
						margin : 'auto',
						marginTop : 20,
						width : 330,
						height : 33,
						backgroundImage : '/DPlayGames/R/button.png',
						textAlign : 'center',
						cursor : 'pointer',
						color : '#afada8',
						fontWeight : 'bold',
						backgroundColor : 'transparent'
					},
					inputStyle : {
						padding : 0
					},
					value : MSG('CREATE_GAME_SUBMIT')
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