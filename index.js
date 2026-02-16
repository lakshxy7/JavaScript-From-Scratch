// let day="pizza";


// switch(day){
//     case 1:
//         console.log("it is monday")
//         break;
//         case 2:
//         console.log("it is tuesday")
//         break;
//         case 3:
//         console.log("it is wednesday")
//         break;
//         case 4:
//         console.log("it is thursday")
//         break;
//         case 5:
//         console.log("it is friday")
//         break;
//         case 6:
//         console.log("it is saturday")
//         break;
//         case 7:
//         console.log("it is sunday")
//         break;
//         default:
//             console.log(`${day} is not a day`)


// }


let testScore=79;
let letterGrade;
switch(true){


    case testScore>=90:
    letterGrade="A";
    break;

     case testScore>=80:
    letterGrade="b";
    break;

     case testScore>=70:
    letterGrade="c";
    break;

     case testScore>=50:
    letterGrade="d";
    break;
    default:
        letterGrade="Fail";

}
console.log(letterGrade);