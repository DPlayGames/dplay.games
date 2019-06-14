RUN(() => {
	
	BODY.addStyle({
		backgroundImage : 'resource/background.png'
	});
	
	DIV({
		style : {
			height : 800
		},
		c : [DIV({
			style : {
				flt : 'left',
				width : 300,
				height : '100%',
				backgroundColor : 'rgba(0, 0, 0, 0.4)'
			},
			c : [IMG({
				style : {
					marginTop : 50,
					marginLeft : 40
				},
				src : 'resource/logo.png'
			})]
		}), CLEAR_BOTH()]
	}).appendTo(BODY);
});