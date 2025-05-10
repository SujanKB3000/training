//1. Electricity Bill Calculation

// let unitElectricity=Number(prompt("Enter unit of electricity consumed"));
// if(unitElectricity<100){
//     console.log("Your total bill is Rs.", 1.5*unitElectricity)
// }else if(unitElectricity>100 && unitElectricity<300){
// console.log("Your total bill is Rs.", 2*unitElectricity)
// }else if(unitElectricity==300){
// console.log("Your total is Rs.", 3*unitElectricity)
// }else{
//     console.log("Enter a valid unit consumed")
// }


///2---INTERNET DATA USAGE ALERT---

// let userData=Number(prompt("Enter your data usage"));
// if (userData<=50){
//     console.log("Normal usage");
    
// } else if(userData>50 && userData<90){
//     console.log("Warning");
    
// } else if(userData>100){
//     console.log("ERROR");
    
// }else{
//     console.log("Over Limit");
    
// }


///3----SEASON CHECKER

// let userSeason=Number(prompt("Enter the month number"));
// if(userSeason==12&& userSeason==1&& userSeason==2){
//     console.log("Winter");
    
// } else if(userSeason==3 && userSeason==4 && userSeason==5){
//     console.log("Spring");
    
// }  else if(userSeason==6 && userSeason==7 && userSeason==8){
//     console.log("Summer");
// }  else if(userSeason>12){
//     console.log("ERROR");
// } else{
//     console.log("Autum");
    
// }

//5. Rating

// let rating=Number(prompt("Rate the movie out of 10"));
// if(rating==8||rating==9||rating==10){
//     console.log("Excellent");
// }else if (rating>=5 && rating<=7.9){
// console.log("Average")
// }else if(rating<5&&rating>0){
//     console.log("Poor")
// }else{
//     console.log("Invalid")
// }


//6. Loan Approval based on Credit


// let creditScore=Number(prompt("Enter total credit score"));
// if(creditScore>=750 && creditScore<1000){
//     console.log("Approved")
// }else if(creditScore>=600 && creditScore<750){
//     console.log("Review")
// }else if(creditScore<600){
//     console.log("Rejected")
// }else{
//     console.log("Invalid score")
// }


//7. Shipping Charges Based on Distance

// let distance=Number(prompt("Enter your distance"))
// if(distance<=10 && distance>0){
// console.log("Free")
// }else if(distance>=10 && distance<50){
//     console.log("Shipping cost Rs. 50 added")
// }else if(distance==50){
//     console.log("Shipping Cost Rs. 100 added")
// }else{
//     console.log("Invalid Input")
// }

//8. Student Performance Evaluation

// let percentage=Number(prompt("Enter your percentage"));
// if(percentage>=90 && percentage<=100){
//     console.log("Excellent");

// }else if(percentage>=70 && percentage<=90){
//     console.log("Good")
// }else if(percentage>=50 && percentage<=69){
//     console.log("Average")
// }else if(percentage<50){
// console.log("Need Improvement")
// }
// else{
//     console.log("Invalid")
// }


// 9. Typing Speed Evaluation

// let speed=Number(prompt("Enter your Speed"));
// if(speed>=60 && speed<=100){
//     console.log("Fast")
// }else if(speed>=40 && speed<=60){
// console.log("Average")
// }else if (speed<40 && speed>0){
//     console.log("Slow")
// }else{
//     console.log("Error")
// }


//10. Language Level Based On test Score

// let language=Number(prompt("Enter your test score"));
// if(language>=85 && language<=100){
//     console.log("Fast")
// }else if(language>=60 && language<=84){
// console.log("Average")
// }else if (language<60 && language>0){
//     console.log("Beginner")
// }else{
//     console.log("Error")
// }


// 11. Income Tax

// let income =Number(prompt("Enter your Income"));
// if(income>=0 && income<=2.5){
//     console.log("No Tax")
// }else if(income>=2.5 && income<5){
// console.log("5%")
// }else if(income>=5 && income<10){
// console.log("20%")
// }else if(income==10){
//     console.log("30%")
// }else{
//     console.log("Error")
// }

// 12. Water Quality Index

// let airQuality=Number(prompt("Enter air Quality"));
// if(airQuality<=50 && airQuality>0){
// console.log("Good")
// }else if(airQuality>=51 && airQuality<=100){
//     console.log("Moderate")
// }
// else if(airQuality>=101 && airQuality<200){
// console.log("Unhealthy")
// }
// else if(airQuality==200){
//     console.log("Dangerous")
// }else{
//     console.log("Error")
// }


// 13. Voting Eligibility

