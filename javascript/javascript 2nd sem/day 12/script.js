///---------LOOPS---------


///WAP TO PRINT YOUR NAME 50 TIMES

// for (let a=1; a<=100; a++ ){
//     console.log("sujan");
    
// }

//WAP TO PRINT NUMBER FROM 1 TO 100

// for (let a= 1; a<=100;a++ ){
//     console.log(a);
    
// }

//WAP TO PRINT NUMBER FROM 100 TO 1

// for (let a= 100; a>=1;a-- ){
//     console.log(a);
    
// }

//WAP TO PRINT EVEN NUMBER FROM 1 to 100

// for (let a=2; a<=100;a+=2 ){
//     console.log(a);
    
// }

//WAP TO PRINT ODD NUMBER FROM 1 to 100

// for (let a=1; a<=100;a+=2 ){
//     console.log(a);
    
// }

///WAP TO PRINT ODD NUMBER A TO B 
//TAKE A AND B FROM USER

// let A=Number(prompt("Enter any number"));
// let B=Number(prompt("Enter any number"));
// for (let count=A; count<=B; count++)
//     {
//         if(count %2 ==1){
//     console.log(count);
//         }
    
// }

//TABLE OF 5
//  for(let a=1; a<=10;a++){
//     console.log(`5 X ${a}=${5*a}`);
    
//  }

//SUM OF ODD NUMBERS BETWEEN TWO NUMBERS


// let A = Number(prompt('Enter the number'));
// let B = Number(prompt('Enter the number'));
// let sum=0;
// for(let count = A; count<=B; count++){
   
//     let rem=count%2;
//     if(rem ==1 ){
//         sum =sum + count;
//     }
// }
// console.log(sum);

//SUM OF EVEN NUMBERS BETWEEN TWON NUMBERS


// let A = Number(prompt('Enter the number'));
// let B = Number(prompt('Enter the number'));
// let sum=0;
// for(let count = A; count<=B; count++){
   
//     let rem=count%2;
//     if(rem ==0 ){
//         sum =sum + count;
//     }
// }
// console.log(sum);


// let A=Number(prompt("Enter the first number"));
// let B=Number(prompt("Enter the second number"));
// let sum=0;
// for(let count=A; count<=B; count++){
//     let rem=count%2;
//     if(rem==0){
//         sum=sum+count;
//         console.log(sum);
        
//     }
// }


let A=Number(prompt("Enter the first number"));
let B=Number(prompt("Enter the second number"));
let sum=0;
for(let count=A; count<=B; count++){
    let rem=count%2;
    if(rem==1){
        sum=sum+count;
        console.log(sum);
        
    }
}