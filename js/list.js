$(function(){
	

	$.get("../json/list.json",function(data){
		for(var i = 0;i<20;i++){

			$(".cont-list ul").append(`<li id="${data["thinglist"][i]["id"]}"><div class="type"></div><a href="${data["thinglist"][i]["link"]}"><img src="../images/${data["thinglist"][i]["imgSrc"]}"></a><div class="introduce"><a href="<a href="${data["thinglist"][i]["link"]}">${data["thinglist"][i]["title"]}</a></div><div class="cont-price"><label>¥</label><span>${data["thinglist"][i]["price"]}</span><del>¥${data["thinglist"][i]["oldprice"]}</del></div><div class="byer"><div>${data["thinglist"][i]["buynumber"]}人已购买</div><div>距离结束还剩3天以上</div></div><a href="${data["thinglist"][i]["link"]}" class="gotosee"></a><div class="gx"></div></li>`);
			

			var str = "";
			for(var j=0;j<data["thinglist"][i]["gx"].length;j++){
				
				str += `<span>${data["thinglist"][i]["gx"][j]}</span>`;
				
			}
			$(".gx").eq(i).append(str);
		}
		
		$(".cont-list ul li").click(function(){
			location.href="details.html?"+$(this).attr("id");
		})
		
	})
	
  
	
	
	$(".gouwuche-isthing").height($(window).height()).css("overflow","auto");
	$(".ibar_closebtn").click(function(){
		$(".islogin-box").css("display","none");
	})
	$(".touxiang").hover(function(){
		setTimeout(function(){
			$(".islogin-box").css("display","block")
		},500)
		
	},function(){
		setTimeout(function(){
			$(".islogin-box").css("display","none");
		},500)
		
	})
	
	$(".gouwuche").click(function(e){
   		e.stopPropagation()
        $(".gouwuche-list").fadeIn();
        $(this).css({"background":"#ed145b","color":"white"});
        $(this).find("span").css("background-position","-33px -29px");
        $(document).click(function(){
	   	    
	   	    $(".gouwuche-list").fadeOut();
	        $(".gouwuche").css({"background":"url(../images/ibar_sprites.png) no-repeat -23px -225px","color":"#d8d8d8"});
	        $(".gouwuche").find("span").css("background-position","0 -29px");
	    });
   });
	
	$(".header-logo-right a").click(function(){
		location.href = "buycar.html";
	});
	
	$("a").click(function(){
		return false;
	})
})
	
	
	window.onload=function(){
		(function(){
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
				$(".gouwuche span").eq(1).text(num);
			}
		})();
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



