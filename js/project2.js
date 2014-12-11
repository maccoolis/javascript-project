/*function getRelationship(x, y) {
    // Your code goes here!
    var outputText = "";
    var xBad = 0;
    var yBad = 0;

    var badX = isNaN(x);
    if (badX===true) {
        // x is not a number if true
        xBad = 1;
    }
    
    var badY = isNaN(y);
    if (badY===true) {
         // y is not a number if true
         yBad = 2;
    }

    switch (xBad + yBad) {
    	case 0:
    		if (x > y){
				outputText = ">";
    		} else {
    			if (y > x) {
    				outputText = "<";
    			} else {
    				outputText = "=";
    			}
    		}

    	break;
    	case 1:
    		outputText = "Can't compare relationships because " + x + " is not a number";
    	break;
    	case 2:
    		outputText = "Can't compare relationships because " + y + " is not a number";
    	break;
    	case 3:
    		outputText = "Can't compare relationships because " + x + " and " + y + " are not numbers";
    	break;
    	default:
    }

    return outputText;

};*/


/*var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var newMoonWalkers=[];
    var workName;
	for (var i = 0; i < names.length; i++) {
	    workName = names[i].split(" ");
	    workName = workName[1] + ", " + workName[0];
	    newMoonWalkers.push(workName);
	    newMoonWalkers.sort();
	}
	return newMoonWalkers;
}

alphabetizer(moonWalkers);*/

var psinsights;

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },

 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },

   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}


function ruleList(results) {
 var ruleNameList = [], listresults, psiJson;
 for (psiJson in results.formattedResults.ruleResults) {

     if ('localizedRuleName' in results.formattedResults.ruleResults[psiJson]) {
         listresults = results.formattedResults.ruleResults[psiJson].localizedRuleName;
     ruleNameList.push(listresults); 
     }
 }
 return ruleNameList;
}

function totalBytes(results){
  var totalBytes=0;
    for (psiJson in results.pageStats) {

        if (psiJson.substr(psiJson.length-5) == "Bytes") {
          totalBytes = totalBytes + parseInt(results.pageStats[psiJson]);
        }
        
    }
    return totalBytes;
}


console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));

/*var bio ={
			"name": name,
			"age": "45",	
			"skills": ["JS","programming","Github","HTML","CSS"],
			"contacts": {
				"mobile": "07900399399",
				"email": "hillsidecmp@gmail.com",
				"location": "Lichfield UK"
			},
			"pictureURL": "images/fry.jpg",
			"welcomeMessage": "Welcome to my resume"
};

var work= {
	"jobs": [
		{
			"jobposition":"Head of IM&T",
			"employer": "Ofwat",
			"yearsworked":"Aug 2006-Oct 2014",
			"location":"London",
			"description": "kzlkdsckdsmckdsmcklmdscmkds skd aslkjcijlskaj lcjlckj a jsak jsajcl ksajljasljdslkjlkasjlksaj claskjl"
		},
		{
			"jobposition": "Head of Sys Dev",
			"employer": "Ofwat",
			"yearsworked":"Jan 1998-Jul 2006",
			"location":"Birmingham",
			"description": "kzlkdsckdsmckdsmcklmdscmkds skd aslkjcijlskaj lcjlckj a jsak jsajcl ksajljasljdslkjlkasjlksaj claskjl"
		},
		{
			"jobposition": "Software developer",
			"employer": "Ofwat",
			"yearsworked": "Jan 1993-Jun 2006",
			"location": "Birmingham",
			"description": "kzlkdsckdsmckdsmcklmdscmkds skd aslkjcijlskaj lcjlckj a jsak jsajcl ksajljasljdslkjlkasjlksaj claskjl"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Lancaster University",
			"location": "Lancaster",
			"major": "BA Hons",
			"gradyear": "1990",
			"url": "htttp://"
		},
		{
			"name": "Chase Terrace High School",
			"location": "Burntwood",
			"major": "5 A Levels",
			"gradyear": "1987",
			"url": "htttp://"
		}
	],

	"onlinecourses": [
		{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1950678559/m-1936858588"
		},

		{
			"title": "Github and Git",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/"
		},

		{
			"title": "HTML and CSS",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/"
		}	
	]
};


var projects = {
	"project": [
		{
			"title": "iPad and iPhone deployment",
			"description": "Implemented CESG secure iPads and iPhones to 200 people.",
			"dates": "2010-13"
		},
		{
			"title": "Hyper-V virtualisation",
			"description": "Managed the migration to a virtualised server environment",
			"dates": "2013-14"
		}
	]
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});	

var name = "Carl Poulton";
var role = "Web developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").append(formattedName);
$("#header").append(formattedRole);



displaySkills();

displayWork();

function displaySkills() {
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork() {

	for (job in work.roles) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].jobposition);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);

		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedYearsWorked = HTMLworkDates.replace("%data%",work.jobs[job].yearsworked);
		$(".work-entry:last").append(formattedYearsWorked);

		var formattedDesc = HTMLworkDescription.replace("%data%",work.jobposition[job].description);
		$(".work-entry:last").append(formattedDesc);	
	}

}

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
		$(".project-entry:last").append(formattedDates);
	}
}

projects.display();

function inName(name) {

    name = name.split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    name = name.join(" ");    
   
    return name;

}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

//************************************************************************************************************

/*function locationizer(work) {
	var locations =[];
	for (job in work.roles) {
		locations.push(work.roles[job].city)
	}
	return locations;
}

console.log(locationizer(work));


These were lines used when learning via the course

var name = "Carl Poulton";
var role = "Web developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

    newHTML = newHTML.replace(/<findtext>/g,<replacetext>); replace all matches in string


$("#main").append(formattedName);
$("#main").append(formattedRole);

$("#main").append(bio.name);

$("#main").append(bio.skills);
$("#main").append(bio.contactinfo);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);


var myname = "Carl";
var awesomethoughts = "I am " + myname + " and I am awesome!";
var funthoughts = awesomethoughts.replace("awesome","fun");

console.log(awesomethoughts);

$("#main").append(myname);
$("#main").append(funthoughts);
*/


/* This code for testing string manipulation
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!

    // this below...
    s = s[1].toUpperCase() + s.slice(2);
	
	// does the same as this...
	var u = s.slice(-7,2);
    u = u.toUpperCase();
    s= s.slice(-6);
    s= u + s;
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

*/

/* Array manipulation lesson

var sampleArray = [1,2,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turn into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!

    // My answer below is the same as....
	var lastArray = sampleArray[2];
	lastArray = lastArray + 1;
	newArray = [sampleArray[0],sampleArray[1],lastArray];

	//This that was provided by the course....
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

*/

/* More string manipulation

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    // This is what I did....
    finalName = finalName.toLowerCase();
    nameArray = finalName.split(' ');

    var firstName = nameArray[0];
    var lastName = nameArray[1];

    firstName = firstName[0].toUpperCase() + firstName.slice(1);
	lastName = lastName.toUpperCase()
    
    finalName = firstName + " " + lastName; 	

	// Answer given....
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

*/