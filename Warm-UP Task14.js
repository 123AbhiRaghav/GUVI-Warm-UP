function isEven(num) { 
	if(num%2 == 0){
	    return true;
	} else if(isNaN(num)){
	    return -1;
	} else {
	    return false;
	}
}
/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/