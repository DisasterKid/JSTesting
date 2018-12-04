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

function largestOfFour(arr) {
    var arrTwo = []; 
    // loop for moving through the outer array and nested array
    for (var i = 0; i < arr.length; i++)
    {
        
       //console.log(arr[i]);
       //var num = 0 ;
       //var fun = arr[i][i];
       arrTwo = arr[i].filter(num => num > arr[i][i]);
       console.log(arrTwo);
       
         for (var j = 0; j < arr.length; j++)
        {
           
          // arrTwo = arr[i][j];

         // arrTwo = arr[i].filter(num => num > arr[i]);
          //console.log(arrTwo);
           
        } 
        
    } 


    

   
    //console.log(arrTwo);
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


  




 /* var arr = [[1,2,3,4],[1,2,3,4]];

  var flat = arr.reduce(function (accumulator, currentValue)
  
  
  {
      return accumulator.concat(currentValue);
  },
  []
  ); 
  
  
  var testFilter = flat.filter(num => num > 2);

  console.log(testFilter);  */