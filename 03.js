//const temperature = "25";

// if (temperature >= 35) {
// console.log("It is very hot.");
//} else if (temperature === 25 ){
// console.log("It is warm.");
//} else if (temperature >= 15 ){
// console.log("It is cool.");
//} else {
//  console.log("It is cole.");
//}

// const hasTicket = ture;
// const hasId = false;
//const age=20;

//if (hasTicket && hasId && age >= 18){
// console.log("You may enter.");
// } else {
    // console.log("Youb may not enter.");
    //}

// if (hasTicket || hasId && age >= 28 ) { 
// console.log ("You may emter.");
// } else {
    // console.log ("You may not enter.");
    //}

    // const isLoggedIn = true;
    // const isAdmin = true;

    //if (isLoggedIn){
    // if(isAdmin){
    //  console.log("Welcome, admin.");
    //} else}{
    // console.log("Welcome, customer.");
    //}
    //else {
    // console.log("Please log in.");
    //}

    // const day = "Friday";

//switch (day){
//case "Monday":
  //  console.log("Start of the work week."):
    //break;
    //case "Friday":
    //case "Saturday":
    //case "Sunday":
      //  cpnsole.log("Weekend!");
        //break;
        //default:
          //  console.log("A regular day.");
            //}

// const username =NaN;

//if (username) {
// console.log("Hello, " + username);
//} else {
// console.log("NO username provided.");
// }

// for (let count = 1; count <= 5; count++){
// console.log (count);
//}

// let countdown =0;

// while (countdown >0 ){
// console.log(countdown);
// countdown--;
//}


//let number = 4;

// do {
// console.log(number);
// number++;
//} while (number <= 3);

// const color =n [ "red", "green", "blue"];

//for(const co of color){
// console.log(co);
//}

//const student = {
// name: "Mg Mg",
// age: 30
//};


//for (const k in student){
// console.log(k, student[k]);
//}

for (let number = 1; number <= 5; number++){

    if(number === 1) {
        console.log(number);
        continue;
    }

    if(number === 4) {
        break;
    }

    console.log(number);
}