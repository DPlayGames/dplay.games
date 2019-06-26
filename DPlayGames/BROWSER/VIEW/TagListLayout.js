DPlayGames.TagListLayout = CLASS((cls) => {
	
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
				c : [
				// 태그 목록
				UUI.PANEL({
					style : {
						position : 'fixed',
						left : 0,
						top : 0,
						width : 200,
						height : '100%',
						backgroundImage : '/DPlayGames/R/background.png',
						overflowY : 'auto'
					},
					contentStyle : {
						minHeight : '100%',
						backgroundColor : 'rgba(0, 0, 0, 0.4)'
					},
					c : [H1({
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
					
					tagList = UL({
						style : {
							paddingTop : 120,
							paddingBottom : 100,
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
				
				contentWrapper = DIV({
					style : {
						marginLeft : 200
					}
				})]
			});
			
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
			
			DPlayGames.Layout.setContent(layout);
			
			inner.on('close', () => {
				layout.remove();
			});
		}
	};
});
