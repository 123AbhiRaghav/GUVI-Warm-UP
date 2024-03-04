function getFullName(firstName, lastName) {
	if(firstName != "" && lastName == undefined)
	           return firstName;
	 if(firstName != "" && lastName != "")
	           return firstName + " " + lastName;
	  if(firstName == "" && lastName == "")
	            return firstName + lastName
}
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/