  
	var global;
	var global2;
	var global3;
	
	
    $(function() {
		
		var gamesSteam = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=6D636D1EB44C56B01D913915A8D64BAC&steamid=76561198008217732&format=json&include_appinfo=1";
		$.get( gamesSteam, 
		
		function( data ) {
		  
		  console.log(data);
		  global = data;
		  
		   $("#numberOfGames").append("I currently have " + global.response.game_count +
									   " games in my steam libruary." + "<br>");
		   
		   $("#gameTitles").append("Here are all the current titles:" + "<br>");
		for(var x = 0 ; x < global.response.games.length; x++)
			{		
			   $("#gameTitles").append(global.response.games[x].name + ", ");
			}
		});
    });
	
	    $(function() {
		
		var SomeoneElseSteam = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=6D636D1EB44C56B01D913915A8D64BAC&steamid=76561197960434622&format=json";
		$.get( SomeoneElseSteam,
		
		function( data ) {
		  console.log(data);
		  global3 = data;
		for(var x = 0 ; x < global3.response.games.length; x++)
			{
			   $("#someOneElse").append(global3.response.games[x].name + "<br>");
			}
		});
    });

	 $(function() {
		
		var currentGames = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=6D636D1EB44C56B01D913915A8D64BAC&steamid=76561198008217732&format=json";
		$.get( currentGames, 
		
		function( data ) {
		  
		  console.log(data);
		  global2 = data;

		for(var x = 0 ; x < global2.response.games.length; x++)
			{
			   $("#recentlyPlayed").append(global2.response.games[x].name + "<br>");
			} 
		});
    });