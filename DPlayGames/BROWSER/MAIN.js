DPlayGames.MAIN = METHOD({

	run : () => {
		
		// 나눔 명조 폰트 추가
		ADD_FONT({
			name : 'Nanum Myeongjo',
			style : 'normal',
			weight : 400,
			woff2 : '/DPlayGames/R/font/NanumMyeongjo-Regular.woff2',
			woff : '/DPlayGames/R/font/NanumMyeongjo-Regular.woff',
			ttf : '/DPlayGames/R/font/NanumMyeongjo-Regular.ttf'
		});
		
		let style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = 'input[type="range"]::-webkit-slider-thumb { width:30px; height:30px; } * { font-family:\'Nanum Myeongjo\', serif; user-select:none; -webkit-user-select:none; -webkit-tap-highlight-color:transparent; user-drag:none; -webkit-user-drag:none; } input, textarea { user-select:auto; -webkit-user-select:auto; }';
		document.getElementsByTagName('head')[0].appendChild(style);
		
		DPlayGames.MATCH_VIEW({
			uri : '',
			target : DPlayGames.Home
		});
	}
});