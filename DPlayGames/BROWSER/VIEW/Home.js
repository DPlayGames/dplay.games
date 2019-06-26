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
				})]
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
				})]
			})]
		});
		
		let createGameItem = () => {
			
			let rating = 9;
			
			return A({
				style : {
					flt : 'left',
					marginRight : 10,
					marginBottom : 30
				},
				c : [DIV({
					style : {
						width : 192,
						height : 108,
						backgroundImage : '/DPlayGames/R/sample.png',
						backgroundSize : 'cover',
						backgroundPosition : 'center center'
					}
				}), H3({
					style : {
						marginTop : 8,
						marginLeft : 10,
						color : '#efece9'
					},
					c : 'Mold on Pizza'
				}), H4({
					style : {
						marginTop : 2,
						marginLeft : 10,
						color : '#726d6d',
						fontSize : 12
					},
					c : 'BTNcafe'
				}), DIV({
					style : {
						marginTop : 6,
						marginLeft : 10,
						color : '#c40000',
						fontSize : 12
					},
					c : '15.44 DC'
				}), DIV({
					style : {
						marginTop : 2,
						marginLeft : 10,
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
				})]
			});
		};
		
		REPEAT(5, () => {
			goodGameList.append(createGameItem());
		});
		goodGameList.append(CLEAR_BOTH());
		
		REPEAT(10, () => {
			newGameList.append(createGameItem());
		});
		newGameList.append(CLEAR_BOTH());
		
		DPlayGames.TagListLayout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});