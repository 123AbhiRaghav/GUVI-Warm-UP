function getLengthOfWord(word1) {
	if(word1 == undefined) {
	    return -1;
	} else if (word1 == "") {
	    return 0;
	} else if (!isNaN(word1)) {
	    return -1;
	} else {
	    return word1.length;
	}
}
/*
Lines For TestCase
getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/