DPlayGames.SetGameDetails = CLASS({

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
			let titleImagePreview;
			let bannerImagePreview;

			// 게임 상세 정보 입력
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
				}),
				
				DIV({
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
						c : [titleImagePreview = UUI.V_CENTER({
							style : {
								backgroundColor : '#000000',
								width : 640,
								height : 360,
								textAlign : 'center',
								color : '#726d6d',
								backgroundSize : 'cover',
								backgroundPosition : 'center center'
							},
							c : ['이미지 미리보기', UUI.FULL_INPUT({
								style : {
									width : 300,
									margin : 'auto',
									marginTop : 10,
									backgroundColor : '#2e2e2c'
								},
								inputStyle : {
									color : '#949191'
								},
								name : 'titleImageURL',
								placeholder : '이미지 URL',
								on : {
									keyup : (e, input) => {
										titleImagePreview.addStyle({
											backgroundImage : input.getValue()
										});
									}
								}
							})]
						})]
					}),
					
					DIV({
						style : {
							flt : 'right',
							backgroundColor : '#000000',
							width : 342
						},
						c : [
						bannerImagePreview = UUI.V_CENTER({
							style : {
								backgroundColor : '#000000',
								width : 342,
								height : 192.375,
								textAlign : 'center',
								color : '#726d6d',
								backgroundSize : 'cover',
								backgroundPosition : 'center center'
							},
							c : ['이미지 미리보기', UUI.FULL_INPUT({
								style : {
									width : 200,
									margin : 'auto',
									marginTop : 10,
									backgroundColor : '#2e2e2c'
								},
								inputStyle : {
									color : '#949191'
								},
								name : 'bannerImageURL',
								placeholder : '이미지 URL',
								on : {
									keyup : (e, input) => {
										bannerImagePreview.addStyle({
											backgroundImage : input.getValue()
										});
									}
								}
							})]
						}), UUI.FULL_INPUT({
							name : 'title',
							placeholder : '게임 이름'
						}), UUI.FULL_TEXTAREA({
							name : 'summary',
							placeholder : '간략한 게임 소개'
						})]
					}),
					
					CLEAR_BOTH()]
				}), UUI.FULL_TEXTAREA({
					name : 'description',
					placeholder : '상세한 게임 설명'
				}), UUI.FULL_SUBMIT({
					value : '게임 세부 정보 저장'
				})],
				on : {
					submit : (e, form) => {
						
						let gameDetailsData = form.getData();
						
						gameDetailsData.gameId = gameId;
						
						DPlayStoreContract.setGameDetails(gameDetailsData, () => {
							
							// 게임 정보 화면으로 이동
							DPlayGames.GO('game/' + gameId);
						});
					}
				}
			}));
			
			let loadGameDetails = (language) => {
				
				DPlayStoreContract.getGameDetails({
					gameId : gameId,
					language : language
				}, (title, summary, description, titleImageURL, bannerImageURL) => {
					
					form.setData({
						language : language,
						title : title,
						summary : summary,
						description : description,
						titleImageURL : titleImageURL,
						bannerImageURL : bannerImageURL
					});
					
					if (titleImageURL !== '') {
						titleImagePreview.addStyle({
							backgroundImage : titleImageURL
						});
					}
					
					if (bannerImageURL !== '') {
						bannerImagePreview.addStyle({
							backgroundImage : bannerImageURL
						});
					}
				});
			};
			
			loadGameDetails(INFO.getLang());
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});