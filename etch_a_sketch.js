<!-- 
	//create divs
		$(function(){
			//default
			createGrid(10); 
			
			$(".cell").mouseover(function(){
   			 	$(this).css('background-color', '#333'); 
			}); 
			
			//resolution
			$("#resolution").click(function(){
				var res = prompt("What resolution would you like? (from 1 - 50)"); 
				if (isNaN(res) || res < 1 || res > 60) {return;}
				else {
					createGrid(res); 
					$(".cell").mouseover(function(){
   			 			$(this).css('background-color', '#333'); 
					}); 
				}
			}); 
			
			//regular button
			$("#regular").click(function(){
				$(".cell").mouseover(function(){
   			 		$(this).css('background-color', '#333'); 
				}); 
			}); 
			
			//a random color (one at a time)
			$("#changeColor").click(function(){
				var randomColor="#" + Math.floor(Math.random()*16777215).toString(16); 
				$(".cell").mouseover(function(){
					$(this).css("background-color", randomColor); 
				}); 
			}); 
			
			//random colors button
			$("#randomColors").click(function(){
				$(".cell").mouseover(function(){
					var randomColor="#" + Math.floor(Math.random()*16777215).toString(16); 
					$(this).css("background-color", randomColor); 
				}); 
			}); 
			
			//eraser
			$("#eraser").click(function(){
				$(".cell").off("mouseover"); 
				$(".cell").mousedown(function(){
   			 		$(this).css('background-color', '#999'); 
				}); 
			}); 
			
			//start over button
			$("#reset").click(function(){
				$(".cell").css('background-color', '#999'); 
			}); 
			
		}); 
			
		function createGrid(v) {
			$(".cell").remove(); 
			if ($("#sketchpad").height() >= $("#sketchpad").width() ) {
				var cell_size = $("#sketchpad").width() / v; 
			} else { 
				var cell_size = $("#sketchpad").height() / v; 
			}
			var grid_size = cell_size *v; 
			
			$("#grid").css('height', grid_size); 
			$("#grid").css('width', grid_size);
			
			for (var i = 0; i < v; i++) {
				for (var x = 0; x < v; x++) {
					$("#grid").append("<div class='cell'></div>"); 
				}
			}
			
			$(".cell").css('height', cell_size); 
			$(".cell").css('width', cell_size); 
		}; 
		
		
		/*
			$("#randomColors").click(function{
				randomColors()}; */
		
		
		/* function reloadStylesheets() {
    		var queryString = '?reload=' + new Date().getTime();
   			$('link[rel="stylesheet"]').each(function () {
        		this.href = this.href.replace(/\?.*|$/, queryString);
    		});	
} */
		
		/* 
		function imageBackground(){
			var img = prompt("Please enter the url for the image you want.", "http://content.internetvideoarchive.com/content/photos/1428/06000501_.jpg"); 
			$("#grid").css("background-image", "url("img")"); 
			$(".cell").css("background-color", "#666"); 
			$(".cell").css("opacity", "1"); 
		
			$(".cell").mouseover(function(){
   			 	$(this).css("opacity", "0");
			});
			
			reloadStyleSheets(); 
		}; */
		 
		/* 
		function randomColors(){
		
			//DO NOT REMOVE/CHANGE THE BELOW, IT TOTALLY WORKS AND IS AWESOME
			$(".cell").mouseover(function(){
				var randomColor="#" + Math.floor(Math.random()*16777215).toString(16); 
				$(this).css("background-color", randomColor); 
				}); 
				
		} */
-->		