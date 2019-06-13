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
			}
		}), CLEAR_BOTH()]
	}).appendTo(BODY);
});