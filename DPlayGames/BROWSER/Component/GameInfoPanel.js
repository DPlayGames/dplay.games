DPlayGames.GameInfoPanel = CLASS({
	
	preset : () => {
		return UUI.PANEL;
	},
	
	params : () => {
		return {
			cursor : 'pointer'
		};
	},
	
	init : (inner, self, params) => {
		
		let rating = 9;
		
		EACH([DIV({
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
		})], self.append);
	}
});
