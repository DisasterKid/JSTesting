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

/* function findLongestWordLength(str)
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
*/

// fint the largest number inside the sub arrays of the array given
/*
function largestOfFour(arr) {
    var arrTwo = []; 
    // loop for moving through the outer array and nested array

    for (var i = 0; i < arr.length; i++)
    {
        
      var num = arr[i][0];
       
         for (var j = 1; j < arr[i].length; j++)
        {

           if (arr[i][j] > num)
            {
                num = arr[i][j];
            }

           
        } 
        
    arrTwo[i] = num;
    
    }
    return arrTwo;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

*/
  
// had some trouble with this one, needed some help form the fcc website.



 /* var arr = [[1,2,3,4],[1,2,3,4]];

  var flat = arr.reduce(function (accumulator, currentValue)
  
  
  {
      return accumulator.concat(currentValue);
  },
  []
  ); 
  
  
  var testFilter = flat.filter(num => num > 2);

  console.log(testFilter);  */


// Challenge five confirm the ending
/*
function confirmEnding(str, target) {

//var word = new RegExp(target);
//console.log(str.slice(str.length - target.length) === target);
//console.log(str.lastIndexOf(target));

var last = str.lastIndexOf(target);
var endOf = str.length;

var place = str.length - target.length;
var fun = str.substring(place, endOf);
//console.log(last);
//console.log(place);
//console.log(endOf);

   if ( fun == target )
    {
        //return str = true;
        str = true;
        console.log(str);
    } else {
        //return str = false;
        str = false;
        console.log(str);
    }
    //return str;
  }
  
  confirmEnding("Connor", "n");
  */
  //needed some help here but was able to come up with my own solution. I grab the start of my substring by taking the length of the target and subtracting it from the string, then the length of the string becomes my ending point.