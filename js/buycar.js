$(function(){
	if($(".details").offset().top+$(".details").height()>=$(window).height()+$(document).scrollTop()){
			$(".cont-bottom").css({"position":"fixed","bottom":"0"});
		}
	$(document).scroll(function(){
		if($(".details").offset().top+$(".details").height()>=$(window).height()+$(document).scrollTop()){
			$(".cont-bottom").css({"position":"fixed","bottom":"0"});
		}else{
			$(".cont-bottom").css({"position":"static","bottom":"0"});
		}
	})
	
	$("#check-all").click(function(){
		
		if($("#check-all").prop("checked")){
			$(".cont-left :checkbox").attr("checked", true);  
		}else{
			$(".cont-left :checkbox").attr("checked", false);
		}
		
	})
	
	
	

	
	
	
	
	
	if(getCookie("cart")){
		
		var obj = JSON.parse(getCookie("cart"));
		
		$(".content-null").css("display","none");
		$(".content-is").css("display","block");
		
		//开始的总数
		var num = 0;
		for(var attr in obj){
			num += obj[attr];
		}
		
		$(".all-number em").text(num);
		
		$.get("../json/list.json",function(data){

			for(var attr in obj){
				$(data["thinglist"]).each(function(i){
					if(data["thinglist"][i]["id"]==attr){
						$(".details").append(`<div class="list" data-id=${attr}>
						<div class="cont-left">
							<input type="checkbox"  checked="checked"/>
							<img src="../images/${data["thinglist"][i]["imgSrc"]}" alt="" />
							<div class="con-title">
								<p><span>[急速免费]</span>${data["thinglist"][i]["title"]} ${data["thinglist"][i]["xh"]}</p>
								<p>型号：S1 象牙白 容量：${data["thinglist"][i]["xh"]}</p>
							</div>
						</div>
						<span class="price"><span>${data["thinglist"][i]["price"]}</span><br><del>${data["thinglist"][i]["oldprice"]}</del></span>
						<p class="number"><span>-</span><input type="text" value="${obj[attr]}"/><span>+</span></p>
						<p class="xj">${data["thinglist"][i]["price"]*obj[attr]}</p>
						<p class="cz">x</p>
					</div>`);
					}
				})
			}
			$(".cont-left :checkbox").each(function(){
				$(this).click(function(){
				if(!$(this).prop("checked")){
					$("#check-all").attr("checked",false);
					var sum1=0;
					var sum2 = 0;
					$(".xj").each(function(){
						
						if($(this).parent().find(".cont-left").find("input").prop("checked")){
							var val=$(this).text();
							sum1+=parseInt(val);
							var val2 = $(this).siblings(".number").find("input").val();
							sum2+=parseInt(val2);
						}
						
					})
					$(".all-price em").text(sum1);
					$(".all-number em").text(sum2);
					
				}else{
					$("#check-all").attr("checked",true);
					var sum1=0;
					var sum2 = 0
					$(".xj").each(function(){
						
						if($(this).parent().find(".cont-left").find("input").prop("checked")){
							var val=$(this).text();
							sum1+=parseInt(val);
							var val2 = $(this).siblings(".number").find("input").val();
							sum2+=parseInt(val2);
						}
						
					})
					$(".all-price em").text(sum1);
					$(".all-number em").text(sum2);
					
				}
			})
		})
			//总金额
			var sum=0;
			$(".xj").each(function(){
				
				if($(this).parent().find(".cont-left").find("input").prop("checked")){
					var val=$(this).text();
					sum+=parseInt(val);
					
				}
				
			})
			
			$(".all-price").append(`总金额:<em>¥${sum}</em>`);
				//删除一排
				$(".cz").click(function(){
					$(this).parent().remove();
					
					delete obj[$(this).parent().attr("data-id")];
					
					setCookie("cart",JSON.stringify(obj));
					
					
					if($(".xj").length!=0){
						var sum1 = 0;
						sum=0;
						$(".xj").each(function(){
							
							if($(this).parent().find(".cont-left").find("input").prop("checked")){
								
								var val=$(this).text();
								sum+=parseInt(val);
								var val2 = $(this).siblings(".number").find("input").val();
								sum1+=parseInt(val2);
								
							}
							
						})
					}else{
						sum = 0;
						$(".all-number em").text(0);
					}
					
					$(".all-price em").text(`¥${sum}`);
					$(".all-number em").text(sum1);
					
				})
				
				//清空购物车
				$(".clean").click(function(){
					$(".details").empty();
					$(".all-price em").text(`0`);
					$(".all-number em").text(`0`);
					obj={};
					setCookie("cart",JSON.stringify(obj));
					
				})
			
			
			//减号
			$(".number").each(function(){
				$(this).find("span").eq(0).click(function(){
				var val3 = parseInt($(this).siblings("input").val());
				val3--;
				$(this).siblings("input").val(val3);
				obj[$(this).parent().parent().attr("data-id")]=val3;
				setCookie("cart",JSON.stringify(obj));
				if(parseInt($(this).siblings("input").val())!=0){
					
					if($(".xj").length!=0){
						$(this).parent().siblings(".xj").text($(this).parent().siblings(".price").find("span").eq(0).text()*val3);
						var sum1 = 0;
						sum=0;
						$(".xj").each(function(){
							
							if($(this).parent().find(".cont-left").find("input").prop("checked")){
								
								var val=$(this).text();
								sum+=parseInt(val);
								var val2 = $(this).siblings(".number").find("input").val();
								sum1+=parseInt(val2);
								
							}
							
						})
						
						
					}else{
						sum = 0;
						$(".all-number em").text(`0`);
						obj={};
						setCookie("cart",JSON.stringify(obj));
					}
					
					$(".all-price em").text(`¥${sum}`);
					$(".all-number em").text(sum1);
					
					
				}else{
					$(this).parent().parent().remove();
					delete obj[$(this).parent().parent().attr("data-id")];
					setCookie("cart",JSON.stringify(obj));
					if($(".xj").length!=0){
						
						sum=0;
						$(".xj").each(function(){
							
							if($(this).parent().find(".cont-left").find("input").prop("checked")){
								
								var val=$(this).text();
								sum+=parseInt(val);
								var val2 = $(this).siblings(".number").find("input").val();
								$(".all-number em").text(parseInt(val2));
								
							}
							
						})
						obj[$(this).parent().attr("data-id")]=val3;
						setCookie("cart",JSON.stringify(obj));
					}else{
						sum = 0;
						$(".all-number em").text(`0`);
					}
					
					$(".all-price em").text(`¥${sum}`);
				}
				
				
			})
				
				
				
				//加商品
				$(this).find("span").eq(1).click(function(){
				var val3 = parseInt($(this).siblings("input").val());
				val3++;
				$(this).siblings("input").val(val3);
				
				obj[$(this).parent().parent().attr("data-id")]=val3;
				setCookie("cart",JSON.stringify(obj));
				if(parseInt($(this).siblings("input").val())!=0){
					if($(".xj").length!=0){
						$(this).parent().siblings(".xj").text($(this).parent().siblings(".price").find("span").eq(0).text()*val3);
						var sum1 = 0;
						sum=0;
						$(".xj").each(function(){
							
							if($(this).parent().find(".cont-left").find("input").prop("checked")){
								
								var val=$(this).text();
								sum+=parseInt(val);
								var val2 = $(this).siblings(".number").find("input").val();
								sum1+=parseInt(val2);
								
							}
							
						})
					}else{
						sum = 0;
						$(".all-number em").text(`0`);
					}
					
					$(".all-price em").text(`¥${sum}`);
					$(".all-number em").text(sum1);
					
					
				}
				
				
			})
			})
			
		})
	}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
