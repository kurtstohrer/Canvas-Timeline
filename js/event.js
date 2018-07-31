
"use strict"

var app = app || {};

app.Event = function()
{

	function Event(timeline,date,title,content){
	 this.timeline = timeline;
         this.date = date;
	 this.title = title;
	 this.content = content;
	 this.init();
	}
	
	var p = Event.prototype;
	
	p.init = function(){
	  this.plot();
	};
	p.plot = function(){
	  var h = app.main.HEIGHT;
	  var w = app.main.WIDTH;
      
      
	  var e1Unix = moment(this.date).unix();
	  var e1Range = e1Unix - this.timeline.unix.start;
		      
	  var Percent = (e1Range / this.timeline.unix.range);
		      
	  var x = this.timeline.totalW * Percent;
	  this.x = x;
	  this.y = this.timeline.top;
	};
	p.update = function(dt, speed){

	  this.draw(app.main.ctx);
	
	};
	
	p.draw = function(ctx){
	  var size = 15; 
	  var x = this.x;
	  var y = this.y;
	  app.draw.rect(ctx,x,y + (size/3),size,size,'#FF0000');
	};
	
	
	p.animate = function(){
		
	};
	
	return Event;
}();