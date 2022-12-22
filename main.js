//1//
function numberStatus(namber) {
    if (namber % 2 == 0){
    console.log("true");
    } else{
    console.log("false");
    }
}
//2//
function greaterNum(x,y,z) {
    if (x>y &&  z) {
    console.log(x);
    } else if (y>z && x) {
    console.log(y);
    } else if (z>y && x) {
    console.log(z);
    }   
}
greaterNum(4,2,1)

//3//
function helloWorld(hola){
if(hola == "es"){
return "Hola Mundo"
} else if(hola == "de"){
return "Hallo Wereld"
} else if (hola == "en"){
return "hello world"
}
}

//4//
function assignGradea(numberScore){
    if(numberScore<=100 && 90<=numberScore){
    return "A"
    };
    if(numberScore<=89 && 80<=numberScore){
    return "B"
    };
    if(numberScore<=79 && 70<=numberScore){
    return "C"
    };
    if(numberScore<=69 && 60<=numberScore){
    return "D"
    };
    if(numberScore<=59){
    return "F"
    };
}
console.log (assignGradea(98))      
console.log (assignGradea(78))
console.log (assignGradea(48))

//5//
function pluralize(noun,namber){
if(namber>1)
console.log (`${namber} ${noun}s`)
else if (namber=1)
console.log (`${namber} ${noun}`)
}
pluralize("dog",1)
pluralize("dog",2)

//6//
"I would like an ice cream strawberry && chocolate,  stracciatella, || an ice cream of any flavor !=caramel."//

// //7//
// let person = prompt("Please enter your name","Friend");
// document.write(`Hello ${person},Welcome!`);

//8//
function result(namber){
    if(namber % 2 === 1 && namber>0 ){
    console.log ("Positive and odd")
    }else if(namber % 2 === -1 && namber<0 ){
    console.log ("Negative and odd")
    }else if(namber % 2 === 0 && namber<0 ){
    console.log ("Negative and even")
    }else if(namber % 2 === 0 && namber>0 ){
    console.log ("Positive and even")
    }else{
    console.log ("0")
    }
}
result(-1)

//10//
function calculator(num1,num2,operand){
if(operand === "+"){
return(num1+num2);
}else if(operand === "-"){
return (num1-num2); 
}else if(num2 !== 0 && operand === "/"){
return (num1/num2);
}else if(num2 === 0 && operand === "/"){
return (`Cannot divide by zero`);
}else if(operand === "%"){
return (num1%num2);
}else if(operand === "%"){
return (`Invalid operator`);
}else if(operand === "*"){
return (num1*num2);
}
}
console.log(calculator(15,340,"*"));

//11//


function isLeapYear(number){
if (number % 4 === 0  && number % 100 === 0 && number % 400 === 0){
return (true);
} 
return (false);
}
console.log(isLeapYear(2000))

//13//
function statement(x,y,z) {
    if (x>=y &&  x>=z) {
        if(y>z){
        alert(`${x},${y},${z}`);
        }else {
        alert(`${x},${z},${y}`);
        }
     }else if (y>=x &&  y>=z) {
        if(x>z){
        alert(`${y},${z},${x}`);
        }else {
        alert(`${y},${x},${z}`);
        }   
     }else if (z>=x &&  z>=y) {
        if(x>y){
        alert(`${z},${y},${x}`);
        }else {
        alert(`${z},${x},${y}`);
        }    
    } 
}  
statement(2,2,2)

//14//
function crewStatus(spaceSuitOn,shuttCabinReady){
if(spaceSuitOn && shuttCabinReady){
console.log("Crew Ready");
}else{
console.log("Crew Not Ready");
}
}

function computerStatusCode(value){
    if(value === 200){
    console.log("Please stand by. Computer is rebooting.");
    }else if(value === 400){
    console.log("Success! Computer online.");
    }else(alert(`Stable speed`))
    
    }
    computerStatusCode(400)

function shuttleSpeed(value){
    if(value >17500){
    alert("Escape velocity reached!");
    }else if(value <8000){
    alert("Cannot maintain orbit!");
    }else{
    console.log(`Stable speed`);
    }
    }
    shuttleSpeed(16000)

//15//
function conditionsOfColor(color){
    switch (color) {
        case "red":
            console.log("Red is the color of danger" );
        break;
        case "orange":
            console.log("Orange is the color of caution" );
        break;
        case "yellow":
            console.log("Orange is the color of caution" );
        break;
        case "green":
            console.log("Orange is the color of caution" );
        break;
        case "blue":
            console.log("blue is the color of caution" );
        break;
        case "purple":
            console.log("purple is the color of caution" );
        break;
        default:
        console.log("Invalid color" );
        break;
    }
}

conditionsOfColor("red")
