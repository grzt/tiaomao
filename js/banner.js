$(function(){
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
		bannerR.css('background',colr);
	}
	var t=setInterval(ban,2000)
	bannerW.hover(function(){
		clearInterval(t);
		var ind=$(this).index()
		bannerW.css('background',"")
		$(bannerW[ind]).css('background',"#C40000")
		$(bannerCa[ind]).css('z-index',63)
		$(bannerCa[ind]).finish();
		var colr=$(bannerCa[ind]).attr('color')
		// bannerO.css("background",colr);
		// bannerR.css('background',colr)
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
		var index=$(this).index();
		if(index!=0){
			clearInterval(t);
		}else{
			t=setInterval(ban,2000)
			var colr=$(bannerCa[index]).attr('color')
			$(bannerO[index]).css("background",colr);
		}

		bannerL.css('background-color','')
		$(this).css({'background-color':'#c40000'});
		$(this).finish();
		bannerMenu.css('display','none')
		$(bannerMenu[index]).css('display','block')
		bannerO.css('background-color',arrA[index])
		bannerR.css('background-color',arrA[index])
		bannerC.fadeOut();
		$(bannerC[index]).fadeIn(100);
		$(bannerC[index]).finish();
		bannerR.fadeOut();
		$(bannerR[index]).fadeIn(100);
		$(bannerR[index]).finish();
	},function(){
		$(this).css({'background-color':'#4A4A4A'});
	})







})