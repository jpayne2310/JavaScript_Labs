var numberOfDaysInMonth = 0;
var daysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

$(document).ready(function(){
		var d 	= new Date();
		var mth = d.getMonth()+1;
		var yr 	= d.getFullYear();
		
		$("#month").val(mth);
		$("#year").val(yr);
		showCalendar (mth, yr);
		drawGrid();
		$("#month,#year").click (function(e)
				{
					showCalendar ($("#month").val(), $("#year").val());
					drawGrid();
								$( ".myDiv" ).on( "click", function()
						{
							  changeColor ($(this));			  
						});
				});	
				$( ".myDiv" ).on( "click", function() {
				  changeColor ($(this));			  
				});
});


//Days in a month
	
function showCalendar (mth, yr)
		{	
			var firstDayOfMonth = mth + "/1/" + yr;
			var d = new Date ( firstDayOfMonth);
			numberOfDaysInMonth = daysInMonth (d);
			firstDayOfWeek = d.getDay();
			var str = "<ul>";
            /*Show number of days and first day of month
			str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
			str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>"; */
			
			str += "</ul>";
            
            //create days of the week
			for(b=0;b<7;b++)
				{
					str += "<div class='myDiv2'>" + daysOfTheWeek[b] + "</div>";	
				}
			 document.getElementById("div1").innerHTML = str;
		}


function drawGrid()
		{
                //get month and year values
				showCalendar ($("#month").val(), $("#year").val());
                
                //reset calendar
				str = "";
				 document.getElementById("div2").innerHTML = str;
                 
                 //initialize incrementers
				 var x =0;
				 var j =0;
                 
                 //insure months starts with correct first day
				 while(x < firstDayOfWeek)
                    {
                        str += "<div class='myDiv2'>" + "" + "</div>";
                        x++;
                    }
                //generate calendar
				for (i=firstDayOfWeek;i<42; i++)
                    {
        
                        if (i%7 == 0 && i > 0)
                            {
                                str += "<div class='row'>";
                            }
                        //ensure correct number of days for each month    
                        if (j<numberOfDaysInMonth)
                            {
                               str += "<div class='myDiv'>" + (j+1) + "</div>";
                            }
                        j++;
                        if (i%7 == 0 && i > 0)
                            {
                                str += "</div>"
                            }
                    }			
				$("#div2").append(str);
		}

function changeColor (obj)
		{
			if (obj.css('background-color') == "rgba(0, 0, 0, 0)")
			{
				obj.css('background-color', 'green');
			}
			  else if (obj.css('background-color') == "rgb(0, 128, 0)")
			  {
				obj.css('background-color', 'red');
			  }
				else
				{
				  obj.css('background-color', '');
				}
		}

function daysInMonth(anyDateInMonth)
		{
				return new Date(anyDateInMonth.getYear(), 
								anyDateInMonth.getMonth()+1, 
								0).getDate();
		}

document.getElementById("allAvailible").onclick = function()
    {
					var obj=$( ".myDiv" );
						obj.css('background-color', 'green');
	}
	
document.getElementById("allUnavailible").onclick = function()
    {
		var obj=$( ".myDiv" );
		obj.css('background-color', 'red');
	}