$(function(){
	
			
	//banner
	$.get("../json/banner.json",function(data){
		$(".banner").css("background","url(../images/"+data["bannerlist"][0]["bannerSrc"]+") no-repeat 51% 0").find("a").attr("href",data["bannerlist"][0]["link"]);	
	});
	
	//今日疯抢，明日预告
	$.get("../json/today&tomorrow.json",function(data){
		var str = "";
		var str1="";
		var len = data["todaylist"].length;
		for(var i=0;i<len;i++){
			str+=`<a href="${data["todaylist"][i]["link"]}"><img src="../images/${data["todaylist"][i]["Src"]}"></a>`
			str1+=`<a href="${data["tomorrowlist"][i]["link"]}"><img src="../images/${data["tomorrowlist"][i]["Src"]}"></a>`
		}
		$(".today-creazy").append(str);
		$(".tomorrow-creazy").append(str1);
	})
	
	
	//每日必看
	
	$.get("../json/everyday-tosee.json",function(data){
		for(var i = 0;i<20;i++){
			//急速免税
			if(data["everydaylist"][i]["type"]==2){
				$(".today-thing-content-haitao").eq(i).css("background","url(../images/home_all_icon.png) no-repeat -41px 0");
				
			}
			
			//价格
			$(".price a").eq(i).before(`<span><em>¥</em>${data["everydaylist"][i]["price"]}</span><del>¥${data["everydaylist"][i]["oldprice"]}</del>`);
			
			//最后时间
			
			//是否抢光
			if(data["everydaylist"][i]["isnull"]){
				//图片
				$(".thing-pic").eq(i).append(`<img src="../images/${data["everydaylist"][i]["imgSrc"]}"><i></i>`);
				$(".price a").eq(i).text("已抢光").css({"background":"#ededed","color":"#797676"});
				$(".lasttime").eq(i).append(`<p>抢光于${data["everydaylist"][i]["nulltime"]}</p>`);
				
			}else{
				$(".lasttime").eq(i).append(`<p>距离特卖结束<span></span></p>`);
				var date1 = new Date("2018-3-23");
				setInterval(function(){
					var date2 = new Date();
					var date = Math.floor((date1-date2)/1000);
					
					var day = Math.floor(date/(3600*24));
					var hour = Math.floor(date/3600);
					var mine = Math.floor(date/60%60);
					var sec = date%60;
					if(day<10){
						day="0"+day;
					}
					if(hour<10){
						hour="0"+hour;
					}
					if(mine<10){
						mine="0"+mine;
					}
					if(sec<10){
						sec="0"+sec;
					}
					$(".lasttime p span").text(`${day}:${hour}:${mine}:${sec}`);
					
				},1000);
				
				
				
				
				
				$(".thing-pic").eq(i).append(`<img src="../images/${data["everydaylist"][i]["imgSrc"]}">`);
			}
			
			
			//链接 介绍
			if(data["everydaylist"][i]["officially"]){
				var str = "";
				str = `<a href="${data["everydaylist"][i]["link"]}" class="introduce"><em>【官方授权】</em>${data["everydaylist"][i]["introduce"]}</a>`
				$(".lasttime").eq(i).after(str);
			}
			//购买人数
			$(".buy-number").eq(i).append(`<span><em>${data["everydaylist"][i]["buyNumber"]}</em>人已经购买</span>`)
			
			
		}
	})
	
	
	$.get("../json/brandgroup.json",function(data){
			
		var str = "";
		for(var i =0 ;i<4;i++){
		
			str+=`<li><a href="${data["Brandlist"][i]["link"]}"><img src="../images/${data["Brandlist"][i]["imgSrc"]}"></a><div class="beauty-brand-content"><p class="content1">${data["Brandlist"][i]["zhuanchang"]}</p><p class="content2">${data["Brandlist"][i]["introduce"]}</p><p class="content3">满<span>${data["Brandlist"][i]["manjian"][0]["满"]}</span>减<span>${data["Brandlist"][i]["manjian"][0]["减"]}</span>上不封顶</p><p class="content4">00天00时00分00秒</p></div></li>`;
			
		}
		
		$(".beauty-brand-right ul").append(str);
		
		var date1 = new Date("2018-3-23");
				setInterval(function(){
					var date2 = new Date();
					var date = Math.floor((date1-date2)/1000);
					
					var day = Math.floor(date/(3600*24));
					var hour = Math.floor(date/3600);
					var mine = Math.floor(date/60%60);
					var sec = date%60;
					if(day<10){
						day="0"+day;
					}
					if(hour<10){
						hour="0"+hour;
					}
					if(mine<10){
						mine="0"+mine;
					}
					if(sec<10){
						sec="0"+sec;
					}
					$(".content4").text(`${day}天:${hour}时:${mine}分:${sec}秒`)
				},1000);
	})
	
	if(getCookie("cart")){
		$(".gouwuche-null").css("display","none");
		$(".gouwuche-isthing").css("display","block");
	var obj = JSON.parse(getCookie("cart"));
	$.get("../json/list.json",function(data){

			for(var attr in obj){
				$(data["thinglist"]).each(function(i){
					if(data["thinglist"][i]["id"]==attr){
						$(".gouwuche-isthing ul").append(`<li>
							<a href=""><img src="../images/${data["thinglist"][i]["imgSrc"]}" alt=""></a>
							<div class="thing-content">
								<a href=""><span>[急速免税]</span>${data["thinglist"][i]["title"]}</a>
								<div class="thing-model">型号：<b>${data["thinglist"][i]["xh"]}</div>
								<span>￥${data["thinglist"][i]["price"]*obj[attr]}</span><b>x</b><b>${obj[attr]}</b>
							</div>

						</li>`);
					}
				})
			}
		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
