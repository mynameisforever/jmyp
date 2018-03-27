$(function(){
	var url =location.search;
	var id = url.substr(1,1);
	$.get("../json/list.json",function(data){
		$(data["thinglist"]).each(function(i){

			if(data["thinglist"][i]["id"]==id){
				$(".cont-left").append(`<div class="cont-pic" id="midArea"><img src="../images/${data["thinglist"][i]["imgSrc"]}" alt="" /><div id="zoom"></div></div><div class="fdj" id="bigArea"><img src="../images/${data["thinglist"][i]["imgSrc"]}"/></div>`);
				
				$(".cont-right-top").append(`<p>${data["thinglist"][i]["title"]}</p><div><img src="../images/021_flag.jpg" alt="" /><ul><li>${data["thinglist"][i]["cuntry"]}</li><li>韩国品牌</li></ul></div>`).after(`<p class="cont-right-introduce">${data["thinglist"][i]["introduce"]}</p><div class="cont-right-price"><ul><li><em>¥</em><span>${data["thinglist"][i]["price"]}</span></li><li>参考价<em>¥</em><span>${data["thinglist"][i]["oldprice"]}</span></li><li>价格详情></li></ul></div>`);
				
				$(".cont-right").append(`<p class="month-sale">月销<em>${data["thinglist"][i]["buynumber"]}</em></p>`);
			}
		})
	})
	
	$("a").click(function(){
		return false;
	})
	
	$(".header-logo-right a").click(function(){
		location.href = "buycar.html";
	});
	
	
	
	if(getCookie("cart")){
		var obj = JSON.parse(getCookie("cart"));
	}else{
		var obj = {};
	}
	var num = 0;
	for(var attr in obj){
		num += obj[attr];
	}
	if(num!=0){
		$(".header-logo-right i").text(num).css("opacity","1");
	}
	$(".addgwc").click(function(){
		if(obj[id] === undefined){
			obj[id] = 1;
		}else{
			obj[id]++;
		}
		
		var objToStr = JSON.stringify(obj);
		setCookie("cart",objToStr,7);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})
