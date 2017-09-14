//侧边栏菜单
$(".btn").on("click",function(){
	var Left=$(".ce-box").css("left")
	if(parseInt(Left)<0){
		$(".ce-box").animate({left:'0'});
		$(".btn i").removeClass("fa-chevron-right").addClass("fa-chevron-left")
	}
	else{
		$(".ce-box").animate({left:'-100px'});
		$(".btn i").removeClass("fa-chevron-left").addClass("fa-chevron-right")
	}
})

//登录
$(".login-but").click(function(){
	$("#pop-login").removeClass("none").addClass("pop")
})
$(".popclose").click(function(){
	$("#pop-login").addClass("none").removeClass("pop")
	$("#myname").val("");
})
$("form").on("submit",function(){
	if($("#myname").val()==""||$("#mypass").val()==""){ 
		alert("账号或密码错误")   
		return false
	}
})
//微信隐藏显示
$(".f16").on("mouseenter",function(){
	$(".weixinpic").slideDown()
})
$(".f16").on("mouseleave",function(){
	$(".weixinpic").slideUp()
})

//nav导航
$(".menu li").on("mouseenter",'a',function(){
	$(this).addClass("act").parent().next('dd').slideDown();
})
$(".menu li").on("mouseleave",'a',function(){
	$(this).removeClass("act").parent().next('dd').slideUp();
})
$(".menu li").on('mouseenter','dd',function(){
	$(this).siblings().find('a').addClass('act');
	$(this).stop(true)
})
$(".menu li").on('mouseleave','dd',function(){
	$(this).slideUp();
	$(this).siblings().find('a').removeClass('act');
})

//评价
$(".starslt").on("click","i",function(){
	$(this).addClass("fc-pink").nextAll().removeClass("fc-pink")
    $(this).prevAll().addClass("fc-pink");
})

//随机颜色
var cArray = ['1','2','3','4','5','6','7','8']; 
var cIndex = Math.round(Math.random()*7); 
console.log("bj"+cArray[cIndex])
var bg=$(".gjz").children("a");
for(var i=0; i<bg.length; i++){
	var cIndexs = Math.round(Math.random()*7); 
	bg.eq(i).addClass("bg"+cArray[cIndexs])
}


//返回顶层
$(document).on("scroll",function(){
		var nowTop=$(document).scrollTop();
		var wraph=$(".wrap").height();
		var headerh=$(".header").height()
		if(nowTop>wraph+headerh){
			$(".tops").removeClass("none")
		}
		else{
			$(".tops").addClass("none")
		}
})
$(".tops").on("click",function(){
	$("body,html").animate({"scrollTop":"0"})
})