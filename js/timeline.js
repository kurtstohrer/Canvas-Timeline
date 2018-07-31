
"use strict"

var app = app || {};

app.Timeline = function()
{

	function Timeline(start,end,title,points){
        this.start = start;
        this.end = end;
        this.title = title;
        this.events = [];
        this.unix = {};
        this.init();
	}
	
	var p = Timeline.prototype;
	
	p.init = function(){

        var h = app.main.HEIGHT;
        var w = app.main.WIDTH;
        this.pad = 20;
        this.top = (h/2)-20;

        this.startX = this.pad;
        this.endX = (w-this.pad) - 20;
        this.totalW = w - (this.pad * 2);

        this.endpointSize = 20;
        //get ranges in unix
        this.unix.start = moment(this.start).unix();
        this.unix.end = moment(this.end).unix();
        this.unix.range = this.unix.end - this.unix.start;


        console.log(this.unix);


      
        //create a pho event
        this.events.push(new app.Event(this,'7-10-2018','Point 1','Shit be going down.'));
        this.events.push(new app.Event(this,'7-12-2018','Point 2','Shit be going down.'));
        this.events.push(new app.Event(this,'7-24-2018','Point 3','Shit be going down.'));
       
	}
	
	p.update = function(dt, speed){

        this.draw(app.main.ctx);
        this.events.forEach(eve => {
            eve.update();
        });
	};
	
	p.draw = function(ctx){
         
          //draw Start Point
          app.draw.rect(ctx,this.pad,this.top,this.endpointSize,this.endpointSize,'#000000');
          //draw line 
          app.draw.rect(ctx,this.startX,this.top+(this.endpointSize/2),this.totalW,5,'#000000');
          //draw End Point
          app.draw.rect(ctx,this.endX,this.top,this.endpointSize,this.endpointSize,'#000000');
	};
	
	
	p.animate = function(){
		
	};
	
	return Timeline;
}();