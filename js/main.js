"use strict";

var app = app || {};

app.main = {
	
	// CONSTANT properties
    	WIDTH : 900, 
    	HEIGHT: 600,
		    dt: 1/60.0,

    	
		// variable properties
		canvas : undefined,
		ctx :  undefined,
	
	
	init: function () {
		this.canvas = document.querySelector('canvas');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT;
			
			// the canvas context enables us to 
			// interact with the canvas api
		this.ctx = this.canvas.getContext('2d');

	
	},
	
	
	update: function(){
    	// clear screen
    	
    	app.draw.clear(this.ctx,0,0,this.WIDTH,this.HEIGHT);

		this.draw();

		// LOOP
		// this calls the update() function 60 FPS
		// what happens is we don't use bind?
		app.animationID = requestAnimationFrame(this.update.bind(this));
	},
	
	//draw depending on the game state
	draw: function (){
	
	
	},

 

};