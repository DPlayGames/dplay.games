DPlayGames.GameDetails = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let content = DIV({
			style : {
				paddingTop : 110,
				margin : 'auto',
				width : 1000
			},
			c : [
			SELECT({
				style : {
					padding : 5,
					width : 160,
					height : 30,
					border : 'none',
					backgroundColor : '#2e2e2c',
					color : '#949191'
				},
				c : [OPTION({
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
					c : [UUI.V_CENTER({
						style : {
							backgroundColor : '#000000',
							width : 640,
							height : 360,
							textAlign : 'center',
							color : '#726d6d'
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
							placeholder : '이미지 URL'
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
					UUI.V_CENTER({
						style : {
							backgroundColor : '#000000',
							width : 342,
							height : 192.375,
							textAlign : 'center',
							color : '#726d6d'
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
							placeholder : '이미지 URL'
						})]
					})]
				}),
				
				CLEAR_BOTH()
				]
			})]
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});