/*Biography*/
/*Biography Object*/
var bio = {
 "name": "Andrew Powers",
 "role": "Web Developer",
 "contacts": {
  "mobile": "410-202-6088",
  "email": "jwchaley@aol.com",
  "github": "LordRorek",
  "_location": "Deal Island, MD, USA"
 },
 "skills": [
 "Languages: Python, JavaScript",
 "Version Control: Git, GitHub",
 "Web Development: HTML/CSS",
 "Skill Level: Beginner"
 ],
 "bioPic": "images/Me.jpg"
};
/*Biography Object*/

/*Name, Role and Message*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
/*Name, Role, Pic and Messade*/

/*Internationalize Button*/
function inName(name) {
  first = bio.name.slice(0,1).toUpperCase();
  upper = bio.name.slice(bio.name.indexOf(" ")).toUpperCase();
  lower = bio.name.slice(1, bio.name.indexOf(" ")).toLowerCase();
  finalName = (first + lower + upper)
  return finalName
};
$("#main").append(internationalizeButton);
/*Internationalize Button*/

/*Internationalize Button*/

/*Contacts*/
if (bio.contacts) {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  var formattedlocation = HTMLlocation.replace("%data%", bio.contacts._location);
  $("#topContacts").append(formattedlocation);
  };
/*Contacts*/

/*Skills*/
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
};
/*Skills*/
/*Biography*/

/*Education*/
/*Education Object*/
var education = {
 "schools": [{
  "title": "Student Success - StraighterLine",
  "teacher": "N/A"
 }, {
  "title": "Introduction to Nutrition - StraighterLine",
  "teacher": "N/A"
 }, {
  "title": "United States History 101 - StraighterLine",
  "teacher": "N/A"
 }, {
  "title": "Introduction to Psychology - StraighterLine",
  "teacher": "N/A"
 }, {
  "title": "Intro to Computer Science - Udacity",
  "teacher": "Dave Evans"
}, {
 "title": "Intro to HTML and CSS - Udacity",
 "teacher": "Jessica Uelmen & Cameron Pittman"
}, {
  "title": "How to Use Git and GitHub - Udacity",
  "teacher": "Caroline Buckey & Sarah Spikes"
}, {
  "title": "JavaScript Basics - Udacity",
  "teacher": "James Williams & Cameron Pittman"
}]
};
/*Education Object*/

/*Schools*/
function displayschool() {
  $("#education").append(HTMLonlineClasses);
  for (var course in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.schools[course].title);
    $(".education-entry:last").append(formattedTitle);
    var formattedCourseTeacher = HTMLonlineDates.replace("%data%", education.schools[course].teacher);
  	$(".education-entry:last").append(formattedCourseTeacher);
  };
};
displayschool();
/*Schools*/

/*Education*/

/*Work*/
/*Work Object*/
var work = {
 "jobs": [{
  "employer": "Walmart",
  "title": "Cashier",
  "dates": "2007 - 2008",
  "location": "Tappahanock, VA, USA",
  "description": "I worked as a Cashier for Walmart."
 }, {
  "employer": "The Clay Bakery",
  "title": "Cashier/Assistant Manager",
  "dates": "2009 - 2014",
  "location": "Warsaw, VA, USA",
  "description": "I did a little bit of everything at The Clay Bakery cashiering, stocking, customer service, tech support, etc."

 }]
};
/*Work Objec*/

/*Display Jobs*/
function displaywork() {
  for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDescription = HTMLprojectDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
};
};
displaywork();
/*Display Jobs*/
/*Work*/

/*Projects*/
/*Projects Object*/
var projects = {
 "projects": [{
   "title": "Jane's Portfolio",
   "dates": "June - 2015",
   "description": "This web page is an interactive portfolio page for the final project of the Intro to HTML and CSS course at Udacity.",
   "images": {
     "image1": "images/Portfolio.png"
    }
 }, {
   "title": "Interactive Resume",
   "dates": "July - 2016",
   "description": "This web page is a resume page for the final project of the JavaScript Basics course at Udacity.",
   "images": {
     "image1": "images/Resume.png"
    }
 }]
};

/*Projects Object*/

/*Disply Projects*/
projects.display = function() {
  for (project in projects.projects) {
    $('#projects').append(HTMLprojectStart);
  	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  	$(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  	$(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  	$(".project-entry:last").append(formattedDescription);
    for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
		}
  }
}
projects.display();
/*Disply Projects*/
/*Projects*/

/*Map*/
$("#mapDiv").append(googleMap);
/*Map*/
