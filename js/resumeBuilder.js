var bio = {
  "name": "Andrew Powers",
  "role": "Web Developer",
  "contacts": {
    "mobile": "410-202-6088",
    "email": "jwchaley@aol.com",
    "github": "LordRorek",
    "location": "Deal Island, MD, USA",
  },
  "welcomeMessage": "Welcome Fellow Technophiles",
  "skills": [
    "Python", " HTML", " CSS", " Git", " GitHub"
  ],
  "bioPic": "images/Me.jpg",
};

/*Name, Role and Pic Formatted*/
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
var Pic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", Pic);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
/*Name, Role and Pic Formatted*/

/*Contacts Formatted*/
var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
/*Contacts Formatted*/

/*Skills and Message Formatted*/
var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
var message = bio.welcomeMessage;
var formattedMessage = HTMLwelcomeMsg.replace("%data%", message);
$("#header").append(formattedMessage);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
/*Skills and Message Formatted*/
