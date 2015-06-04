var bootState = {

	preload: function () {
        //cargar una imagen de una barra cargando para el inicio del juego
		game.load.image('progressBar', 'assets/progressBar.png');
	},

	create: function() { 
        //establecer el color del fondo
		game.stage.backgroundColor = '#3498db';
        //activar las fisicas del juego
		game.physics.startSystem(Phaser.Physics.ARCADE);
        //llamar al estado start con el parametro load
		game.state.start('load');
	}
};