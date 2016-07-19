var role = ("Programming Wizard");
var name = ("Andrew Powers");
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend( formattedRole);
$("#header").prepend( formattedName);
