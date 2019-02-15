//This file is used to contain some useful pieces of javascript that I use in
//my web pages.  I put the script here so that I don't have to tweak it in 
//every document, just call on it here.

//This is a helper function used by lastModified().  It creates an array
//based on the arguments passed in.										
function makeArray() { 
	for (i = 0; i < makeArray.arguments.length; i++) 
 		this[i + 1] = makeArray.arguments[i];
}


//This function is used to output the last modified date of a document (in
//html).  The bulk of the function focuses on formatting the data prettily.
function lastModified(){

  var modifiedMonth = new makeArray('Jan','Feb','Mar',
                                	'Apr','May','Jun',
									'Jul','Aug','Sep',
									'Oct','Nov','Dec');
  
  var modifiedDay = new makeArray('Sun', 'Mon', 'Tue', 
                                  'Wed', 'Thur', 'Fri', 
  								  'Sat');										
  
  var modifiedDate = new Date(document.lastModified); 
  
  document.write("Last Updated: " + 
  modifiedDay[modifiedDate.getDay()+1] + ", " + 
  modifiedDate.getDate() + " " + 
  modifiedMonth[modifiedDate.getMonth()+1] + " " + 
  modifiedDate.getFullYear())
  
  //The next line just prints the full date and time
  //with no finessing.
  //document.write("Last Updated: " + document.lastModified)	
}

//This function is used to insert my footer somewhere in an html document.
//The copyright symbol, with my name (linked to my home page) is printed on 
//one line.  The next line shows the last modified date.  Format (i.e., font
//and justification, etc.) depends on the host document.
function myFooter() {
	document.writeln("<br>")
	var showlink = "Webmaster";
	var showname = "crane";
	var showhost = "cs.queensu.ca";
	var showsubject = "?subject=DEBS05:"
	document.writeln("<a class=arrow href=" + "mail" + "to:" + showname + 
					 "&#64;" + showhost + showsubject+ ">" + showlink + "</a>");
	document.writeln("<br>")
	lastModified()
}
 