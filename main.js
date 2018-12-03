    //FCC reverse string challenge 

/*
function reverseString (str)
{

    var arr = [];
    var splitStr = str.split("");
    for (var i = 0; i < str.length; i++)
    {
     
        arr += splitStr.pop();
    }

       // console.log(arr);

    str = arr;
    return str


}

reverseString("hello"); 

*/

//FCC factorial challenge

/*
function factorialize (num) 
{
    
    var arr = [];
    var arrTwo = [1];
   
     
    if (num == 0 )
    {
        return num = 1;
    }

    else 
    {

    

        for (i = 0; i <= num; i++)

        {
            arr[i] = i;
        }
        arr.shift();
        for (j = 0; j < num; j++)
        {
            arrTwo[0] *= arr[j];
        }
    return num = arrTwo[0];
    
    }

    
   
}
factorialize(5);
*/


//  Find the longest word in the string

function findLongestWordLength(str)
{
   
    var arr = [0];
    var splitStr = str.split(" ");
    //console.log(str.split(" "));
    arr[0] = splitStr[0];

    for (var i = 0; i < splitStr.length; i++)
    {
        //arr[0] = splitStr[i];

        if (arr[0].length > splitStr[i].length)
        {

        } else {
            arr[0] = splitStr[i];
        }
        //console.log(arr[0]);
    }
    //console.log(arr[0]);
    //console.log(arr[0].length);
    return arr[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");