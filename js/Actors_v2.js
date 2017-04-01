 var actors = [];
	var rowClicked;
	var thisObject;
	var result;
   function showState (what)
	{
        if (what == "add")
		{
            $("#addActor").show();
            $("#updateActor").hide();
            $("#deleteActor").hide();
        }
		  else
		  {
			  $("#addActor").hide();
			  $("#updateActor").show();
			  $("#deleteActor").show();
		  }
    }
	
	function selectActor(e)
	{
		e.preventDefault();
		thisObject = $(this);
		rowClicked = $(this).parent().parent();
		row = rowClicked.index();
        
		//display appropriate buttons
	    what = "Update_Delete";
		showState(what);
        
        //fill form with selection information
		fillFields();
		fillCheckboxs();	      
	}
	
	function addActor ()
	{
        //set run variable
	    var okToRun = true;
        
        //assign variables to html form values
		var first = $("#fName").val();
		var last = $("#lName").val();
		var DOB = $("#DOB").val();
		var gender = $("[name='gender']:checked").val();
		var action = $("#action").prop('checked');
	    var comedy = $("#comedy").prop('checked');
		var drama = $("#drama").prop('checked');
		var scienceFiction = $("#scienceFiction").prop('checked');
		
        //state specific invalid form issues 
	    validate($("#fName").val());
		if (result) {alert("First name is a required field"); okToRun = false;}
		
		validate($("#lName").val());
		if (result) {alert("Last name is a required field"); okToRun = false;}
		
		validate($("#DOB").val());
		if (result) {alert("Date of birth is a required field"); okToRun = false;}
		
		validate($("[name='gender']:checked").val());
		if (result) {alert("Gender selection required"); okToRun = false;}
		
		validateCheckbox(action, comedy, drama, scienceFiction);
		if (result) {alert("Catagory selection required"); okToRun = false;}
		
        //if forn is valid create object
		if (okToRun)
        {
            var newActor = {fName: first, lName: last, DOB: DOB, gender: gender, action: action,
            comedy: comedy, drama: drama, scienceFiction: scienceFiction};
            
            actors.push (newActor);
            
            //start of local storage
            var actorsString = JSON.stringify(actors);
            localStorage.setItem("actors", actorsString);
            
            
            //output actor link
            $("#actorsTable").append("<tr><td><a href='' class='update'>" + newActor.fName +
                              " " + newActor.lName + "</a></td></tr>");
            
            $(".update").off("click");
            $(".update").on ("click", selectActor);
		}
	}
    

$(function(){
     //initilize variable
	 var mystuff = "";
     
     //convert local storage string to object
     mystuff = localStorage.getItem('actors');
	 if (mystuff != null)
     {
	    actors=JSON.parse(mystuff);
        
        //list links for actors from local storage
		for (var row = 0; row < Object.keys(actors).length; row++)
		{
			   $("#actorsTable").append("<tr><td><a href='' class='update'>" + actors[row].fName + ' ' + actors[row].lName + ' ' + "</a></td></tr>");
		}    
	    $(".update").off("click");
		$(".update").on ("click", selectActor);
     }
});


	
	document.getElementById("updateActor").onclick = function()
	  {
			      actors[row].fName = fName.value;
		  		  actors[row].lName = lName.value;
			      actors[row].DOB = DOB.value
				  actors[row].gender = $("[name='gender']:checked").val();
			      actors[row].action = $("#action").prop('checked');
			      actors[row].comedy = $("#comedy").prop('checked');
			      actors[row].drama = $("#drama").prop('checked');
			      actors[row].scienceFiction = $("#scienceFiction").prop('checked');
				  fillCheckboxs();
                  
                   //complete function by reseting add button
                    what = "add";
                    showState(what);
                    
                    //reset form
                    clearInputs();
                    
                    //update local stroage
                    var actorsString = JSON.stringify(actors);
                    localStorage.setItem("actors", actorsString);
                    
                    //refresh page
                    location.reload();
				
	  }
	
	    document.getElementById("deleteActor").onclick = function()
	    {
                
              for(var i = 0; i < actors.length; i++)
                   {
                        if (i == row) {
                        actors.splice(row, 1);;
                        }	  
                   }
              //complete function by reseting add button
              what = "add";
              showState(what);
              
              //reset form
              clearInputs();
              
            //update of local storage
            var actorsString = JSON.stringify(actors);
            localStorage.setItem("actors", actorsString);
            
            //refresh page
            location.reload();
		}
	
    //constructor function
	$(function() {
        $( "#DOB" ).datepicker();
        showState ("add");
		
		$("#addActor").click(function(e) {
			addActor();
			clearInputs();		
		});

    });
	
	function fillFields() {
			       //fill text fields
				  fName.value = actors[row].fName;
		  		  lName.value = actors[row].lName;
			      DOB.value = actors[row].DOB;
				  
				  //fill radio buttons
				  if(actors[row].gender == "male") {
                     $("#genM").prop("checked", true);
                  } else {
					$("#genF").prop("checked", true);
				  }
	}
	
	function fillCheckboxs() {
    
				  //fill check boxes
				  if (actors[row].action == true) {
                   $("#action").prop("checked", true);
                  } else {($("#action").prop("checked", false))}
				  if (actors[row].comedy == true) {
                   $("#comedy").prop("checked", true);
                  }else {($("#comedy").prop("checked", false))}
				  if (actors[row].drama == true) {
                   $("#drama").prop("checked", true);
                  }else {($("#drama").prop("checked", false))}
				  if (actors[row].scienceFiction == true) {
                   $("#scienceFiction").prop("checked", true);
				  }else {($("#scienceFiction").prop("checked", false))}
    }
    
    function clearInputs()
	 {
		  $("#fName").val('');
		  $("#lName").val('');
		  $("#DOB").val('');
		  $("#genM").removeAttr('checked');
		  $("#genF").removeAttr('checked');
		  $("#action").removeAttr('checked');
		  $("#comedy").removeAttr('checked');
		  $("#drama").removeAttr('checked');
		  $("#scienceFiction").removeAttr('checked');
	 }
    
    //check to see if fields have been filled
    function validate(temp) {
		  result = false
		  if (temp == "" || temp == undefined) {
            result = true;
          }
		  return result;
        
    }
	
    //make sure that at least one checkbox has been checked
	function validateCheckbox(temp1, temp2, temp3, temp4) {
		  result = false
		  if (temp1 == false && temp2 == false && temp3 == false && temp4 == false) {
            result = true;
          }
		  return result;
    }