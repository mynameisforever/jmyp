$(function(){
	$("form input[type=text]").each(function(){
		
	$(this).focus(function(){
		$(this).css("box-shadow","0px 0px 10px rgb(165,212,237)");
		$(this).nextAll("p").css("display","block");
		
		$(this).blur(function(){
			$(this).nextAll("p").css("display","none");
			$(this).css("box-shadow","none");
			
			})
		});
	});
	
	$("#btn").click(function(){
		$(".errophone").css("display","none");
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
	
	$("#phone").focus(function(){
		$(".nullnumber").css("display","none");
		$(".errophone").css("display","none");
		$(this).css("border","1px solid #CFCFCF");
		$(this).blur(function(){
			var str =/^1[3|4|5|8][0-9]\d{4,8}$/;
			var val = $(this).val();
			if(!str.test(val)){
				$(".errophone").css("display","block");
			}else{
				$(".errophone").css("display","none");
			}
		})
	});
	
	
	$("#pasw").focus(function(){
		$(this).next().css("display","block");
		$(this).css("box-shadow","0px 0px 10px rgb(165,212,237)");	
	});
	$("#pasw").blur(function(){
		$(this).next().css("display","none");
		$(this).css("box-shadow","none");
	});
	
	$("#repasw").focus(function(){
		$(this).next().next().css("display","none");
		$(this).next().css("display","block");
		$(this).css("box-shadow","0px 0px 10px rgb(165,212,237)");	
	})
	
	$("#repasw").blur(function(){
		$(this).css("box-shadow","none");
		$(this).next().css("display","none");
		if($("#repasw").val()!=$("#pasw").val()){
			$(this).next().next().css({"display":"block","color":"red"});
			
		}else{
			$(this).next().css("display","none");
			
		}
		
	});
	
	
	
	$(".zc").click(function(){
		if($("#repasw").val()==$("#pasw").val()){
			
			$.post("http://h6.duchengjiu.top/shop/api_user.php",{"status":"register","username":$("#phone").val(),"password":$("#pasw").val()},function(data){
				var data = data.message;
				console.log(data);
				if(data==="注册成功"){
					alert("注册成功");
					setInterval(function(){
						location.href = "index.html";
					},2000)
				}else{
					alert("注册失败");
				}
				
			})
		}
	})
	
})
