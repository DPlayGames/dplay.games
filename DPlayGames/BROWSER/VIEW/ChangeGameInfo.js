DPlayGames.ChangeGameInfo = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let content = DIV({
			style : {
				paddingTop : 200,
				margin : 'auto',
				width : 500,
				color : '#979b9b'
			}
		});
		
		inner.on('paramsChange', (params) => {
			
			let gameId = params.gameId;
			
			content.empty();
			
			let form;
			let gameURLInput;
			
			content.append(form = FORM({
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
					c : MSG('CHANGE_GAME_INFO_TITLE')
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
					value : MSG('CHANGE_GAME_INFO_SUBMIT')
				})],
				on : {
					submit : (e, form) => {
						
						let data = form.getData();
						
						DPlayStoreContract.changeGameInfo({
							gameId : gameId,
							gameURL : data.gameURL,
							isWebGame : data.isWebGame,
							defaultLanguage : data.defaultLanguage
						}, () => {
							
							// 게임 정보 화면으로 이동
							DPlayGames.GO('game/' + gameId);
						});
					}
				}
			}));
			
			DPlayStoreContract.getGameInfo(gameId, (publisher, isReleased, price, gameURL, isWebGame, defaultLanguage, createTime, lastUpdateTime) => {
				
				form.setData({
					gameURL : gameURL,
					isWebGame : isWebGame,
					defaultLanguage : defaultLanguage
				});
			});
			
			content.append(A({
				c : MSG('TRANSFER_GAME_BUTTON'),
				on : {
					tap : () => {
						
						DPlayGames.Prompt({
							content : MSG('TRANSFER_TARGET_ACCOUNT_ID_INPUT')
						}, (to) => {
							
							DPlayStoreContract.transferGame({
								to : to,
								gameId : gameId
							}, () => {
								
								// 게임 정보 화면으로 이동
								DPlayGames.GO('game/' + gameId);
							});
						});
					}
				}
			}));
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});