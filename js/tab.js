//选项卡
var title=ClassName("tab-button")[0];
var content=ClassName("tab-content")[0];

var title1=ClassName("tab-button")[1];
var content1=ClassName("tab-content")[1];

var title2=ClassName("tab-button")[3];
var content2=ClassName("tab-content")[3];

var title3=ClassName("tab-button")[4];
var content3=ClassName("tab-content")[4];
function option(ojd){
	var Li=ojd.tabul.childNodes;/*获取ul的子集*/
	var text=ojd.tabcon.childNodes;/*获取图片*/
	if(ojd.etype!=undefined){
		ojd.etype=ojd.etype;
	}
	else{
		ojd.actclass="mouseover";
	}
	if(ojd.actclass!=undefined){
		ojd.actclass="act";
	}
	else{
		ojd.etype=ojd.etype;
	}

	Li[0].setClass(ojd.actclass);
	ojd.tabul.addHandler(ojd.etype,function(e){
	var e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.tagName=="LI"){
		act(target.index())
	}
		function act(_now){
			for(var i=0; i<text.length; i++){
				if(i==_now){
					text[_now].delClass("none");
					Li[_now].setClass(ojd.actclass)
			}
			else{
				text[i].setClass("none");
				Li[i].delClass(ojd.actclass)
			}
			}
		}
	})
}
option({
	tabul:title,
	tabcon:content,
	etype:"click",
	actclass:"act"
})
option({
	tabul:title1,
	tabcon:content1,
	etype:"click",
	actclass:"act"
})
option({
	tabul:title2,
	tabcon:content2,
	etype:"click",
	actclass:"act"
})
option({
	tabul:title3,
	tabcon:content3,
	etype:"click",
	actclass:"act"
})