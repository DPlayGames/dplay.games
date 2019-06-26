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
		style.innerHTML = 'input[type="range"]::-webkit-slider-thumb { width:30px; height:30px; } * { font-family:\'Nanum Myeongjo\'; -webkit-tap-highlight-color:transparent; } input, textarea { user-select:auto; -webkit-user-select:auto; }';
		document.getElementsByTagName('head')[0].appendChild(style);
		
		MSG.loadCSV('/DPlayGames/R/text.csv', () => {
			
			DPlayGames.MATCH_VIEW({
				uri : '**',
				target : DPlayGames.Layout
			});
			
			DPlayGames.MATCH_VIEW({
				uri : '**',
				excludeURI : ['game/new', 'game/{gameId}/update'],
				target : DPlayGames.TagListLayout
			});
			
			DPlayGames.MATCH_VIEW({
				uri : '',
				target : DPlayGames.Home
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'game/new',
				target : DPlayGames.NewGame
			});
		});
	}
});
