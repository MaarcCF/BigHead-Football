var playState = {

	create: function() { 
        //añadir el background del juego(fondo)
        game.add.image(0, 0, 'background');
        //añadir el funcionamiento de las teclas
		this.cursor = game.input.keyboard.createCursorKeys();
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
        this.cambiarEquip1 = game.input.keyboard.addKey(Phaser.Keyboard.P);
		this.wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            change: game.input.keyboard.addKey(Phaser.Keyboard.Q)
		};

		this.createWorld();
        //creacion de jugadores
		this.player1 = game.add.sprite(game.world.centerX - 200, game.world.centerY, 'player');
		this.game.physics.arcade.enable(this.player1); 
		this.player1.anchor.setTo(0.5, 0.5);
		this.player1.body.gravity.y = 0;	
        this.player1.body.collideWorldBounds = true;
        
        this.player2 = game.add.sprite(game.world.centerX - 300, game.world.centerY - 100, 'player');
		this.game.physics.arcade.enable(this.player2); 
		this.player2.anchor.setTo(0.5, 0.5);
		this.player2.body.gravity.y = 0;	
        this.player2.body.collideWorldBounds = true;
        
        this.player3 = game.add.sprite(game.world.centerX - 300, game.world.centerY + 100, 'player');
		this.game.physics.arcade.enable(this.player3); 
		this.player3.anchor.setTo(0.5, 0.5);
		this.player3.body.gravity.y = 0;	
        this.player3.body.collideWorldBounds = true;
        //insercion de jugadores en una array para poder cambiar el jugador
        this.equip1 = [this.player1, this.player2 ,this.player3];
        
        this.ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
		this.game.physics.arcade.enable(this.ball); 
		this.ball.anchor.setTo(0.5, 0.5);
        this.ball.body.velocity.setTo(200, 200);
		this.ball.body.gravity.y = 0;	
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.setTo(1, 1);
        
        //creacion de jugadores
        this.player4 = game.add.sprite(game.world.centerX + 200, game.world.centerY, 'player');
		this.game.physics.arcade.enable(this.player4); 
		this.player4.anchor.setTo(0.5, 0.5);
		this.player4.body.gravity.y = 0;	
        this.player4.body.collideWorldBounds = true;
        
        
        this.player5 = game.add.sprite(game.world.centerX + 300, game.world.centerY + 100, 'player');
		this.game.physics.arcade.enable(this.player5); 
		this.player5.anchor.setTo(0.5, 0.5);
		this.player5.body.gravity.y = 0;	
        this.player5.body.collideWorldBounds = true;
        
        this.player6 = game.add.sprite(game.world.centerX + 300, game.world.centerY - 100, 'player');
		this.game.physics.arcade.enable(this.player6); 
		this.player6.anchor.setTo(0.5, 0.5);
		this.player6.body.gravity.y = 0;	
        this.player6.body.collideWorldBounds = true;
        //insercion de jugadores en una array para poder cambiar el jugador
        this.equip2 = [this.player4, this.player5, this.player6];
        
        var i=0;
        var j=0;
        this.contadorA=i;
        this.contadorB=j;
        this.equip1[this.contadorA];
        this.equip2[this.contadorB];
        this.tiempo=500;
       
	},

	update: function() {
        //implementar fisicas de los jugadores
        game.physics.arcade.collide(this.player1, this.layer);
        game.physics.arcade.collide(this.player2, this.layer);
        game.physics.arcade.collide(this.player3, this.layer);
        game.physics.arcade.collide(this.player4, this.layer);
        game.physics.arcade.collide(this.player5, this.layer);
        game.physics.arcade.collide(this.player1, this.layer);
        game.physics.arcade.collide(this.equip1, this.equip2);
        game.physics.arcade.collide(this.equip1, this.equip1);
        game.physics.arcade.collide(this.equip2, this.equip2);
        game.physics.arcade.collide(this.equip1, this.ball);
        game.physics.arcade.collide(this.equip2, this.ball);
        game.physics.arcade.collide(this.ball, this.layer);
        //movimiento de los jugadores
        this.equip1[this.contadorA].body.velocity.x=0;
        this.equip1[this.contadorA].body.velocity.y=0;
        this.equip2[this.contadorB].body.velocity.x=0;
        this.equip2[this.contadorB].body.velocity.y=0;
        //this.ball.body.velocity.y = 0;
        //this.ball.body.velocity.x = 0;
       
        if (this.cursor.left.isDown)
        {
            this.equip1[this.contadorA].body.velocity.x -= 100;
        } else if (this.cursor.right.isDown) {
            this.equip1[this.contadorA].body.velocity.x += 100;
        }
        if (this.cursor.up.isDown)
        {
            this.equip1[this.contadorA].body.velocity.y -= 100;
        } else if (this.cursor.down.isDown) {
            this.equip1[this.contadorA].body.velocity.y += 100;
        }    
        if(this.cambiarEquip1.isDown) {
            if(game.time.now > this.tiempo) {
                this.tiempo=game.time.now+500;
                this.contadorA++;
            }
        } 
        
        if(this.contadorA > 2) {
            this.contadorA = 0;
            console.log(this.contadorA);
        }
        
        if (this.wasd.left.isDown)
        {
            this.equip2[this.contadorB].body.velocity.x -= 100;
        } else if (this.wasd.right.isDown) {
            this.equip2[this.contadorB].body.velocity.x += 100;
        }
        if (this.wasd.up.isDown)
        {
            this.equip2[this.contadorB].body.velocity.y -= 100;
        } else if (this.wasd.down.isDown) {
            this.equip2[this.contadorB].body.velocity.y += 100;
        }    
        if(this.wasd.change.isDown) {
            if(game.time.now > this.tiempo) {
                this.tiempo=game.time.now+500;
                this.contadorB++;
            }
        } 
        
        if(this.contadorB > 2) {
            this.contadorB = 0;
        }
      },

	startMenu: function() {
		game.state.start('menu');
	},

	createWorld: function() {     
        //creacion del mapa
        this.map = game.add.tilemap('map');
        this.map.addTilesetImage('tileset');
        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();
        this.map.setCollisionBetween(1, 10);
	}
};