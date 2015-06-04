//fijamos el tamaño de la pantalla
var game = new Phaser.Game(800, 400, Phaser.AUTO, 'gameDiv');

game.global = {
    //puntuacion
	score: 0
};
//añadimos todos los estados
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.start('boot');