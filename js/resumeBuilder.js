
var bio = {
 	name : "Mansimar Kaur",
 	role : "Software Developer",
 	contact : {
 		contact_num : "8860095313",
 		email : "mansimarkaur.mks@gmail.com",
 		github : "https://github.com/MansimarKaur",
 		},
	picture : "images/csi.jpg",
 	skills : ['HTML','CSS','JS','PHP','C','C++', 'WordPress', 'Public Speaking', 'Basketball', 'Event Management']
};

var education = {
	school : [{
				name :"Mount Carmel School",
				degree : "AISSCE",
				Duration : "2000-2014",
				city : "Chandigarh",
				major : "Science (PCM)"
			} ,
			{
			name : "Netaji Subhas Institute of Technology",
			degree : "B.E.",
			Duration : "2014-2018",
			city : "Dwarka",
			major : "Computer Engineering"
			}
			]
};

var work = {
	society : [{
				name : "CollegeSpace",
				title : "Web Developer",
				Duration : "Nov 2014 - Present",
				place : "NSIT",
				Desc : "Involved in maintaining the website.",
			},
			{
				name : "CSI",
				title : "Web Developer",
				Duration : "Aug 2015 - Present",
				place : "NSIT",
				Desc : "Involved in maintaining the website.",
			}]
};

var formattedSkills = [];
var formattedContact = [];

//Try making a function replace
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
bio.skills.forEach(function(s){
	formattedSkills.push(HTMLskills.replace("%data%",s));
});
formattedContact.push(HTMLmobile.replace("%data%",bio.contact.contact_num ));
formattedContact.push(HTMLemail.replace("%data%", bio.contact.email));
formattedContact.push(HTMLgithub.replace("%data%", bio.contact.github));

var formatted_School = {
	school : [{},{}]
};

var formatted_work = {
	society : [{},{}]
};

 for (var i = 0 ; i<2 ; i+=1)
 {
 	formatted_School.school[i].formattedname = HTMLschoolName.replace("%data%",education.school[i].name);
 	formatted_School.school[i].formattedDegree = HTMLschoolDegree.replace("%data%",education.school[i].degree);
 	formatted_School.school[i].formattedDates = HTMLschoolDates.replace("%data%",education.school[i].Duration);
 	formatted_School.school[i].formattedCity = HTMLschoolLocation.replace("%data%",education.school[i].city);
 	formatted_School.school[i].formattedMajor = HTMLschoolMajor.replace("%data%",education.school[i].major);
 }

 for (var i = 0 ; i<2 ; i+=1)
 {
 	formatted_work.society[i].formattedName = HTMLworkEmployer.replace("%data%",work.society[i].name);
 	formatted_work.society[i].formattedTitle = HTMLworkTitle.replace("%data%",work.society[i].title);
 	formatted_work.society[i].formattedDates = HTMLworkDates.replace("%data%",work.society[i].Duration);
 	formatted_work.society[i].formattedCollege = HTMLworkLocation.replace("%data%",work.society[i].place);
 	formatted_work.society[i].formattedDesc = HTMLworkDescription.replace("%data%",work.society[i].Desc);
 }

$("#header").prepend(HTMLskillsStart);
$("#header").prepend (formattedRole);
$("#header").prepend (formattedPic);
$("#header").prepend (formattedName);
formattedSkills.forEach(function( s ){
	$("#topContacts").append(s);
});
formattedContact.forEach(function( c ){
	$("#footerContacts").append(c);
});

$("#education").append(HTMLschoolStart);
for (var i = 0 ; i<2 ; i+=1)
 {
 	$("#edu").append(formatted_School.school[i].formattedSchool) ;
 	$("#edu").append(formatted_School.school[i].formattedDegree) ;
 	$("#edu").append(formatted_School.school[i].formattedDates) ;
 	$("#edu").append(formatted_School.school[i].formattedCity) ;
 	$("#edu").append(formatted_School.school[i].formattedMajor) ;
 }

$("#workExperience").append(HTMLworkStart);
for (var i = 0 ; i<2 ; i+=1)
 {
 	$("#work").append(formatted_work.society[i].formattedName) ;
 	$("#work").append(formatted_work.society[i].formattedTitle) ;
 	$("#work").append(formatted_work.society[i].formattedDates) ;
 	$("#work").append(formatted_work.society[i].formattedCollege) ;
 	$("#work").append(formatted_work.society[i].formattedDesc) ;
 }