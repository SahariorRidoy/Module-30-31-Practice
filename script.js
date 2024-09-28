// 1
const multiplyThree=(num1,num2,num3)=>num1*num2*num3;
multiplyThree(2,3,4);
console.log("Three number Multiplication: ",multiplyThree(4,6,8));

//2
const one='Iam a web developer.'
const two='I love to code.'
const three ='I love to eat biryani'
const result=`${one} ${two} ${three}`
console.log(result);


// 3
const defaultParameterVal=(num1,num2=2)=>num1+num2;
console.log("Summation using default value: ",defaultParameterVal(4));



// Problem set 2
const arrFunction=(friends)=>{
    const evenFriend=[];
for(friend of friends){
    
    if(friend.length%2==0){
        evenFriend.push(friend);
    }  
}
return evenFriend;
}
const arguMents=arrFunction(["Rohim","Karim","jack","salman",'piyal',"tom","Sams"])
console.log("Even length string named friends are: ",arguMents);





// Problem set 3
const squareArr=(elements)=>{
    const arrElement=[];
    for(element of elements){
       const squareResult= element*element;
        arrElement.push(squareResult)   
    }
    return arrElement;
}
const resultSquare=squareArr([2,3,4,5,6,7,8]);
console.log("Square of the Array is: ",resultSquare);
let sumResult=0;
    for(sum of resultSquare){
        sumResult=sumResult+sum;
    }
    console.log("Summation of the array is: ",sumResult);
    
  const average= sumResult/resultSquare.length;
  console.log("Average:",average);
  



//   Problem set 4
const twoArrayJoin=(arr1,arr2)=>{

    const joinArr=[...arr1, ...arr2];
    const maxValue=Math.max(...joinArr)
    return maxValue;
}
   const twoArr=(twoArrayJoin([3,5,7,8],[1,9,2,6]));
   
   console.log("Max number from two joined array: ",twoArr);
   

//    Module 31 Practice

const oddArr=[1,3,5,7,9];
// const evenArr = oddArr.map(number => {
//     if(number%2 === 1){
//        return number+1;
//     }   
//     return number;
// }
// )
const evenArr=[];
for(let i=0;i<=oddArr.length;i++){
   const number=oddArr[i];
   if (number%2==1){
    evenArr.push(number+1);
   }
   
    
}
console.log(evenArr);


