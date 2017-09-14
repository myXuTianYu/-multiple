//轮播图
var pic=ClassName("focus-content")[0];
var btn=ClassName("focus-button")[0];
var $img=pic.childNodes;
var $li=btn.childNodes;
var oldindex=0;
var time=setInterval(play,3000);
btn.addHandler("mouseover",function(e){
	console.log("sss")
	var e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.tagName=="LI"){
		outTime=setTimeout(function(){//过滤用户频繁操作或无用操作
			sty(target.index())
		},200)
			clearInterval(time)	
		}
	})
btn.addHandler("mouseout",function(e){
	var e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.tagName=="LI"){
		clearTimeout(outTime)
		time=setInterval(play,3000)		
	}
})
function play(){
	if(oldindex<$li.length-1){
		oldindex++
	}
	else{
		oldindex=0
	}
	sty(oldindex)
	}
function sty(now){
	for(var i=0; i<$li.length; i++){
		if(i==now){
		$img[now].delClass("none");
		$li[now].setClass("act")
		}
		else{
			$img[i].setClass("none");
			$li[i].delClass("act")
		}
	}
}