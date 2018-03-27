$(function(){
	$(".header-top-left").find("li").eq(1).find("a").click(function(){
		location.href = "login.html"
	})
	$(".header-top-left").find("li").eq(2).find("a").click(function(){
		location.href = "rejist.html"
	})
	$(".myJumei").hover(function(){
		$(".myJumei").css("background","white");
		$(this).find("ul").fadeIn();	
	},function(){
		$(".myJumei").css("background","#f2f2f2");
		//$(".myJumei i").css("transform","rotate(360deg)");
		$(this).find("ul").fadeOut();
	});
	$(".more").hover(function(){
		//$(".more i").css("transform","rotate(180deg)")
		$(".more").css("background","white");
		$(this).find("ul").fadeIn();	
	},function(){
		
		$(".more").css("background","#f2f2f2");
		$(this).find("ul").fadeOut();
	});
	
	$(".tody").click(function(e){
		$(this).addClass("fouc").siblings().removeClass("fouc");
		$(".today-creazy").css("display","block");
		$(".tomorrow-creazy").css("display","none");
		$(document).scrollTop($(".tab-top").offset().top);
	})
	$(".tomorrow").click(function(){
		$(document).scrollTop($(".tab-top").offset().top);
		$(this).addClass("fouc").siblings().removeClass("fouc");
		$(".today-creazy").css("display","none");
		$(".tomorrow-creazy").css("display","block");
	});
	$(".mzsc").hover(function(){
		$(".header_pop_subAtc").slideDown();
	}).siblings().hover(function(){
		$(".header_pop_subAtc").slideUp();
	});
	$(".header-nav").mouseleave(function(){
		$(".header_pop_subAtc").slideUp();
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
   $(".gouwuche-top a").click(function () {
       $(".gouwuche-list").fadeOut();
   });

	$(".gobacktop").click(function(){
		$(document).scrollTop(0);
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

	$(".ibar_closebtn").click(function(){
		$(".islogin-box").css("display","none");
	})
	$(document).scroll(function(){
		if($(".everyday-tosee").offset().top-$(document).scrollTop()<=0 &&$(".today-new").offset().top-$(document).scrollTop()>0){
			$(".left-one").css({"background-position":"-176px 0","color":"white"});
			
		}else{
			$(".left-one").css({"background-position":"-88px 0","color":"#8f8f8f"});
		}
		if($(".today-new").offset().top-$(document).scrollTop()<=0 &&$(".beauty-brand").offset().top-$(document).scrollTop()>0){
			$(".left-two").css({"background-position":"-176px -124px","color":"white"});
			
		}else{
			$(".left-two").css({"background-position":"0 -124px","color":"#8f8f8f"});
		}
		if($(".beauty-brand").offset().top-$(document).scrollTop()<=0){
			
			$(".left-three").css({"background-position":"-176px -186px","color":"white"});
		}else{
			$(".left-three").css({"background-position":"0 -186px","color":"#8f8f8f"});
		}
		
	})
	
	$(document).scroll(function(){
		if($(".everyday-tosee").offset().top-$(document).scrollTop()<=0){
			$(".body-left").fadeIn();
		}else{
			$(".body-left").fadeOut();
		}
	})
	
	//$(".gouwuche-isthing").height($(window).height()).css("overflow","auto");
	$("form a").click(function(){
		location.href="list.html";
	});
	$(".header-logo-right a").click(function(){
		location.href = "buycar.html";
	})
	$("a").click(function(){
		return false;
	});
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
	}
	
	
	
	$.get("../json/newlist.json",function(data){
		for(var i = 0;i<6;i++){
			$(".today-new-list ul").append(`<li>
						<div class="today-news-pic">
							<span></span>
							<a href="" class="addbuycar">加入购物车</a>
							<a href=""><img src="../images/${data["newlist"][i]["imgSrc"]}" alt="" /></a>
							<p>海外直采 海外价格 闪电发货</p>
						</div>
						<a href="" class="today-news-content">
							<div>
								<p>${data["newlist"][i]["title"]}</p>
								<em>¥</em>
								<span class="price-now">${data["newlist"][i]["price"]}</span>
								<span class="price-old">¥${data["newlist"][i]["oldprice"]}</span>
							</div>
						</a>
					</li>`)
		}
		
	})


   
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
