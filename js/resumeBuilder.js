var name = ("Andrew Powers");
var role = ("Programming Wizard");
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend( formattedName);
$("#header").append( formattedRole);
