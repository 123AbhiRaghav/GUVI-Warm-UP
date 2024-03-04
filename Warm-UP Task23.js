var obj = {
	"mykey": "value"
}

function removeProperty(obj, key) {
	delete obj[key];
	if(obj[key] === undefined){
	    return true;
	} else {
	    return false;
	}
}

removeProperty(obj, "mykey");
/*
Lines For TestCase

obj.mykey === undefined;
*/