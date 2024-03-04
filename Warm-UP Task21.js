var obj = {
	mykey: 'value'
}

function getProperty(obj, key) {
	let value = obj[key]
	return value;
}
/*
Lines For TestCase

getProperty(obj,'mykey');
getProperty(obj,'dummykey');
*/