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


function factoralize (num) 
{
    
    var arr = [];
    var arrTwo = [];
      
    for (i = 0; i <= num; i++)

    {
        arr[i] = i;
        


    }
   
   
    arr.shift();
    console.log(arr);
    
    
    for (j = 0; j < num; j++)
    {
        

        for (n = 1; n <= num; n++ )
        {
            //console.log(arr);
            arr[j] *= arr[n];
            //console.log(arr);
            
        }
       
       
    }

 
    
    return num;
}


factoralize(5);