DPlayGames.Game = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let content = DIV({
			c : 'test'
		});
		
		DPlayGames.Layout.setContent(content);
		
		inner.on('close', () => {
			content.remove();
		});
	}
});