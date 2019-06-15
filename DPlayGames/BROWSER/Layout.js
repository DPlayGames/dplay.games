DPlayGames.Layout = OBJECT({
	
	init : (inner, self) => {
		
		BODY.addStyle({
			backgroundImage : '/DPlayGames/R/background.png'
		});
		
		let tagList;
		let contentWrapper;
		
		DIV({
			style : {
				height : 800
			},
			c : [
			// 태그 목록
			DIV({
				style : {
					flt : 'left',
					width : 300,
					height : '100%',
					backgroundColor : 'rgba(0, 0, 0, 0.4)'
				},
				c : [A({
					style : {
						position : 'absolute',
						marginTop : 50,
						marginLeft : 40
					},
					c : IMG({
						src : '/DPlayGames/R/logo.png'
					}),
					on : {
						tap : () => {
							DPlayGames.GO('');
						}
					}
				}),
				
				tagList = DIV()]
			}), CLEAR_BOTH(),
			
			// 내용
			contentWrapper = DIV(),
			
			// 우측 상단 메뉴 버튼
			A({
				style : {
					position : 'absolute',
					right : 30,
					top : 30
				},
				c : IMG({
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
			
			if (menu !== undefined) {
				
				UANI.HIDE_SLIDE_UP({
					node : menu
				}, () => {
					menu.remove();
					menu = undefined;
				});
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
					uri : 'newgame'
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
		
		// 내용을 등록합니다.
		let setContent = self.setContent = (content) => {
			//REQUIRED: content
			
			contentWrapper.append(content);
		};
		
		// 내용을 삭제합니다.
		let removeContent = self.removeContent = () => {
			contentWrapper.empty();
		};
	}
});