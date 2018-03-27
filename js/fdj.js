           window.onload=function(){
           	var oZoomBox = document.getElementById("zoomBox");
			var oMidArea = document.getElementById("midArea");
			var oMidImg = oMidArea.children[0];
			var oZoom = document.getElementById("zoom");
			var oBigArea = document.getElementById("bigArea");
			var oBigImg = oBigArea.children[0];
			
			
			
			oMidArea.onmousemove = function(e){
				var evt = e || event;
				oZoom.style.display = "block";
				oBigArea.style.display = "block";
				
				var x = evt.pageX - oZoomBox.offsetLeft - oZoom.offsetWidth/2;
				var y = evt.pageY - oZoomBox.offsetTop - oZoom.offsetHeight/2;
				
				if(x<=0){
					x = 0;
				}
				if(y<=0){
					y = 0;
				}
				if(x>=oMidArea.offsetWidth-oZoom.offsetWidth){
					x = oMidArea.offsetWidth-oZoom.offsetWidth;
				}
				if(y>=oMidArea.offsetHeight-oZoom.offsetHeight){
					y = oMidArea.offsetHeight-oZoom.offsetHeight;
				}
				
				oZoom.style.left = x + "px";
				oZoom.style.top = y + "px";
				
				
				oBigImg.style.left = - oZoom.offsetLeft/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = -oZoom.offsetTop/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				
			}
			
			oMidArea.onmouseout = function(){
				oZoom.style.display = "none";
				oBigArea.style.display = "none";
			}
			
           }
			
		
			
	