function getDistance(x1, y1, x2, y2) {
	let y = Math.round(x2 - x1);
	let x = y2 - y1;
	let result =  Math.sqrt((x * x) + (y * y));
	return Math.floor(result)
}
/*
Lines For TestCase
getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/

