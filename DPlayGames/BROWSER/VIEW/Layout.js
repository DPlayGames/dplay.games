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
					backgroundImage : '/DPlayGames/R/background.png',
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
					c : A({
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
					})
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
							toggleMenu();
						}
					}
				})]
			}).appendTo(BODY);
			
			let menu;
			
			// 우측 상단 메뉴를 열거나 닫습니다.
			let toggleMenu = self.toggleMenu = () => {
				
				let hideMenu = () => {
					
					UANI.HIDE_SLIDE_UP({
						node : menu
					}, () => {
						menu.remove();
						menu = undefined;
					});
				};
				
				if (menu !== undefined) {
					hideMenu();
				}
				
				else {
					
					menu = UL({
						style : {
							position : 'absolute',
							right : 30,
							top : 70
						}
					}).appendTo(BODY);
					
					EACH([{
						title : '새 게임 등록',
						uri : 'game/new'
					}], (menuInfo, index) => {
						
						menu.append(LI({
							style : {
								border : '1px solid #666',
								backgroundColor : '#333'
							},
							c : A({
								style : {
									width : 150,
									display : 'block',
									padding : 10,
									textAlign : 'center'
								},
								c : menuInfo.title,
								on : {
									tap : () => {
										DPlayGames.GO(menuInfo.uri);
										hideMenu();
									}
								}
							})
						}));
					});
					
					UANI.SHOW_SLIDE_DOWN({
						node : menu
					});
				}
			};
			
			inner.on('close', () => {
				layout.remove();
			});
		}
	};
});