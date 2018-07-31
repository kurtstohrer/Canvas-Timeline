
"use strict"

var app = app || {};

app.Timeline = function()
{

	function Timeline(start,end,title,events,milestones){
        this.start = start;
        this.end = end;
        this.title = title;
	}
	
	var p = Timeline.prototype;
	
	p.constructor = function(){
		
	}
	
	p.update = function(dt, speed){

        this.draw(app.main.ctx);
	};
	
	p.draw = function(ctx){
     var h = app.main.HEIGHT;
     var w = app.main.WIDTH;
     var pad = 20;
     var top = (h/2)-20;

     var startX = pad;
     var endX = (w-pad) - 20;
     var totalW = w - (pad * 2);

     var endpointSize = 20;
     //draw Start Point
     app.draw.rect(ctx,pad,top,endpointSize,endpointSize,'#000000');
     //draw line 
     app.draw.rect(ctx,startX,top+(endpointSize/2),totalW,5,'#000000');
     //draw End Point
     app.draw.rect(ctx,endX,top,endpointSize,endpointSize,'#000000');
	};
	
	
	p.animate = function(){
		
	};
	
	return Timeline;
}();