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


  // challenge six repeat the string x number of times and return an empty string if nothing or neg numbers are entered

/*
  function repeatStringNumTimes(str, num) {
    // repeat after me
  
  var arr = [];
  
  for (var i = 0; i < num; i++)
  {
    arr.push(str);
  }
    
    
    
    //console.log(arr.toString() );
    var pre = arr.toString();
    var fin = pre.replace(/,/g, "");
    console.log(fin);
    return str = fin;
  }
  
  repeatStringNumTimes("abc", 4);
  */

  // This one wasn't too bad, just used a for loop and push() to create an array then turned the array into a sting and removed the "," from the output.

  //challenge seven
  //truncate a strong

 /* function truncateString(str, num) {
    // Clear out that junk in your trunk
    var len = str.length;
    console.log(num);
   if (len > num)
    {
        var newStr = str.substring(0, num) + "...";
        return str = newStr;
    }else {
        console.log(str);
        return str;
    }
   
    //console.log(newStr);

    
  }
  */
 // truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
  //truncateString("A-tisket a-tasket A green and yellow basket", 8)
  // This one was not to bad, just grabed a substring with the starting point of one and ended with num. If the length of the string is greater than num cut it and add ... else just print the string.

  //challenge eight find a number in an array that meets the functions requirments
 /* function findElement(arr, func) {
    let num;
  
    for (var i = 0; i < arr.length; i++)
    {

       // console.log(arr[i]);
        if(arr[i] % 2 === 0)
        {
            console.log(arr[i]);
            return num = arr[i];
        } else if (arr[i] == arr.length)
        {
            return num;
        }
    }

  }
  
  findElement([1, 3, 5, 9], num => num % 2 === 0); */

  // This one wasnt too bad, I just had a for loop run through my array and check for the condition. If my array got to the end i just returned the undeclared num


  //Challenge nine boohoo
/*
  function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    //console.log(bool);
  if (bool === true || bool === false)
  {
    //console.log(bool);
    //return bool = true;
     
    
  
  }else {
    //console.log(bool);
    //return bool = false;
     
    
  }
    //console.log(bool);
    //return bool;
  }
  
  booWho(0);
  */

  // This one wasn't too bad either, just had a strict equals and an or statement if either of those condittions are met its true, else its false.
  
// challenge ten Title Case a Sentence
/*
function titleCase(str) {
    
    var newStr = str.toLowerCase();
    var strArr = newStr.split(" ");
    var twoArr = newStr.split(" ");
    var funArr = [];
    var newLetter;
    var fun;
    var funny;
    var superFun = "";
    for (var i in strArr)
    {
      
       
       //newLetter = strArr[i][0].toUpperCase();
        //strArr[i][0] = strArr[i][0].toUpperCase();
        //strArr.replace(strArr[i][0], newLetter);
        //console.log(strArr[i][0]);
        fun = strArr[i][0].toUpperCase();
        funny = strArr[i].charAt(0);
        superFun += strArr[i].replace(funny, fun);
        if(i < strArr.length - 1)
        {
          superFun += " ";
        }
        
        //console.log(fun);
        //console.log(funny);
       // console.log(superFun);

    }
    superFun += ".";
     str = superFun;
     console.log(str);
   /* for (var j = 0; j < strArr.length; j ++)
    {
        twoArr[j] = twoArr[0].unshift(strArr[j]);
    }
    console.log(twoArr);
    //return str; 
    //console.log(strArr);
    return str;
  }
  titleCase("sHoRt AnD sToUt");
  */ 
 // this one took a little while, I had trouble with replaceing the first letter of each word with a capital one, i used some methods that I saw in the hints. At the end i got stuck because I initialized my superFun str with white space so it failed..

 // challenge eleven splice two arrays together.
/*
 function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    var newArr = arr2.slice();
   // console.log(arr2)
   // console.log(newArr)
    newArr.splice(n, 0, arr1);
   // console.log(newArr.flat());
   // console.log(newArr)
    return arr2 = newArr.flat();
  }
  
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
  */

  //This one was ok, I was a little stumped with splices behavior, I thought that just doing var x = arr2 would prevent arr2 from being changed when using the splace() method but I guess not, I need to do var x = arr2.slice(), that was arr2 wasn't chaged. At the end i had some trouble with the return statement I need to do arr2 = newArr.flat() doing newArr.flat() in the previous line would not work return the proper value when I did arr2 = newArr.


  //Challenege twelve
