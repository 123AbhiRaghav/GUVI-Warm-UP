function getNthElement(array, n) {
	if (array.length > 0)
		return array[n];
	else
		return undefined;

}
/*
Lines For TestCase
getNthElement([1, 3, 5], 1);
getNthElement([1, 3, 5], 2);
getNthElement([], 2);
*/