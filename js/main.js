"use strict";

var app = app || {};

app.main = {
	
	// CONSTANT properties
	     WIDTH: undefined, 
    	HEIGHT: undefined,
		    dt: 1/60.0,

    	
		// variable properties
		canvas : undefined,
		ctx :  undefined,
		timelines:[],
	
	init: function () {
		
		this.setCanvasSize(1000,400);
		this.canvas = document.querySelector('canvas');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT;
			
			// the canvas context enables us to 
			// interact with the canvas api
		this.ctx = this.canvas.getContext('2d');
		this.timelines.push(new app.Timeline('7-1-2018','12-25-2018','July Timeline',[],[]));
		this.update();
	},
	setCanvasSize:function(w,h){
		this.WIDTH = w;
		this.HEIGHT = h;
	},
	update: function(){
    	// clear screen
    	
    	app.draw.clear(this.ctx,0,0,this.WIDTH,this.HEIGHT);
		this.timelines.forEach(function(tl){
			tl.update();
		});
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