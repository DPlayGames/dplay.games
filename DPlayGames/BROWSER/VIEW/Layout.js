DPlayGames.Layout = CLASS((cls) => {
	
	let contentWrapper;
	
	let setContent = cls.setContent = (content) => {
		contentWrapper.empty();
		contentWrapper.append(content);
	};
	
	return {
		
		preset : () => {
			return VIEW;
		},
		
		init : (inner, self) => {
			
			let layout = DIV({
				style : {
					backgroundImage : '/DPlayGames/R/background.jpg',
					position : 'relative'
				},
				c : [
				// 로고
				H1({
					style : {
						position : 'absolute',
						left : 25,
						top : 30
					},
					c : [A({
						c : IMG({
							style : {
								width : 109
							},
							src : '/DPlayGames/R/logo.png'
						}),
						on : {
							tap : () => {
								DPlayGames.GO('');
							}
						}
					}), SPAN({
						style : {
							marginLeft : -22,
							fontStyle : 'italic',
							color : 'yellow'
						},
						c : 'alpha'
					})]
				}),
				
				contentWrapper = DIV({
					style : {
						paddingBottom : 100
					}
				}),
				
				// 우측 상단 메뉴 버튼
				A({
					style : {
						position : 'absolute',
						right : 40,
						top : 40
					},
					c : IMG({
						style : {
							width : 15
						},
						src : '/DPlayGames/R/menubutton.png'
					}),
					on : {
						tap : () => {
							openMenu();
						}
					}
				})]
			}).appendTo(BODY);
			
			let openMenu = self.openMenu = () => {
				
				let menu = UL({
					style : {
						position : 'absolute',
						right : 30,
						top : 70
					}
				}).appendTo(BODY);
				
				EACH([{
					title : MSG('MENU_MY_GAMES_BUTTON'),
					uri : 'mygames'
				}, {
					title : MSG('MENU_MY_INFO_BUTTON'),
					uri : 'me'
				}, {
					title : MSG('MENU_NEW_GAME_BUTTON'),
					uri : 'game/new'
				}], (menuInfo, index) => {
					
					menu.append(LI({
						style : {
							borderBottom : '1px solid #000',
							backgroundColor : '#333'
						},
						c : A({
							style : {
								width : 150,
								display : 'block',
								padding : 8,
								textAlign : 'center'
							},
							c : menuInfo.title,
							on : {
								touchstart : () => {
									DPlayGames.GO(menuInfo.uri);
								}
							}
						})
					}));
				});
				
				EVENT_ONCE('touchstart', () => {
					menu.remove();
				});
			};
			
			inner.on('close', () => {
				layout.remove();
			});
		}
	};
});
