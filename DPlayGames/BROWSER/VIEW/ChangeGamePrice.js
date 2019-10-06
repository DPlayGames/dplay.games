DPlayGames.ChangeGamePrice = CLASS({

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
					c : MSG('CHANGE_GAME_PRICE_TITLE')
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
					value : MSG('CHANGE_GAME_PRICE_SUBMIT')
				})],
				on : {
					submit : (e, form) => {
						
						let data = form.getData();
						
						// 실제 가격 환산
						data.price = DPlayCoinContract.getActualPrice(data.price);
						
						DPlayStoreContract.changePrice({
							gameId : gameId,
							price : data.price
						}, () => {
							
							// 게임 정보 화면으로 이동
							DPlayGames.GO('game/' + gameId);
						});
					}
				}
			}));
			
			DPlayStoreContract.getGameInfo(gameId, (publisher, isReleased, price, gameURL, isWebGame, defaultLanguage, createTime, lastUpdateTime) => {
				
				form.setData({
					price : DPlayCoinContract.getDisplayPrice(price)
				});
			});
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});