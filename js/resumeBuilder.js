/*Biography*/
/*Biography Object*/
var bio = {
 "name": "Andrew Powers",
 "role": "Web Developer",
 "contacts": {
  "mobile": "410-202-6088",
  "email": "jwchaley@aol.com",
  "github": 'https://github.com/LordRorek',
  "_location": "Maryland, USA"
 },
 "skills": [
 "Languages: Python, JavaScript",
 "Version Control: Git, GitHub",
 "Web Development: HTML/CSS",
 "Graphic Design: Photoshop, Inkscape",
 "Skill Level: Intermediate"
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
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkills);
};
/*Skills*/
/*Biography*/

/*Education*/
/*Education Object*/
var education = {
 "schools": [{
  "title": "<a href='http://www.straighterline.com/succe101mghsl001000001-b.html' target='_blank'>Student Success - StraighterLine</a>",
  "teacher": "N/A"
 }, {
  "title": "<a href='http://www.straighterline.com/nutri101mghsl001000002-b.html' target='_blank'>Introduction to Nutrition - StraighterLine</a>",
  "teacher": "N/A"
 }, {
  "title": "<a href='http://www.straighterline.com/online-college-courses/humanities/united-states-history-i/ushis101mghsl001000001-b.html' target='_blank'>United States History I - StraighterLine</a>",
  "teacher": "N/A"
 }, {
  "title": "<a href='http://www.straighterline.com/online-college-courses/social-science/introduction-to-psychology/psy101xxmghsl001000002-b.html' target='_blank'>Introduction to Psychology - StraighterLine</a>",
  "teacher": "N/A"
 }, {
  "title": "<a href='https://www.udacity.com/course/intro-to-computer-science--cs101' target='_blank'>Intro to Computer Science - Udacity</a>",
  "teacher": " Prof. David Evans - Ph.D., MIT"
}, {
 "title": "<a href='https://www.udacity.com/course/intro-to-html-and-css--ud304' target='_blank'>Intro to HTML and CSS - Udacity</a>",
 "teacher": "Jessica Uelmen - BD, University of Central Florida & Cameron Pittman - MD, Belmont University."
}, {
  "title": "<a href='https://www.udacity.com/course/how-to-use-git-and-github--ud775' target='_blank'>How to Use Git and GitHub - Udacity</a>",
  "teacher": "Caroline Buckey - BD, Carnegie Mellon & Sarah Spikes - BS, MS, Stanford"
}, {
  "title": "<a href='https://www.udacity.com/course/javascript-basics--ud804' target='_blank'>JavaScript Basics - Udacity</a>",
  "teacher": "James Williams - BS, MS, Nova Southeastern University & Cameron Pittman - MD, Belmont University."
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
  "title": "Assistant Manager",
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
   "title": "<a href='https://github.com/LordRorek/janes-portfolio' target='_blank'>Jane's Portfolio</a>",
   "dates": "June - 2015",
   "description": "This web page is an interactive portfolio page for the final project of Intro to HTML and CSS course at Udacity.",
   "images": {
     "image1": "images/Portfolio.png"
    }
 }, {
   "title": "<a href='https://github.com/LordRorek/frontend-nanodegree-resume' target='_blank'>Interactive Resume</a>",
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
