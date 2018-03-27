$(function(){
			
		$("#dl1").click(function(){
			$("#form1").css({"display":"block"});
			$("#form2").css({"display":"none"});
			$(".dlone").click(function(){
				alert("登录成功");
				location.href ="index.html"
			})
			$("#form1 input[type=text]").each(function(){
			$(this).focus(function(){
				$(this).css("box-shadow","0px 0px 10px rgb(165,212,237)");
				$(this).nextAll("p").css("display","block");
				
				$(this).blur(function(){
					$(this).nextAll("p").css("display","none");
					$(this).css("box-shadow","none");
				})
			});
		});
		
		});
		
		$("#dl2").click(function(){
			$("#form1").css({"display":"none"});
			$("#form2").css({"display":"block"});
			
			})
			$("#form2 input[type=text]").each(function(){
			$(this).focus(function(){
				$(this).css("box-shadow","0px 0px 10px rgb(165,212,237)");
				$(this).nextAll("p").css("display","block");
				$(this).blur(function(){
					$(this).nextAll("p").css("display","none");
					$(this).nextAll("p").css("display","none");
				})
			});
		});
		
		
		console.log($(".dltwo"))

	$(".dltwo").click(function(){
		console.log(1)
		$.post("http://h6.duchengjiu.top/shop/api_user.php",{"status":"login","username":$("#ph").val(),"password":$(".pas").val()},function(data){
					var data = data.message;
					console.log(data);
					if(data==="登录成功"){
						alert("登录成功");
						setInterval(function(){
							location.href = "index.html";
						},1000)
					}else{
						alert("登录失败");
					}
				})
})
	
	var flag = true;
$("i").click(function(){
	
	if(flag){
		$("#moreicon").slideDown();
		$("i").css("background-position","-274px 0px");
		flag=false;
	}else{
		$("i").css("background-position","-274px -23px");
		$("#moreicon").slideUp();
		flag=true;
	}
});

$("#form1 input[type=text]").each(function(){
	
	$(this).focus(function(){
		$(this).css("box-shadow","0px 0px 10px rgb(165,212,237)");
		$(this).nextAll("p").css("display","block");
		$(this).blur(function(){
			$(this).nextAll("p").css("display","none");
			$(this).css("box-shadow","none");
		})
	});
});
$("#phone").focus(function(){
	$(".nullnumber").css("display","none");
	$(this).css("border","1px solid #CFCFCF");
	
});
		
$("#btn").click(function(){
	if($("#phone").val()==""){
		$(".nullnumber").css("display","block");
		$("#phone").css({"box-shadow":"0px 0px 10px rgb(226,74,74)","border":"1px solid rgb(226,74,74)"});
	}else{
		var str ="";
		for(var j=0;j<6;j++){
			str+=Math.floor(Math.random()*10);
		}
		$(this).prev().val(str);
	}
	
});
	
	
	
	
	
});






