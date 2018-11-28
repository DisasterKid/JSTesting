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