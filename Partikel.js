/* Partikel */window.reqAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};})();var PARTICLE={count:1000,size:3,speed:3};function par(){var c=document.getElementById("partikel"),$=c.getContext("2d"),w=c.width=window.innerWidth-2,h=c.height=window.innerHeight-4,particles=[];var Particle=function(x,y,a){this.x=x;this.y=y;this.a=a;this.vx=Math.cos(this.a)*PARTICLE.speed;this.vy=Math.sin(this.a)*PARTICLE.speed;this.draw=function(){$.fillStyle="#21610B";$.beginPath();$.arc(this.x,this.y,PARTICLE.size,0,Math.PI*2);$.fill();};this.move=function(){this.x+=this.vx;this.y+=this.vy;if(this.x<0)this.x+=w;if(this.x>=w)this.x-=w;if(this.y<0)this.y+=h;if(this.y>=h)this.y-=h;}};for(var i=0;i<PARTICLE.count;i++){var angle=(Math.PI*2/PARTICLE.count)*i;var p=new Particle(w/2,h/2,angle);particles.push(p);};function loop(){reqAnimFrame(loop);$.fillStyle="hsla(0,0%,0%,0.2)";$.fillRect(0,0,w,h);for(var i=0;i<particles.length;i++){var p=particles[i];p.move();p.draw();}}loop();};
/* Parse Json Post */function parsPostData(json){document.getElementById('pars-container').innerHTML=json.entry.content.$t;}
/* RelPost */var relnotitle=0;var numpost=20;var numchars=0;var reltitle=new Array();var relurls=new Array();function relpostsagita(a){for(var b=0;b<a.feed.entry.length;b++){var c=a.feed.entry[b];reltitle[relnotitle]=c.title.$t,postcontent="";for(var d=0;d<c.link.length;d++)if("alternate"==c.link[d].rel){relurls[relnotitle]=c.link[d].href;break}relnotitle++}}function contains(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}function listpostsagita(){for(var a=new Array(0),b=new Array(0),c=0;c<relurls.length;c++)contains(a,relurls[c])||(a.length+=1,a[a.length-1]=relurls[c],b.length+=1,b[b.length-1]=reltitle[c]);reltitle=b,relurls=a;for(var c=0;c<reltitle.length;c++){var d=Math.floor((reltitle.length-1)*Math.random()),e=reltitle[c],f=relurls[c];reltitle[c]=reltitle[d],relurls[c]=relurls[d],reltitle[d]=e,relurls[d]=f}for(var j,g=0,h=Math.floor((reltitle.length-1)*Math.random()),i=h,k=document.URL;g<numpost&&(relurls[h]==k||(j="<li><a href='"+relurls[h]+"' title='"+reltitle[h]+"'>"+reltitle[h]+"</a></li>",document.write(j),g++,g!=numpost))&&(h<reltitle.length-1?h++:h=0,h!=i););};
