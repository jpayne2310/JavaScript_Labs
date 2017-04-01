	var canvas;
	var context;
    var x = 0;
	var raceOver = false;
    
	    //random number generator
        function randNum(max)
            {
              return Math.ceil(Math.random()*max) + 1;
            }
            
            function randNum2()
            {
              return Math.ceil(Math.random()*40) + 1;
            }
	
    $(document).ready(function(){
	var nextBtn = document.getElementById('start');
	nextBtn.addEventListener('click',next,false);
	
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	
	//initiate 'car speeds'
	x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = 0;
	
   //draw a finish line
   finishLine();
   
   //draw cars
   //red car
	  var img2 = new Image(); 
	  img2.addEventListener("load", function() {
	  context.drawImage(img2,5,80);}, false);
	  img2.src = 'images/redCara.png'; 

   //blue car
	  var img = new Image(); 
	  img.addEventListener("load", function() {
	  context.drawImage(img,5,155);}, false);
	  img.src = 'images/blueab.png'; 
   
   //green car
      var img3 = new Image(); 
	  img3.addEventListener("load", function() {
	  context.drawImage(img3,5,230);}, false);
	  img3.src = 'images/greenCara.png'; 
   
   //yellow car
      var img4 = new Image(); 
	  img4.addEventListener("load", function() {
	  context.drawImage(img4,5,305);}, false);
	  img4.src = 'images/yellowCar.png'; 
   
    function next()
   {
			//assign different random number generators to each 'car speed'
			  var a = randNum(randNum2());
				  var b = randNum(randNum2());
					  var c = randNum(randNum2());
						  var d = randNum(randNum2());
						  
				  //refresh the track
				  if (x1<200) {
                    context.clearRect (0,0, canvas.width, canvas.height);
                  }
				  else{	context.clearRect (120,0, canvas.width, canvas.height);}
				  x1+= a;
				  x2+= b;
				  x3+= c;
				  x4+= d;
				  
				  //refresh 'cars'
				  //red
				  context.drawImage(img2,x1,80);
                  //blue
				  context.drawImage(img,x2,155);
                  //green
				  context.drawImage(img3,x3,230);
                  //yelloe
				  context.drawImage(img4,x4,305)
				  
				  //refresh the finishline
				  finishLine()
				  
				  
				  if (raceOver == false)
				  {
						//designate winner requirement
						if (x1 > 800) {
							winner(x1);
						}
						else if (x2 > 800) {
							winner(x2);
						}
						else if (x3 > 800) {
							winner(x3);
						}
						else if (x4 > 800) {
							winner(x4);
						}
                        
                        //uncomment to disable drive thur
                        setTimeout (next, 40);
				  }
				  
			      //assign timeout length	  
				 {setTimeout (next, 40);}
	   
    
   }
	
	   function winner(temp)
	   {
			  //set text styles
			  context.font = "20px Arial";
			  context.fillStyle = "black";
			  
			  //end the 'race'
			  raceOver = true;
			  context.font="30px Arial";
              
              //announce winner
			  context.fillText("Winner!", 10, 80);
			  switch(temp)
			  {
					 
					 case x1:
					 context.fillStyle = "red";
					 context.fillText("Red", 10, 110);
					  break;
					 case x2:
					 context.fillStyle = "blue";
					 context.fillText("Blue", 10, 110);
					  break;
					 case x3:
					 context.fillStyle = "green";
					 context.fillText("Green", 10, 110);
					  break;
					 case x4:
					 context.fillStyle = "yellow";
					 context.fillText("Yellow", 10, 110);
					  break;
					 default:
					 alert("All Losers");
			  }
	   }
	   
	   //draw the finish line
	   function finishLine() {
        context.beginPath();
        context.moveTo(canvas.width-100, 0);
        context.lineTo(canvas.width-100, 400);
        context.stroke();
       }
	   
	   //enable the rerun option
	  document.getElementById("reload").onclick = function()
	  {
	   location.reload();
	  }


   }); 