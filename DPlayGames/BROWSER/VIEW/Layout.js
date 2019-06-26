DPlayGames.Layout = OBJECT({
	
	init : (inner, self) => {
		
		BODY.addStyle({
			backgroundImage : '/DPlayGames/R/background.png'
		});
		
		let tagList;
		let contentWrapper;
		
		DIV({
			style : {
				height : 1000
			},
			c : [
			// 태그 목록
			DIV({
				style : {
					flt : 'left',
					width : 200,
					height : '100%',
					backgroundColor : 'rgba(0, 0, 0, 0.4)'
				},
				c : [H1({
					style : {
						marginTop : 30,
						marginLeft : 25
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
				
				tagList = UL({
					style : {
						marginTop : 40,
						marginLeft : 25
					},
					c : [LI({
						style : {
							marginBottom : 20,
							fontWeight : 'bold',
							color : '#c40000'
						},
						c : '태그'
					})]
				})]
			}),
			
			// 내용
			contentWrapper = DIV({
				style : {
					flt : 'left',
					onDisplayResize : (width) => {
						return {
							width : width - 200
						};
					}
				}
			}), CLEAR_BOTH(),
			
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
		
		[
			'전체',
			'전략 시뮬레이션',
			'FPS',
			'고양이',
			'스포츠',
			'시뮬레이션',
			'레이싱',
			'인디',
			'캐주얼',
			'MMORPG',
			'시뮬레이션',
			'FPS',
			'고양이',
			'스포츠',
			'시뮬레이션',
			'레이싱',
			'인디',
			'캐주얼',
			'RPG'
		].forEach((tag) => {
			
			tagList.append(LI({
				style : {
					marginTop : 10,
					color : '#efece9'
				},
				c : A({
					c : tag
				})
			}));
		});
		
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