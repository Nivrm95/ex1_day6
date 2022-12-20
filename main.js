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

7//
function prompt(){
let person = window.prompt("Please enter your name");
  if (person != null) {
  "Hello frind";
  }else{
  document.write(`Hello ${person}`);
  }
}
prompt();

//7//
let person = prompt("Please enter your name","Friend");
document.write(`Hello ${person},Welcome!`);

//8//
function result(namber){
    if(namber %2 ===1 && namber>0 ){
    console.log ("Positive and odd")
    }else if(namber %2 ===1 && namber<0 ){
    console.log ("Negative and odd")
    }else if(namber %2 ===0 && namber<0 ){
    console.log ("Negative and even")
    }else if(namber %2 ===0 && namber>0 ){
    console.log ("Positive and even")
    }else{
    console.log ("0")
    }
}
result(0)
