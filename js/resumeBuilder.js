/*Biography*/
/*Biography Variable*/
var bio = {};
bio.name = "Andrew Powers";
bio.role = "Web Developer";
bio.contacts = {};
  bio.contacts.mobile = "410-202-6088";
  bio.contacts.email = "jwchaley@aol.com";
  bio.contacts.github = "LordRorek";
  bio.contacts._location = "Deal Island, MD, USA";
bio.welcomeMessage = "Welcome Fellow Technophiles";
bio.skills = [
  "Python", " HTML", " CSS", " Git", " GitHub"
];
bio.bioPic = "images/Me.jpg";
/*Biography Variable*/

/*Name, Role and Pic Formatted*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
/*Name, Role and Pic Formatted*/

/*Contacts Formatted*/
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts._location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
/*Contacts Formatted*/

/*Skills and Message Formatted*/
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
/*Skills and Message Formatted*/
/*Biography*/