// let age=Number(prompt("Enter your age"));
// if(age<=18 && age>0){
//     console.log("Not eligible")
// }else if(age>=18 && age<60){
//     console.log("Eligible")

// }else if(age==60){
//     console.log("Senior Voter")

// }else{
//     console.log("Error")
// }


// 14. App rating FeedBack

// let ratingApp=Number(prompt("Rate the app"));
// if(ratingApp>=4.5 && ratingApp<=5){
// console.log("Excellent")
// }else if(ratingApp>=3.4 && ratingApp<=4.4){
//     console.log("Good")
// }
// else if(ratingApp>=1 && ratingApp<=2.9){
//     console.log("Poor")
// }

// else{
//     console.log("Error")
// }

// 15. Coffee Strength Selector

// let strength = Number(prompt("Enter a strength"));
// if (strength > 0 && strength <= 5) {
//     console.log("Light")
// }
// else if (strength >= 4 && strength <= 8) {
//     console.log("Medium")
// } else if (strength >= 9 && strength <= 10) {
//     console.log("Strong")
// }
// else {
//     console.log("Invalid")
// }



// 16. Bus Fare by Age

// let yourAge=Number(prompt("Enter your age"));
// if(yourAge<=5 && yourAge>0){
//     console.log("Free0")
// }else if(yourAge>5 && yourAge<18){
//     console.log("Half")
// }else if(yourAge==18 && yourAge<19){
//     console.log("Full")
// }else{
//     console.log("Error")
// }


// 17. Game Difficulty Setting

// let difficulty=Number(prompt("Enter your level of game"));
// if(difficulty>0 && difficulty<=20){
//     console.log("Easy")

// }else if(difficulty>20 && difficulty<=40){
//     console.log('Medium')
// }
// else if(difficulty>40 && difficulty<=100){
//     console.log("Hard")
// }
// else{
//     console.log('Invalid')
// }

// 18. Subscription Type

// let type=Number(prompt("Enter your type of subscription"));
// if(type==1){
// console.log("Basic")
// }else if(type==2){
// console.log("Standard")
// }else if(type==3){
// console.log("Premium")
// }else{
// console.log("Invalid")
// }



// 20. Mobile Battery Level

// let mobile=Number(prompt("Enter your battery percentage"));
// if(mobile<20 && mobile>0){
//     console.log("Low");
// }else if(mobile>=20 && mobile<80){
// console.log("Normal")
// }else if(mobile>=80 && mobile<=100){
// console.log("High")
// }else{
//     console.log("Invalid")
// }



// 21. CPU Temperature Monitor

// let temperature=Number(prompt("Enter monitor's your temperature"));
// if(temperature<50 && temperature>0){
// console.log('Low')
// }else if(temperature>=50 && temperature<75){
// console.log("Warm")
// }else if(temperature==75){
//     console.log("Danger")
// }else{
//     console.log("Error")
// }


// 22.Body Temperature

// let temp=Number(prompt("Enter body's temperature"));
// if(temp<36 && temp>0){
// console.log('Low')
// }else if(temp>=36 && temp<37.5){
// console.log("Normal")
// }else if(temp==37.5){
//     console.log("Fever")
// }else{
//     console.log("Error")
// }

// 23. Online Order status code

// let card=Number(prompt("Enter your card no."));
// if(card==0){
// console.log("Ordered")
// }else if(card==1){
// console.log("Packed")
// }else if(card==2){
// console.log("Shipped")
// }else if(card==3){
// console.log("Delivered")
// }
// else{
//     console.log("Error")
// }


// 24. Fuel Efficiency


// let fuel=Number(prompt("Enter your fuel status"));
// if(fuel==20){
// console.log("Excellent")
// }else if(fuel>=15 && fuel<=20){
// console.log("Good")
// }else if(fuel<15 && fuel<0){
// console.log("Poor")
// }else{
// console.log("Invalid")
// }


// 25. Computer Boot Time


// let bootTime=Number(prompt("Enter your boot time"));
// if(bootTime<10 && bootTime>0){
//     console.log("Fast")

// }else if(bootTime>10 && bootTime<30){
//     console.log("Average")
// }else if(bootTime==30){
// console.log("Slow")
// }else{
//     console.log("Invalid")
// }


//----SOFTWARE VERSION COMPATIBILITY---

// let softwareVersion=Number(prompt("Enter your software version compatiability"));
// if(softwareVersion<2.0){
//     console.log("Outdated");
    
// } else if(softwareVersion>=2.0 || softwareVersion<=3.0){
//     console.log("Compatible");
    
// }else{
//     console.log("Beta feature required");
    
// }
