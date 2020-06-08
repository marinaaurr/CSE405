
function displayStudent(student)
{
	alert(student.name);
	alert(student.id);
	alert(student.info[0].firstName);
	alert(student.info[0].lastName);
	alert(student.info[0].idnumber);

	for (var i=0; i<student.info.length; i++)
	{
		var student = student.info[i];
		alert("#" + student.idnumber + " " + student.firstName + " " + student.lastName + ".");
	}
}



function createStudentAsObject()
{
	var student = new Object();
	student.name = "CSUSB";
	student.id = "Coyote ID";

	var marina = new Object();
	marina.firstName = "Marina";
	marina.lastName = "Urrutia";
	marina.idnumber = 004059925;

	var justine = new Object();
	justine.firstName = "Justine";
	justine.lastName = "Galindo";
	justine.idnumber = 007093374;

	var jackie = new Object();
	jackie.firstName = "Jackie";
	jackie.lastName = "Zambrano";
	jackie.idnumber = 038392003;



	student.info = new Array(marina, justine, jackie );

	return student;
}


function createStudentAsJSON()
{
	return {

		"name" : "CSUSB",
		"id" : "Coyote ID",
		"info" : [
	{
				"firstName" : "Marina",
				"lastName" : "Urrutia",
				"idnumber" : 004059925
			},

			{
				"firstName" : "Justine",
				"lastName" : "Galindo",
				"idnumber" : 007093374
			},

			{
				"firstName" : "Jackie",
				"lastName" : "Zambrano",
				"idnumber" : 038392003
			}

		]

	};
}



$(document).ready(function()
{
	$(".button").mouseover(function()
	{
		$(this).css("border", "2px solid red");
	});

	$(".button").mouseout(function()
	{
		$(this).css("border", "2px solid black");
	});

	$(".button1").click(function()
	{
		var student = createStudentAsObject();
		displayStudent(student);
	});


});