/*
  function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    for (var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
        var x = Boolean(arr[i]);
        console.log(x);

       if (x == false || x === false)
        {
            arr.splice(i, 1);
            i -+ 1;
        } 
        
    }
    console.log(arr);
    return arr;
  }
  
  bouncer([1,2,3,4,0,5,false]);
*/
  // i got a little stuck with splice at the end since. If I had two false values next to each other the second would not be removed since that index had just been evaluated. But i figured out that I ccan just subtract 1 from i if I enter my if statment.


//challenge thirteen

/*

  function getIndexToIns(arr, num) {
    // Find my place in this sorted array.

    var newArr = arr.slice();
    var pos = 0;
    var inCount = 0;
    var bigNum = 0;
    console.log(arr);
    newArr.sort(function(a,b){return a-b});
   // console.log(Boolean(arr.length));
   console.log(arr);
   console.log(newArr);
    //console.log(newArr.length);
    for (var i = 0; i < newArr.length; i++)
    {
        if (num <= newArr[i] && inCount < 1)
        {
            
            //console.log(num);
            //console.log(newArr[i]);
            pos = newArr.indexOf(newArr[i]);
            //console.log(pos);
            inCount += 1;
            //console.log(inCount);
            return num = pos;
        } else if ( i == newArr.length - 1)
        {
           
           bigNum = newArr.length;
           //console.log(bigNum);
           return num = bigNum;
           
        } 
    }

    if (arr.length == 0)
    {
            //console.log("bro");
            return num = 0;
            
        
    }
    //return num = pos;
  }
  
  getIndexToIns([99,67,1,100,6], 1);
*/

//This one gave me a bit of trouble at the end, i didn't pay attention and I had my final else if clause insde my for loop, which would prevent it from even running. So I moved it outside my for loop and the function worked properly.


//Challenge fourteen
/*
function mutation(arr) {
 
   
   var fun = arr.toString(); 
   fun = fun.toLowerCase();
   fun = fun.split(",");
   var funOne = fun[0];
   var funTwo = fun[1];
   var j = 0;
   var count = funTwo.length;
  //console.log(funTwo);
   //console.log(funOne);
    for (var i = 0; i <= funOne.length; i++)
    {
        
        console.log(i + " i am i");
        if ( funOne[i] == funTwo[j] && count !== 0)
        {
            
            //console.log(i + " i am i------")
            console.log(funOne[i] + " i am i------");
            console.log(funTwo[j] + " i am J-----");
            console.log(j + " i am j-------");
            console.log(count + " i am count------");
           // console.log(i + " i am i")
           i = -1; 
           j += 1;
           count -= 1;
        } else if ( j == funTwo.length)
        {
            console.log("test");
            return arr = true;
            
        } else if (i == funOne.length) {
            console.log("false test");
            return arr = false;
        }
        //console.log(i + " i am i")
    }

    
    //return arr;

  }
  
  mutation(["hello", "hey"]);
  
  
  

/

  function arrFun (arr)

  {
    var fun = arr;

    console.log( fun.sort((a,b) => a - b));
    console.log(fun);


  }


  function arrThing (a, b)

  {
    var arr = a - b;
    console.log(arr);  
    return a- b;
  }


arrThing();



var i = 0;
var j = 0;
var count = 4;
var word = 10 ;
arr = [2,3,1,4];
arrTwo = [1,2,3,4];


while (j !== count)
{
    if (arr[i] == arrTwo[j])
    {
        console.log(count, i,j);
        count -= 1;
        i = 0;
        console.log("fun");

    }
    console.log("fun" + count);
}*/

// This one took longer then it should have, I just stuck with my for loop not gettting back to zero since the loop will also execute the last part of the for loop statment at the end of the main block of code so it will never get back to zero
// I solved that by declaring i to -1 inside my if statement to get it back to zero not ideal but it works.


//challenge fifteen

/*
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    var j = 0;

    for (var i = 0; i <= arr.length; i++)
    {
        console.log(arr.length);
        newArr[i] = arr.splice(j, size);
        console.log(j + " before");
        console.log(j + " after");
        console.log(arr);

    }

    if ( arr.length == 1)
    {
        newArr.push(arr);
    }
    console.log(newArr);
    return arr = newArr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  */
// This one was not too bad, I just slcied the array down based on the size entered, if there were left over numbers in the array i just used an if to check then push them onto the array.


// Data structures challenges, removed a nested area if it met a condition

/*
function fixArr (arr, elem)

{
var newArr = [];
//console.log(arr);
//newArr.shift();
//console.log(newArr);

   for (var i = 0; i < arr.length; i++)
    {
            if(arr[i].indexOf(elem) == -1 )
            {
               
               newArr.push(arr[i]);
              
            }
    }
 return newArr;
}



fixArr([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18);

*/


function testFunction()
{
    let i = 0;

    if ( i < 10)
    {
       window.alert(i);
    }
}
