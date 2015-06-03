var playState = {

	create: function() { 
		this.cursor = game.input.keyboard.createCursorKeys();
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
		this.wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D)
		};

		this.createWorld();
        
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.game.physics.arcade.enable(this.player); 
		this.player.anchor.setTo(0.5, 0.5);
		this.player.body.gravity.y = 0;	
        this.player.body.collideWorldBounds = true;
	},

	update: function() {
        
        this.game.physics.arcade.collide(this.player, this.layer);
		this.movePlayer()
      },

	movePlayer: function() {
        
        if (this.cursor.left.isDown)
        {
            this.player.x -= 2;
        } else if (this.cursor.right.isDown) {
            this.player.x += 2;
        }
        if (this.cursor.up.isDown)
        {
            this.player.y -= 2;
        } else if (this.cursor.down.isDown) {
            this.player.y += 2;
        }    
    },

	startMenu: function() {
		game.state.start('menu');
	},

	createWorld: function() {      
        //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
        this.map = game.add.tilemap('map');
        //  Now add in the tileset
        this.map.addTilesetImage('tileset');
        //  Create our layer
        this.layer = this.map.createLayer('Capa de Patrones 1');
        //  Resize the world
        this.layer.resizeWorld();
        //  This isn't totally accurate, but it'll do for now
        this.map.setCollisionBetween(1, 0);  
        game.physics.enable(this.map);
	}
};