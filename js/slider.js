function Slider(){
	this.listSlider=document.getElementsByTagName("ul")[0];
	this.slider=document.getElementsByClassName("slider-container")[0];
	this.sliderCount=this.listSlider.getElementsByTagName("li").length;
	this.counter=0;
	this.autoCount=0;
	that=this;
	this.marginCounter=0;
	this.speedCount=0;
	

	this.init=function (){
	that.putButtons();
	that.putDescription();
	// that.autoAnimation();		
	}
	this.putDescription=function(){
		var desc=document.createElement("span");
		desc.className="desc-bg";
		that.slider.appendChild(desc);
		console.log(that.slider);
	}
	this.putButtons=function(){
		this.left=document.createElement("img");
		this.left.src="images/left-inactive.png";
		this.left.id="left-inactive";
		this.left.onclick=that.moveLeft;
		that.slider.appendChild(this.left);
		this.right=document.createElement("img");
		this.right.src="images/right-inactive.png";
		this.right.id="right-inactive";
		this.right.onclick=that.moveRight;
		that.slider.appendChild(this.right);
	}
	this.moveLeft=function (){
		if(that.counter>0){
			that.speedCount=that.marginCounter;
			// console.log(that.speedCount);
			that.marginCounter+=1010;
			that.counter--;
			setInterval(that.slideAnimation, 200);
			// clearInterval(autoInterval);
			// autoInterval=setInterval(that.moveRight, 4000);
		}
		
	}
	this.moveRight=function (){
		if(that.counter<that.sliderCount-1){
			that.speedCount=that.marginCounter;
			// console.log(that.speedCount);
			that.marginCounter-=1010;
			that.counter++;
			slideInterval=setInterval(that.slideAnimation, 200);
			// clearInterval(autoInterval);
			// autoInterval=setInterval(that.moveRight, 4000);
		}
	}
	this.slideAnimation=function (){
		if(that.speedCount>that.marginCounter){
			//for right slide animation
			that.speedCount-=202;
			that.listSlider.style.marginLeft=that.speedCount+"px";
		}
		else if(that.speedCount<that.marginCounter){
			//for left slide animation
			that.speedCount+=202;
			that.listSlider.style.marginLeft=that.speedCount+"px";
			
		}else{
			clearInterval(slideInterval);
		}
		
	}
	this.autoAnimation=function (){
		autoInterval=setInterval(that.moveRight, 4000);
		// if(that.autoCount==that.sliderCount){
		// 	that.marginCounter==0;
		// }
		//automatically slides right
	}
}
var s= new Slider();
s.init();
