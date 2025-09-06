function greet()
{
    console.log("welcome to devastra")
}
greet();

//with parameters
function add(a,b){
    return a+b;
}
let result=add(23,28)
console.log(result)
 
function multiply(c,d)
{
    return c*d;
}
result1=multiply(2,3)
console.log(result1);

//const multiply=function(a,b)
//{
  //  return a*b;
//}

//arrow function
const square=(a)=> a*a;
console.log(square(5))
const subtract=(a,b)=>
{
    console.log(a,b);
    return a-b;
}
console.log(23,17);
