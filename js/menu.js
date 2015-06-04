var menuState = {

	create: function() { 
        //titulo del juego en la pantalla de inicio
		var nameLabel = game.add.text(game.world.centerX, -50, 'BigHead Football', { font: '70px Geo', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

        //añadir el texto para que el usuario apriete el boton correcto para empezar a jugar
	    var text = 'press the up arrow key to start';
		var startLabel = game.add.text(game.world.centerX, game.world.height-80, text, { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);

		game.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start(); 
        
        //el boton para mutear el sonido
		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
		this.muteButton.input.useHandCursor = true;
		if (game.sound.mute) {
			this.muteButton.frame = 1;
		}
        //declaramos la variable para el boton UP
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);

		game.input.onDown.addOnce(this.start, this);
	},
    
    //funcion para mutear el sonido
	toggleSound: function() {
		game.sound.mute = ! game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;		
	},

    //funcion para empezar a jugar, llamando al play
	start: function() {
		game.state.start('play');	
	}
};