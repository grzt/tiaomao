$(function(){

var imgs=$('#center .left2-a');
var boxA=$('#center .left2-1');
var lbtn=$('#center .aa');
var rbtn=$('#center .bb');
Wheel($(imgs[0]),$(boxA[0]),$(lbtn[0]),$(rbtn[0]));
Wheel($(imgs[1]),$(boxA[1]),$(lbtn[1]),$(rbtn[1]));
function Wheel(imgs,boxA,lbtn,rbtn){
	var boxW=$('.box',imgs)
	var iw=$(boxW[0]).width();
	var bw=iw*boxW.length;
	imgs.width(bw);
	// 图片轮播
	var j=0;
	var flag=true;
	function add(){
		if(!flag){
			return;
		}
		flag=false;
		j++;
		if(j==boxW.length){
			j=0;
		}	
		imgs.animate({marginLeft:-iw},500,function(){
			imgs.css({marginLeft:0})
			$('.box',imgs).first().appendTo(imgs)
			flag=true
		})
	}

	var w=setInterval(add,2000)
	//滚动停止
	boxA.hover(function(){
		clearInterval(w)
	},function(){
		w=setInterval(add,2000)
	})

	// 左右按钮
	lbtn.click(function(){
		add();
	})
	rbtn.click(function(){
		if(!flag){
			return;
		}
		flag=false;
		j--;
		if(j==-1){
			j=boxW.length-1;
		}
		imgs.css({marginLeft:-iw})
		$('.box',imgs).last().prependTo(imgs)
		imgs.animate({marginLeft:0},500,function(){
			flag=true;
		})
		
	})
}


	
	
	
	





})