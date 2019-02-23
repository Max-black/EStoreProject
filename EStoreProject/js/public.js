window.onload = function() {
	$("#lanLi").mouseenter(function() {
		$("#lanUl").stop().slideDown(300);
	})
	$("#lanUl").on("click", "li", function() {
		var val = $(this).html();
		$(".lanSpan").html(`${val}<span class="down">▼</span>`);
		$("#lanUl").slideUp(300);
	})
	$("#lanLi").mouseleave(function() {
		$("#lanUl").stop().slideUp(300);
	})

	$("#fontFam").mouseenter(function() {
		$("#fontFamUl").stop().slideDown(300);
	})
	$("#fontFamUl").on("click", "li", function() {
		var val = $(this).html();
		$(".famSpan").html(`${val}<span class="down">▼</span>`);
		$("#fontFamUl").stop().slideUp(300);
	})
	$("#fontFam").mouseleave(function() {
		$("#fontFamUl").stop().slideUp(300);
	})



	var timer = setInterval(moveUl, 3000);
	function moveUl() {
		$("#move").animate({
			top: -15
		}, 500, function() {
			$("#move").css("top", 0).find("li:first").appendTo("#move");
		})
	}
	var $a = $("#move").find("li");

	$a.mouseenter(function() {
		clearInterval(timer);
		console.log(55);
		//	moveUl();
	}).mouseleave(function() {
		timer = setInterval(moveUl, 3000);
	})

	
	setInterval(function() {
		var time = new Date();
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		if(month < 10) {
			month = "0" + month;
		} else {
			month = month;
		}
		var day = time.getDate();
		if(day < 10) {
			day = "0" + day;
		} else {
			day = day;
		}
		var hour = time.getHours();
		if(hour < 10) {
			hour = "0" + hour;
		} else {
			hour = hour;
		}
		var min = time.getMinutes();
		if(min < 10) {
			min = "0" + min;
		} else {
			min = min;
		}
		var sec = time.getSeconds();
		if(sec < 10) {
			sec = "0" + sec
		} else {
			sec = sec;
		}
		var times = `${year}.${month}.${day}  ${hour}:${min}:${sec} Hkt`;
		$(".time").html(times);
	}, 1000)
	
	
	
	
	
	var valu1 = $("#select").find("input").val();
	$("#select").find("input").focus(function(){
		$(this).val("");
	})
	$("#select").find("input").blur(function(){
		if($(this).val()){
			$(this).val($("#select").find("input").val());
		}else{
			$(this).val(valu1);
		}
	})
	
	var valu2 = $(".emal").find("input").val();
	$(".emal").find("input").focus(function(){
		$(this).val("");
	})
	$(".emal").find("input").blur(function(){
		if($(this).val()){
			$(this).val($(".emal").find("input").val());
		}else{
			$(this).val(valu2);
		}
		
	})
	
	
	var timerAside = null;
	var index = 0;
	var $list = $("#asidesmall").find("li");
	timerAside = setInterval(moveAside,5000);
	function moveAside(){
		
//		$list.css("display","none");
		index ++;
		if(index  == 3){
			index = 0;
		}
		
		$list.eq(index).fadeIn().siblings().fadeOut(1000);
		
//		$list.eq(index -1).fadeOut(1000);
		
		
	}
	$("#asidesmall").mouseenter(function(){
		clearInterval(timerAside);
//		moveAside();
	})
	$("#asidesmall").mouseleave(function(){
	timerAside = setInterval(moveAside,5000);		
	})
}