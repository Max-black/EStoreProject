   

	var $listu = $("#play ul").find("li");
	var $listo = $("#play ol").find("li");
	var timera = null;
	var indexa = 0;
	timera = setInterval(Play, 2000);
	function Play() {
		indexa++;
		if(indexa == $listu.size()) {
			indexa = 0;
		}
		$listu.eq(indexa).fadeIn(1000).siblings().fadeOut(1000);
		$listo.eq(indexa).html("●").siblings().html("○");
	}
	
	$listu.mouseenter(function(){
		clearInterval(timera); 
	})
	$listu.mouseleave(function(){
		timera = setInterval(Play, 2000);
	})
	$listo.mouseenter(function(){
		clearInterval(timera); 
	})
	$listo.click(function(){
		var index = $(this).index();
		$(this).html("●").siblings().html("○");
		$listu.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		
	})
	$listo.mouseleave(function(){
		timera = setInterval(Play, 2000);
	})
	
	var $bran = $(".bran ul");

	$(".left").click(function(){
		
			$bran.animate({left:-142},500);
		
		
		
	})
	
	$(".right").click(function(){
		if($bran.css("left") != 0){
			$bran.animate({left:0},500);
		}
		
	})
//	
 
var $list = $(".tab").find("li");
$list.eq(0).find(".img2").css("display","block");
$list.click(function(){
	var index1 = $(this).index();
	$(this).find(".img2").css("display","block").end().siblings().find(".img2").css("display","none");
})

//ajax
var $deff = $.ajax({
	type:"get",
	url:"../php/index.php?cn=fn",
	dataType:"jsonp",
	jsonCallback:"fn"
});
 function fn(res){
 	alert(res);
 }

