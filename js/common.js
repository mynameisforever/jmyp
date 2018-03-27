//判断某年份是否为闰年
function isLeapYear(year){
	if(year%4==0 && year%100!=0 || year%400==0){
		return true;
	}
	return false;
}
//将日期格式化输出 “2015|08|24”
function formatDate(oDate,str){
	var year = oDate.getFullYear();
	var month = oDate.getMonth()+1;
	var day = oDate.getDate();
	
	/*if(month<10){
		month = "0"+month;
	}
	if(day<10){
		day = "0"+day;
	}*/
	
	var val = year+str+format(month)+str+format(day);
	
	return val;
	
}
//获得某个月份的天数
function getDays(oDate,month){
	var year = oDate.getFullYear();
	switch(month){
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
			break;
		case 2:
			if(isLeapYear(year)){
				return 29;
			}
			return 28;
		default:
			return 31;
	}
}
//判断两个日期相差的天数
function getDiffDays(oDate1,oDate2){
	var ms = Math.abs(oDate2-oDate1);
	var day = ms/1000/24/60/60;
	return day;
}
//获得N天以后的日期
function getNDate(n){
	var oDate = new Date();
	var num = oDate.getDate();
	oDate.setDate(num+n);
	return oDate;
}
//个位数补0
function format(num){
	//如果num<10这个条件成立，执行"0"+num,否者的话执行num
	/*if(num<10){
		num = "0"+num;
	}else{
		num = num;
	}*/
	//num =  num<10?"0"+num:num;
	//return num;
	
	return num<10?"0"+num:num;
}
//通过类名获取节点
function getByClass(name){
				if(document.getElementsByClassName){
					return document.getElementsByClassName(name);
				}
				//获取当前页面的所有节点
				var arr1 = [];
				var allNodes = document.getElementsByTagName("*");
				//遍历所有的节点，取到每个节点中的类名
				for(var i = 0; i< allNodes.length; i++){
					//取到的是一个字符串，不能直接使用indexOf方法判断是否含有name
					//转换成数组
					var arr = allNodes[i].className.split(" ");
					//仍然不能使用数组indexOf方法，该方法不兼容
					for(var j= 0; j<arr.length; j++){
						//如果数组中有name，将对应节点保存
						if(arr[j] === name){
							arr1.push(allNodes[i]);
						}
					}
				}
				return arr1;
			}
//样式兼容函数
function getStyle(obj,attr){
				if(window.getComputedStyle){
					return getComputedStyle(obj,null)[attr];
				}
					return obj.currentStyle[attr];
			}
//添加事件
function addEvent(obj,name,fn){
				if(obj.addEventListener){
					obj.addEventListener(name,fn,false);
				}else{
					obj.attachEvent("on"+name,fn);
				}
			}
			
			function removeEvent(obj,name,fn){
				if(obj.removeEventListener){
					obj.removeEventListener(name,fn);
				}else{
					obj.detachEvent("on"+name,fn);
				}
			}
			
//cookie操作
function getCookie(name){
				var str = document.cookie;
				var arr = str.split("; ");
				for(var i = 0; i < arr.length; i++){
					var arr1 = arr[i].split("=");
					if(arr1[0]===name){
						return arr1[1];
					}
				}
			}
			
			function setCookie(name,val,day){
				var oDate = new Date();
				oDate.setDate(oDate.getDate()+day);
				document.cookie = name + "=" + val +";expires="+oDate+";path=/";
			}
			
			function removeCookie(name){
				setCookie(name,1,-1);
			}