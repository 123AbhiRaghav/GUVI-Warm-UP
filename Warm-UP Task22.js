var obj = {}

function addProperty(obj, key) { 
	obj[key] = true;
	return obj;
}

addProperty(obj, "mykey");
/*
Lines For TestCase

obj.mykey
*/