
"use strict"

var app = app || {};

app.Event = function()
{

	function Event(date,title,content){
        this.date = date;
        this.title = title;
	}
	
	var p = Event.prototype;
	
	p.constructor = function(){
		
	}
	
	p.update = function(dt, speed){

        this.draw(app.main.ctx);
	};
	
	p.draw = function(x,y){
         
	};
	
	
	p.animate = function(){
		
	};
	
	return Timeline;
}();