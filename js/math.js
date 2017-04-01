//gobal variable set for change in amount of problems
var numberOfquestion = 20;

//variables used in multiple functions
var problems;
var incorrect;
    
    //random number generator
    var randomNumber = function (min, max)
    {
        return Math.floor (Math.random() * (max - min + 1)) + min;
    }


function printProblems(temp)
    {
		str = "";
        for (x=0; x<numberOfquestion; x++)
            {
                //output format set
				if (x%4==0) {
                    str +='<br>';
                }
				p= temp[x];
                
                //math problem output
				str += p.left + " " + p.operator + " " + p.right + " = ";
                
                //input box
				str +='<input type="text" id="userAnswer_' +
				x + '" maxlength="2" size="2" style = "margin-right: 40px; font-size: 18px;">';
			}
            
			str +='<br>';
			str +='<br>';
			document.getElementById("div1").innerHTML = str;
			incorrect = document.getElementsByTagName("input");
    }
    
   function generateRandomProblems ()
   {

    problems = [];
	var x = 0;
        for (x=0; x<numberOfquestion; x++)
            {
                        //random operator generator
                        var operator = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
                        
                        //variables set to random numbers
                        var a = randomNumber(1,10);
                        var b = randomNumber(1,10);
                        
                        //switch variable initialized
                        var a1 = 0;
						var b1 = 0;
                        
                        //insure non-negative answers
						if(b > a){
                            a1 = a;
							b1 = b;
			 				a = b1;
							b = a1;
                        }
                        
                        //insure non-decimal answers
						if (operator == "/") {
                            if (a % b != 0) {
                                 a = a * b;
                            }
                        }
                        
                        //variable set for answer check
						var c = eval( a + operator + b);
                        
                        //main object defined and loaded into an array
                        mathObject = {left: a, operator: operator, right: b, answer: c};
						problems[x] = mathObject;
                    
			}
                printProblems(problems);
            
   }
   
   generateRandomProblems();

document.getElementById("Submit").onclick = function()
    {
		var r_answer = 0;
		for (i=0; i< numberOfquestion; i++)
		{
			userAnswer = document.getElementById("userAnswer_"+i).value;
			if (problems[i].answer == userAnswer)
			{
                //correct answer total
                r_answer = r_answer + 1;
                incorrect[i].style.backgroundColor="white";
			}
			else
			{
                //incorrect answer cell highlighted
				incorrect[i].style.backgroundColor="red";
			}

        }
        //grade calculated
		var grade = (r_answer/numberOfquestion)*100;
        
        //final results outputed
		str = "";
		str +='<br>';
		str +="You answered " + r_answer + " out of " + numberOfquestion +
		" questions correctly. Grade: " + grade;
        
            //performance awards
			document.getElementById("div2").innerHTML = str;
			if (grade >=90) {
                document.getElementById("div3").innerHTML = "<img class='preformance' src='images/great_job.jpg'>"
            }
			else if (grade >=75) {
                document.getElementById("div3").innerHTML = "<img class='preformance' src='images/good_job.jpg'>"
            }
			else {
                document.getElementById("div3").innerHTML = "<img class='preformance' src='images/nice_try.jpeg'>"
            }
	}
