var loadState = {

	preload: function () {
        //variable para guardar el cargando... al inicar al juego
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);
        
        //variable para guardar la progressBar al inicar al juego
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

        //cargamos los sprites necesarios, jugador, background, el boton mutear, etc
		game.load.spritesheet('player1', 'assets/player1.png', 25, 36);
        game.load.spritesheet('player2', 'assets/player2.png', 25, 36);
        game.load.spritesheet('porteria1', 'assets/porteria.png', 113, 177);
        game.load.spritesheet('porteria2', 'assets/porteria2.png', 113, 177);
        game.load.spritesheet('ball', 'assets/pelota.png', 20, 20);
        game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
		game.load.image('background', 'assets/campoFutbol.jpg');
        game.load.image('background2', 'assets/backgroundControles.jpg');
        
        //cargamos los tilesets del mapa y el propio mapa
		this.load.image('tileset', 'assets/tileset.png'); 
        this.load.tilemap('map', 'assets/mapaFutbol.json', null, Phaser.Tilemap.TILED_JSON);
        
        //cargamos los mp3 para el sonido
        game.load.audio('ambiente', ['assets/ambiente.mp3']);
		game.load.audio('gol', ['assets/gol.mp3']);
		game.load.audio('final', ['assets/final.mp3']);
	},

    //funcion para llamar al menu
	create: function() { 
		game.state.start('menu');
	}
};