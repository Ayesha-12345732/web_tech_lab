
console.log("TASK 1");
function addition(a,b){
return a+b;
}
console.log(addition(3,5));

console.log("TASK 2");
function bitwiseAND(a,b){
  return a&b;
}
function bitwiseOR(a,b){
  return a|b;
}
function bitwiseXOR(a,b){
  return a^b;
}
console.log(bitwiseAND(5,3));
console.log(bitwiseOR(5,3));
console.log(bitwiseXOR(5,3));


console.log("TASK 3");
function addup(a){
  let sum=0;
  for(let i=1; i<=a; i++){
    sum=sum+i;
  }
  return sum;
}
console.log(addup(10));


console.log("TASK 4");
function progressorbar(a){
  let x=Math.floor(a/10);
  let result="";
  for(let i=1;i<=10;i++){
    if(i<=x){
      result=result+"#";
    }
    else{
      result=result+"-";
    }
  }
return result;
}

console.log(progressorbar(10));
console.log(progressorbar(40));

console.log("TASK 5");
function minmax(arr){
  let min=arr[0];
  let max=arr[0];

  for(let i=1; i<arr.length;i++){
    if(arr[i]<min)
      min=arr[i];

    if(arr[i]>max)
      max=arr[i];
  }
  return[min,max];
}
console.log(minmax([1,2,3,4,5,6]));

console.log("TASK 7");
function calculateFinalPrice(basePrice,taxRate,discountPercentage){
  let discount=basePrice*discountPercentage/100;
  discount=Math.round(discount*100)/100;
  let price=basePrice-discount;
  let tax=price*taxRate/100;
  tax=Math.round(tax*100)/100;
  let finalPrice=price+tax;
  finalPrice=Math.round(finalPrice*100)/100;
  let loyaltyPoints=Math.ceil(finalPrice);
  return{
    finalPrice:finalPrice,
    loyaltyPoints:loyaltyPoints
  };
}
console.log(calculateFinalPrice(1500,10,25));

console.log("TASK 6");
function calculateRepoStats(repos){
    const stars=repos.map(function(repo){
        return repo.stars;
    });
    const maxStars=Math.max(...stars);
    const minStars=Math.min(...stars);
    const totalStars=stars.reduce(function(sum,star) {
       return sum+star;
    },0);
    const avgStars=Math.floor(totalStars/stars.length);
    const varianceScore=Math.abs(maxStars-minStars);
   return{
        maxStars:maxStars,
        minStars:minStars,
        avgStars:avgStars,
        varianceScore:varianceScore
    };
}
const repos=[
    {name:'repo-a',stars:12},
    {name:'repo-b',stars:45},
    {name:'repo-c',stars:3}
];
console.log(calculateRepoStats(repos));

console.log("TASK 8");
function paginateData(items,pageNumber,pageSize=5){
    let totalPages=Math.ceil(items.length/pageSize);
    let startIndex=(pageNumber-1)*pageSize;
    let endIndex=startIndex+pageSize;
    let data=items.slice(startIndex,endIndex);
    return {
        data:data,
        currentPage:pageNumber,
        totalPages:totalPages,
        hasNext:pageNumber<totalPages,
        hasPrev:pageNumber>1
    };
}
const allProducts=[
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Desk',
    'Chair',
    'Webcam',
    'Headphones'
];
const result=paginateData(allProducts,2,3);
console.log(result);