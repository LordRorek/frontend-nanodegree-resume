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
 "welcomeMessage": "Welcome Fellow Technophiles",
 "skills": [
  "Python", "HTML", "CSS", "Git", "GitHub"
 ],
 "bioPic": "images/Me.jpg"
};
/*Biography Object*/

/*Name, Role and Message*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMessage);
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
  "title": "General Studies",
  "school": "StraighterLine",
  "dates": "2013",
  "url": "http://www.straighterline.com/"
 }, {
  "title": "Front-End Web Developer Nanodegree",
  "school": "Udacity",
  "dates": "2016",
  "url": "https://www.udacity.com/"
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
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.schools[course].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.schools[course].dates);
  	$(".education-entry:last").append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[course].url);
    $(".education-entry:last").append(formattedUrl);
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
  "dates": "2008 - 2009",
  "location": "Tappahanock, VA, USA",
  "description": "I worked as a Front-End Cashier for Walmart."
 }, {
  "employer": "The Clay Bakery",
  "title": "Cashier/Assistant Manager",
  "dates": "2008 - 2009",
  "location": "Warsaw, VA, USA",
  "description": "I did a little bit of everything at The Clay Bakery cashiering, stocking, customer service, managing staff, ETC"

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
  "title": "Sample 1",
  "dates": "today",
  "description": "N/A",
  "images": {
    "image1": "images/sample1.gif",
    "image2": "images/sample2.gif"
   }
 }, {
  "title": "Sample 2",
  "dates": "today",
  "description": "N/A",
  "images": {
    "image1": "images/sample1.gif",
    "image2": "images/sample2.gif"
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
