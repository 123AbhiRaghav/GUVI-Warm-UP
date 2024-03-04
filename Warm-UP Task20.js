function getLastElement(array) {
	if(array.length > 0)
	  return array[array.length -1];
	else 
	  return -1;
}
/*
Lines For TestCase

getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4,5,6,7]);
getLastElement([]);
*/