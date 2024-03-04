function getOpposite(num) {
    if(isNaN(num)) {
        return -1;
    } else if(num%1 != 0){
        return -1;
    } else{
        return -(num);
    }
}
/*
Lines For TestCase

getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/