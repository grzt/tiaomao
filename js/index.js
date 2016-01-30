$(function(){
	//column center start
	var words=$(".topnav .word a")
	var box=$(".column .column-center");
	// console.log(words);
	// console.log(box);
	words.click(function(){
		var i=words.index(this);
		words.css({"font-weight":"",
		"text-decoration":"","color":""})
		$(words[i]).css({"font-weight":"bold",
				"text-decoration":"underline","color":"#000"})
		box.css("z-index","");
		$(box[i]).css("z-index","1");
	})
	//column center end

	//banner center start
	
//banner左侧
	var bannerL=$('.banner-box .left li')
	// console.log(bannerL)
	// banner 中间
	var bannerC=$('.banner-box .center li')
	var bannerCa=$(".banner-box .center #one a")
	var bannerW=$(".banner-box .center .banner-word i")
	var bannerO=$(".banner-outbox")
	// $(bannerCa[0]).css('z-index','60')
	// console.log(bannerCa)
	// console.log(bannerW)
	// console.log(bannerO);
	
	var i=0;
	var arrA=['#FFD101','#FFD101','#0272BC','#FFD44A','#FBD1E7','#FD3560',"#F6A4B3",'#A8549F','#F11E4C','#FFDB56','#21BECD','#E3E4E8','#D20190','#19133F','#2FC6FF','#D10214']
		function ban(){
		i++;
		if(i>=bannerCa.length){
			i=0;
		}
		bannerW.css('background',"")
		$(bannerW[i]).css('background',"#C40000")
		bannerCa.css("z-index",61)
		$(bannerCa[i]).css("z-index",62)
		var colr=$(bannerCa[i]).attr('color')
		bannerO.css("background",colr);
		bannerR.css('background',colr)
	}
	var t=setInterval(ban,2000)
	bannerW.hover(function(){
		clearInterval(t);
		var ind=$(this).index()
		bannerW.css('background',"")
		$(bannerW[ind]).css('background',"#C40000")
		bannerCa.css('z-index',60)
		$(bannerCa[ind]).css('z-index',63)
		$(bannerCa[ind]).finish();
		var colr=$(bannerCa[ind]).attr('color')
		bannerO.css("background",colr);
		bannerR.css('background',colr);
		i=ind;
	},function(){
		t=setInterval(ban,2000)
	})	






	// banner 右侧
	var bannerR=$('.banner-box .right li')
	var bannerRa=$('.banner-box .right a')
	$(bannerR[0]).css('z-index',50)
	bannerRa.hover(function(){
		$(this).animate({marginLeft:-5},500)
	},function(){
		$(this).animate({marginLeft:0},200)
	})
	// 左侧引导显示内容‘
	var bannerMenu=$('.banner-box .menu-box li')

	

	bannerL.hover(function(){
		var index=$(this).index()
		clearInterval(t);
		if(index==0){
			t=setInterval(ban,2000)
			var colr=$(bannerCa[i]).attr('color')
			bannerO.css("background",colr);
			bannerR.css('background',colr)
		}else{
			bannerO.css('background-color',arrA[index])
			bannerR.css('background-color',arrA[index])
		}
		bannerL.css('background-color','')
		$(this).css({'background-color':'#c40000'});
		$(this).finish();
		bannerMenu.css('display','none')
		$(bannerMenu[index]).css('display','block')
		
		bannerC.fadeOut();
		$(bannerC[index]).fadeIn(100);
		$(bannerC[index]).finish();
		bannerR.fadeOut();
		$(bannerR[index]).fadeIn(100);
		$(bannerR[index]).finish();
	},function(){
		$(this).css({'background-color':'#4A4A4A'});
	})
	//banner center end


	//鼠标滑过下拉菜单 函数
	function drop(box,small){
			box.hover(function(){
			$(small,this).show();
			$(box,this).css({'background-color':'#fff','height':'+='+1})
		},function(){
			$(small,this).hide();
			$(box,this).css({'background-color':'','height':'-='+1})
		})
	}

	var boxA=$('.top-right .A')
	var listA=$('.top-right .A .list')
	drop(boxA,listA)
	var boxB=$('.top-right .B')
	var listB=$('.top-right .B .list')
	drop(boxB,listB)
	var boxC=$('.top-right .C')
	var listC=$('.top-right .C .list')
	drop(boxC,listC)
	var boxD=$('.top-right .D')
	var listD=$('.top-right .D .list')
	drop(boxD,listD)
	
	// fixed
	var len=658;
	var flag=true;
	$(window).scroll(function(){
		var val=$(window).scrollTop();
		if(val>=len){
			if(!flag){
				return;
			}
			flag=false;
			$('.status').finish();
			$('.status').animate({top:0},200);
		}else{
			flag=true;
			$('.status').animate({top:-50},200);
		}
	})

	// 鼠标滑过左标签
	function wow(a,b){
		a.hover(function(){
			b.animate({'opacity':1,'left':-90},200).css('display','block')
		},function(){
			b.animate({'opacity':0,'left':-120},200,function(){
				b.css('display','none')
			})
		})
	}

	var a1=$('.sidebar .A a')
	var b1=$('.sidebar .A .word')
	wow(a1,b1)
	var a2=$('.sidebar .B a')
	var b2=$('.sidebar .B .word')
	wow(a2,b2)
	var a3=$('.sidebar .C a')
	var b3=$('.sidebar .C .word')
	wow(a3,b3)
	var a4=$('.sidebar .D a')
	var b4=$('.sidebar .D .word')
	wow(a4,b4)
	var a5=$('.sidebar .E a')
	var b5=$('.sidebar .E .word')
	wow(a5,b5)
	var a6=$('.sidebar .F a')
	var b6=$('.sidebar .F .word')
	wow(a6,b6)
	var a7=$('.sidebar .G a')
	var b7=$('.sidebar .G .word')
	wow(a7,b7)
	var a8=$('.sidebar .H a')
	var b8=$('.sidebar .H .word')
	a8.click(function(){
		$('html,body').scrollTop(0) 
	})
	wow(a8,b8)

//1F 2F 3F 4F 5F 8F left  start
	// 楼层图片滚动
	var imgs=$('#center .left2-a');
	var boxA=$('#center .left2-1');
	var	 lbtn=$('#center .aa');
	var rbtn=$('#center .bb');
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
		imgs.finish();
		imgs.animate({marginLeft:-iw},500,function(){
			imgs.css({marginLeft:0});
			$('.box',imgs).first().appendTo(imgs);
			flag=true;
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
		imgs.finish();
		imgs.css({marginLeft:-iw})
		$('.box',imgs).last().prependTo(imgs)
		imgs.animate({marginLeft:0},500,function(){
			flag=true;
		})
		
	})
}

Wheel($(imgs[0]),$(boxA[0]),$(lbtn[0]),$(rbtn[0]));
Wheel($(imgs[1]),$(boxA[1]),$(lbtn[1]),$(rbtn[1]));
Wheel($(imgs[2]),$(boxA[2]),$(lbtn[2]),$(rbtn[2]));
Wheel($(imgs[3]),$(boxA[3]),$(lbtn[3]),$(rbtn[3]));
Wheel($(imgs[4]),$(boxA[4]),$(lbtn[4]),$(rbtn[4]));
Wheel($(imgs[5]),$(boxA[5]),$(lbtn[5]),$(rbtn[5]));
//1F 2F 3F 4F 5F 8F left  end


// 楼层跳转
var louC=$('.centerAA').height()
	// console.log(louC)
	//楼层对顶部的距离
	var topR=[];
	var centerT=$('.centerAA').each(function(i,obj){
		topR.push($(obj).position().top)
	})
	console.log(topR)
	//	滚动条超出页面的高度
	// var scrT=$(window).scrollTop()
	// console.log(scrT)
	// 当前页面的高度
	var scrH=$(window).height()
	// console.log(scrH)

	var LISTa=$('.floor li')
	var LISTi=$('.floor li i')
	var listAa=$('.floor li a')
	console.log(listAa)
	// console.log(list)
	$(window).scroll(function(){
		var scrT=$(window).scrollTop()
		// console.log(scrT)
		if(scrT>600){
			$('.floor').fadeIn()
		}else{ 
			$('.floor').fadeOut()
		}
		for(var a=0;a<topR.length;a++){
			var topA=scrT+scrH-louC;
			if(topA>topR[a]){
				listAa.css('display','none')
				LISTi.css('display','block')
				$(LISTi[a]).css('display','none')
				$(listAa[a]).css('display','block')
			}
			
		}	
	})
	LISTa.click(function(){
		var btn=$(this).index()
		$('html,body').animate({scrollTop:topR[btn]},300)
	})
	LISTa.hover(function(){
		$('i',this).css('display','none')
		$('a',this).css('display','block')
	},function(){
		$('a',this).css('display','none')
		$('i',this).css('display','block')
	})
	// 鼠标点击跳转



	// 图片浮动
	var centerR1=$('.center-right img')
	centerR1.hover(function(){
		$(this).animate({left:-2},200)
	},function(){
		$(this).animate({left:0},1)
	})

})