var menuState = {

	create: function() { 
        //titulo del juego en la pantalla de inicio
		var nameLabel = game.add.text(game.world.centerX, game.world.height - 250, 'BigHead Football', { font: '70px Armageda', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

        //añadir el texto para que el usuario apriete el boton correcto para empezar a jugar
	    var text = 'press the up arrow key to start';
		var startLabel = game.add.text(game.world.centerX, game.world.height-80, text, { font: '25px verdana', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);

		game.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start(); 
        
        //declaramos la variable para el boton UP
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);

		game.input.onDown.addOnce(this.start, this);
	},

    //funcion para empezar a jugar, llamando al play
	start: function() {
		game.state.start('play');	
	}
};