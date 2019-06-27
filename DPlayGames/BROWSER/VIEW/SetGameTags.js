DPlayGames.SetGameTags = CLASS({

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
			
			let form;
			
			content.append(form = FORM({
				c : [UUI.FULL_SELECT({
					style : {
						width : 160,
						border : 'none',
						backgroundColor : '#2e2e2c'
					},
					selectStyle : {
						padding : 5,
						color : '#949191'
					},
					name : 'language',
					options : [OPTION({
						value : 'ko',
						c : '한국어'
					})]
				}), UUI.FULL_INPUT({
					name : 'tag1',
					placeholder : '태그'
				}), UUI.FULL_INPUT({
					name : 'tag2',
					placeholder : '태그'
				}), UUI.FULL_INPUT({
					name : 'tag3',
					placeholder : '태그'
				}), UUI.FULL_INPUT({
					name : 'tag4',
					placeholder : '태그'
				}), UUI.FULL_SUBMIT({
					value : '게임 태그 저장'
				})],
				on : {
					submit : (e, form) => {
						
						let gameTagsData = form.getData();
						
						gameTagsData.gameId = gameId;
						
						DPlayStoreSearchContract.setGameTags(gameTagsData, () => {
							
							// 게임 정보 화면으로 이동
							DPlayGames.GO('game/' + gameId);
						});
					}
				}
			}));
			
			let loadGameTags = (language) => {
				
				DPlayStoreSearchContract.getGameTags({
					gameId : gameId,
					language : INFO.getLang()
				}, (tag1, tag2, tag3, tag4) => {
					
					form.setData({
						language : language,
						tag1 : tag1,
						tag2 : tag2,
						tag3 : tag3,
						tag4 : tag4
					});
				});
			};
			
			loadGameTags(INFO.getLang());
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});