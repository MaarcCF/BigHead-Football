var menuState = {

	create: function() { 
        //añadimos un background para los controles
        game.add.tileSprite(0, 0, 1000, 600, 'background2');
        
        //titulo del juego en la pantalla de inicio
		var nameLabel = game.add.text(game.world.centerX, game.world.height - 350, 'BigHead Football', { font: '70px Armageda', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

        //añadir el texto para que el usuario apriete el boton correcto para empezar a jugar
	    var text = 'press the up arrow key to start';
		var startLabel = game.add.text(game.world.centerX, game.world.height-50, text, { font: '25px verdana', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);

		game.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start(); 
        
        //declaramos la variable para el boton UP
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);
        
        this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
		this.muteButton.input.useHandCursor = true;
		if (game.sound.mute) {
			this.muteButton.frame = 1;
		}

		game.input.onDown.addOnce(this.start, this);
	},
    
    toggleSound: function() {
		game.sound.mute = ! game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;
	},

    //funcion para empezar a jugar, llamando al play
	start: function() {
		game.state.start('play');
	}
};