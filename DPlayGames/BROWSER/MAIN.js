DPlayGames.MAIN = METHOD({

	run : () => {
		
		MSG.loadCSV('/DPlayGames/R/text.csv', () => {
			
			DPlayGames.MATCH_VIEW({
				uri : '**',
				target : DPlayGames.Layout
			});
			
			DPlayGames.MATCH_VIEW({
				uri : '**',
				excludeURI : ['me', 'user/**', 'mygames', 'game/**'],
				target : DPlayGames.TagListLayout
			});
			
			DPlayGames.MATCH_VIEW({
				uri : '',
				target : DPlayGames.Home
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'me',
				target : DPlayGames.Me
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'user/{address}',
				target : DPlayGames.User
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'mygames',
				target : DPlayGames.MyGames
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'game/new',
				target : DPlayGames.NewGame
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'game/{gameId}',
				excludeURI : 'game/new',
				target : DPlayGames.Game
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'game/{gameId}/details',
				target : DPlayGames.SetGameDetails
			});
			
			DPlayGames.MATCH_VIEW({
				uri : 'game/{gameId}/tags',
				target : DPlayGames.SetGameTags
			});
		});
	}
});
