var playState = {

	create: function() { 
        //https://github.com/MaarcCF/BigHead-Football
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
        game.global.score1 = 0;
        game.global.score2 = 0;  
        this.time=180;

        //labels de los marcadores de los equipo y del tiempo
        this.tiempoLabel = game.add.text(375, 20, '180', { font: '18px Arial', fill: '#ffffff' });
        this.scoreLabel1 = game.add.text(225, 20, 'White team: 0', { font: '18px Arial', fill: '#ffffff' });
        this.scoreLabel2 = game.add.text(455, 20, 'Yellow team: 0', { font: '18px Arial', fill: '#ffffff' });

		this.createWorld();
        //creacion de jugadores
		this.player1 = game.add.sprite(game.world.centerX - 200, game.world.centerY, 'player2');
		this.game.physics.arcade.enable(this.player1); 
		this.player1.anchor.setTo(0.3, 0.3);
		this.player1.body.gravity.y = 0;	
        this.player1.body.collideWorldBounds = true;
        this.player1.animations.add('right', [1, 0, 2], 8, true);
        this.player1.animations.add('left', [4, 3, 5], 8, true);
        this.player1.animations.add('up', [7, 6, 8], 8, true);
        this.player1.animations.add('down', [10, 9, 11], 8, true);
        
        this.player2 = game.add.sprite(game.world.centerX - 300, game.world.centerY - 100, 'player2');
		this.game.physics.arcade.enable(this.player2); 
		this.player2.anchor.setTo(0.3, 0.3);
		this.player2.body.gravity.y = 0;	
        this.player2.body.collideWorldBounds = true;
        this.player2.animations.add('right', [1, 0, 2], 8, true);
        this.player2.animations.add('left', [4, 3, 5], 8, true);
        this.player2.animations.add('up', [7, 6, 8], 8, true);
        this.player2.animations.add('down', [10, 9, 11], 8, true);
        
        this.player3 = game.add.sprite(game.world.centerX - 300, game.world.centerY + 100, 'player2');
		this.game.physics.arcade.enable(this.player3); 
		this.player3.anchor.setTo(0.3, 0.3);
		this.player3.body.gravity.y = 0;	
        this.player3.body.collideWorldBounds = true;
        this.player3.animations.add('right', [1, 0, 2], 8, true);
        this.player3.animations.add('left', [4, 3, 5], 8, true);
        this.player3.animations.add('up', [7, 6, 8], 8, true);
        this.player3.animations.add('down', [10, 9, 11], 8, true);
        
        //insercion de jugadores en una array para poder cambiar el jugador
        this.equip1 = [this.player1, this.player2 ,this.player3];
        
        //creacion de la pelota
        this.ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
		this.game.physics.arcade.enable(this.ball); 
		this.ball.anchor.setTo(0.3, 0.3);
		this.ball.body.gravity.y = 0;	
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.setTo(1, 1);
        
        //creacion de las porterias
        this.porteria1 = game.add.sprite(game.world.centerX + 460, game.world.centerY + 70, 'porteria1');
		this.game.physics.arcade.enable(this.porteria1); 
		this.porteria1.anchor.setTo(1, 1);
        this.porteria1.body.immovable = true;
        this.porteria1.body.moves = false;
        
        this.porteria2 = game.add.sprite(game.world.centerX - 345, game.world.centerY + 70, 'porteria2');
		this.game.physics.arcade.enable(this.porteria2); 
		this.porteria2.anchor.setTo(1, 1);
        this.porteria2.body.immovable = true;
        this.porteria2.body.moves = false;
        
        //creacion de jugadores
        this.player4 = game.add.sprite(game.world.centerX + 200, game.world.centerY, 'player1');
		this.game.physics.arcade.enable(this.player4); 
		this.player4.anchor.setTo(0.3, 0.3);
		this.player4.body.gravity.y = 0;	
        this.player4.body.collideWorldBounds = true;
        this.player4.animations.add('right', [1, 0, 2], 8, true);
        this.player4.animations.add('left', [4, 3, 5], 8, true);
        this.player4.animations.add('up', [7, 6, 8], 8, true);
        this.player4.animations.add('down', [10, 9, 11], 8, true);
        
        this.player5 = game.add.sprite(game.world.centerX + 300, game.world.centerY + 100, 'player1');
		this.game.physics.arcade.enable(this.player5); 
		this.player5.anchor.setTo(0.3, 0.3);
		this.player5.body.gravity.y = 0;	
        this.player5.body.collideWorldBounds = true;
        this.player5.animations.add('right', [1, 0, 2], 8, true);
        this.player5.animations.add('left', [4, 3, 5], 8, true);
        this.player5.animations.add('up', [7, 6, 8], 8, true);
        this.player5.animations.add('down', [10, 9, 11], 8, true);
        
        this.player6 = game.add.sprite(game.world.centerX + 300, game.world.centerY - 100, 'player1');
		this.game.physics.arcade.enable(this.player6); 
		this.player6.anchor.setTo(0.3, 0.3);
		this.player6.body.gravity.y = 0;	
        this.player6.body.collideWorldBounds = true;
        this.player6.animations.add('right', [1, 0, 2], 8, true);
        this.player6.animations.add('left', [4, 3, 5], 8, true);
        this.player6.animations.add('up', [7, 6, 8], 8, true);
        this.player6.animations.add('down', [10, 9, 11], 8, true);
        //insercion de jugadores en una array para poder cambiar el jugador
        this.equip2 = [this.player4, this.player5, this.player6];
        
        //variables usadas en otras funciones
        var i=0;
        var j=0;
        this.contadorA=i;
        this.contadorB=j;
        this.equip1[this.contadorA];
        this.equip2[this.contadorB];
        this.tiempo=500;
        this.tiempo2=500;
        
        this.sonidoAmbiente = game.add.audio('ambiente');
        this.sonidoAmbiente.play();
        this.sonidoGol = game.add.audio('gol');
        this.sonidoFinal = game.add.audio('final');
	},

	update: function() {
        //implementar fisicas de los jugadores
        game.physics.arcade.collide(this.equip1, this.layer);
        game.physics.arcade.collide(this.equip2, this.layer);
        game.physics.arcade.collide(this.equip1, this.equip2);
        game.physics.arcade.collide(this.equip1, this.ball);
        game.physics.arcade.collide(this.equip2, this.ball);
        game.physics.arcade.collide(this.ball, this.layer);
        game.physics.arcade.collide(this.equip1, this.porteria);
        game.physics.arcade.collide(this.equip2, this.porteria);
        game.physics.arcade.collide(this.ball, this.porteria);
        
        //movimiento de los jugadores
        this.equip1[this.contadorA].body.velocity.x=0;
        this.equip1[this.contadorA].body.velocity.y=0;
        this.equip2[this.contadorB].body.velocity.x=0;
        this.equip2[this.contadorB].body.velocity.y=0;
       
        if (this.cursor.left.isDown)
        {
            this.equip1[this.contadorA].body.velocity.x -= 200;
            this.equip1[this.contadorA].animations.play('left');
        } else if (this.cursor.right.isDown) {
            this.equip1[this.contadorA].body.velocity.x += 200;     
            this.equip1[this.contadorA].animations.play('right');
        }
        if (this.cursor.up.isDown)
        {
            this.equip1[this.contadorA].body.velocity.y -= 200;
            this.equip1[this.contadorA].animations.play('up');
        } else if (this.cursor.down.isDown) {
            this.equip1[this.contadorA].body.velocity.y += 200;
            this.equip1[this.contadorA].animations.play('down');
        }    
        if(this.cambiarEquip1.isDown) {
            if(game.time.now > this.tiempo) {
                this.tiempo=game.time.now+500;
                this.equip1[this.contadorA].body.velocity.y = 0;
                this.equip1[this.contadorA].body.velocity.x = 0;
                this.contadorA++;
            }
        } 
        
        if(this.contadorA > 2) {
            this.contadorA = 0;
            console.log(this.contadorA);
        }
        
        if (this.wasd.left.isDown)
        {
            this.equip2[this.contadorB].body.velocity.x -= 200;
            this.equip2[this.contadorB].animations.play('right');
        } else if (this.wasd.right.isDown) {
            this.equip2[this.contadorB].body.velocity.x += 200;  
            this.equip2[this.contadorB].animations.play('left');
        }
        if (this.wasd.up.isDown)
        {
            this.equip2[this.contadorB].body.velocity.y -= 200;
            this.equip2[this.contadorB].animations.play('up');
        } else if (this.wasd.down.isDown) {
            this.equip2[this.contadorB].body.velocity.y += 200;
            this.equip2[this.contadorB].animations.play('down');
        }    
        if(this.wasd.change.isDown) {
            if(game.time.now > this.tiempo) {
                this.tiempo=game.time.now+500;
                this.equip2[this.contadorB].body.velocity.y = 0;
                this.equip2[this.contadorB].body.velocity.x = 0;
                this.contadorB++;
            }
        } 
        
        if(this.contadorB > 2) {
            this.contadorB = 0;
        }   
        
        //subir el gol al marcador y reinicar todas las posiciones de jugadores y pelota
        if(this.ball.body.position.x > 750) {
            if(game.time.now > this.tiempo) {
                this.tiempo=game.time.now+500;
                game.global.score1 += 1;
                this.sonidoGol.play();
                this.scoreLabel1.text = 'White team: ' + game.global.score1;
                this.ball.body.position.x = 390;
                this.ball.body.position.y = 190;
                this.ball.body.velocity.x = 0;
                this.ball.body.velocity.y = 0;
                this.player1.position.x = 190;
                this.player1.position.y = 190;
                this.player2.position.x = 90;
                this.player2.position.y = 90;
                this.player3.position.x = 90;
                this.player3.position.y = 290;
                this.player4.position.x = 590;
                this.player4.position.y = 190;
                this.player5.position.x = 690;
                this.player5.position.y = 290;
                this.player6.position.x = 690;
                this.player6.position.y = 90;
                this.player1.animations.stop();
                this.player2.animations.stop();
                this.player3.animations.stop();
                this.player4.animations.stop();
                this.player5.animations.stop();
                this.player6.animations.stop();
                
                var goalLabel = game.add.text(game.world.centerX, -200, 'GOAAAL!!', { font: '70px Geo', fill: '#ffffff' });
		        goalLabel.anchor.setTo(0.5, 0.5);
                var tween =  game.add.tween(goalLabel).to({y: 150}, 1000).easing(Phaser.Easing.Bounce.Out).start();
                tween.onComplete.add(function() {
                });
                
                game.time.events.add(3000, function() {
                tween.stop();
                game.world.remove(goalLabel);
                }, this);
            }
        } 
        
        if(this.ball.body.position.x < 30) {
            if(game.time.now > this.tiempo) {
                this.tiempo=game.time.now+500;
                game.global.score2 += 1;
                this.sonidoGol.play();
                this.scoreLabel2.text = 'Yellow team: ' + game.global.score2;
                this.ball.body.position.x = 390;
                this.ball.body.position.y = 190;
                this.ball.body.velocity.x = 0;
                this.ball.body.velocity.y = 0;
                this.player1.position.x = 190;
                this.player1.position.y = 190;
                this.player2.position.x = 90;
                this.player2.position.y = 90;
                this.player3.position.x = 90;
                this.player3.position.y = 290;
                this.player4.position.x = 590;
                this.player4.position.y = 190;
                this.player5.position.x = 690;
                this.player5.position.y = 290;
                this.player6.position.x = 690;
                this.player6.position.y = 90;
                this.player1.animations.stop();
                this.player2.animations.stop();
                this.player3.animations.stop();
                this.player4.animations.stop();
                this.player5.animations.stop();
                this.player6.animations.stop();
                
                var goalLabel = game.add.text(game.world.centerX, -50, 'GOAAAL!!', { font: '70px Geo', fill: '#ffffff' });
		        goalLabel.anchor.setTo(0.5, 0.5);
                var tween =  game.add.tween(goalLabel).to({y: 150}, 1000).easing(Phaser.Easing.Bounce.Out).start();
                tween.onComplete.add(function() {
                });
                
                game.time.events.add(3000, function() {
                tween.stop();
                game.world.remove(goalLabel);
                }, this);
            }
        }
        
        //para controlar el tiempo
        if(this.time > 0) {
            if(game.time.now > this.tiempo2) {
                this.tiempo2=game.time.now+1000;
                this.time--;
            }
        } 
        
        this.tiempoLabel.text = this.time;
        
        //para controlar cuando termina el tiempo y comparar quien ha ganado el partido
        if(this.time === 0) {
            this.sonidoFinal.play();
            this.finishLabel = game.add.text(game.world.centerX-50, game.world.centerY-100, 'Game over', { font: '18px Arial', fill: '#ffffff' });
            if(game.global.score1 > game.global.score2) {
                this.whiteTeam = game.add.text(game.world.centerX-50, game.world.centerY, 'White team WIN!', { font: '18px Arial', fill: '#ffffff' });
            } else if(game.global.score1 === game.global.score2) {
                this.empate = game.add.text(game.world.centerX-50, game.world.centerY, 'DRAW!', { font: '18px Arial', fill: '#ffffff' });
            } else {
                this.yellowTeam = game.add.text(game.world.centerX-50, game.world.centerY, 'Yellow team WIN!', { font: '18px Arial', fill: '#ffffff' });
            }
            
            var returnLabel = game.add.text(game.world.centerX, game.world.height-80, 'press any key to continue (WASD or cursor)' , { font: '25px Arial', fill: '#ffffff' });
		    returnLabel.anchor.setTo(0.5, 0.5);
            
		    if(this.cursor.up.isDown | this.wasd.up.isDown) {
                game.state.start('menu');	   
            } 
            
            if(this.cursor.down.isDown | this.wasd.down.isDown) {
                game.state.start('menu');	   
            }
            
            if(this.cursor.left.isDown | this.wasd.left.isDown) {
                game.state.start('menu');	   
            }
            
            if(this.cursor.right.isDown | this.wasd.right.isDown) {
                game.state.start('menu');	   
            }
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