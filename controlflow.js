//ifelse ladder statement
let marks=70;
if(marks>=90){
    console.log("A grade")
}
else if(marks>=70)
{
console.log("B grade");
}
else if(marks>=50)
{
    console.log("C grade");
}
else {
    console.log("passed");
}

//switch case
let day=4;
switch(day)
{
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
         console.log("thursday")
         break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    default:
        console.log("invalid")
        break;
        }
       
 //for loop
 for(let i=1;i<=10;i++)
 {
    console.log("the numbers are")
    console.log(i)
 }

 //while loop
 let start=1;
 console.log("even numbers")
 while(start<=10)
 {
    if(start%2==0)
    {
        console.log(start);
    }
    start++;
 }

 let array=["bhavya","sirisri","srikanth"]
for(let i=0;i<=array.length;i++)
{
    console.log(array[i])
}

let details=
{
    name:"bhavya",
    age:18,
    collge:"jntu-gv"
} ;
for(let key in details)
{
    console.log(`${key}:${details[key]}`)
}
for(let i=5;i>=0;i--)
{
    if(i==3)
    {
        break;
    }
    else if(i==2)
    {
        continue;
    }
    console.log(i);
}