// Q 1 :-

function Minimal_Angle(h, m) {
    
  const hourAngle = 30 * h + 0.5 * m;
  const minuteAngle = 6 * m;
  const angle = Math.abs(minuteAngle - hourAngle);
  return Math.min(angle, 360 - angle);
}
const h = 4;
const m = 10;
const minimalAngle = Minimal_Angle(h, m);
console.log(minimalAngle);

// Q 2:-
function isLeapYear(){
    
    if ((year % 4 == 0 ) && (0 != year % 100 ) || (0 == year % 400)){
        console.log(year + " is a leap year");
    }
    else{
        console.log(year + " is not a leap year");
    }
}

const year = 2024
isLeapYear()

// Q 3 :-

let number = 4;

if (number % 2 == 0 ) {
    console.log("This number is Even");
}
else{
    console.log("This number is Odd");
}


// Q 4 :-

var reverseNumber = "This is a Reverse Number";

var text = [...reverseNumber].reverse().join(" ");
console.log(text);



// Q 5 :-

function Substring_Check(S1, S2) {
    if (S2.includes(S1)) {
        return "YES";
    } else {
        return "NO";
    }
}
const S1 = "Prepbuddy";
const S2 = "Hii this is Prepbuddy";
const result = Substring_Check(S1, S2);
console.log(result);