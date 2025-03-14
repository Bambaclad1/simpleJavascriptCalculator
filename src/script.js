let input = '';
let otherInput = "";
let answer = [];
let executeSecond = false;
let addNumbersBool = false
let substractNumbersBool = false;
let divideNumbersBool = false;
let multiplyNumbersBool = false;

function saveInput(number){
    if (!executeSecond){
        input += number;
    } else {
        otherInput += number;
    }
    console.log(`input one is ${input} and input two is ${otherInput}`);
    document.getElementById("htmlinput").innerHTML = `Input: value 1: ${input} | value 2: ${otherInput}`
    number = "";
}

function clickedAdd(){
    if(addNumbersBool){
        alert("no. go click the =, you reached your limit.");
    } else {
        executeSecond = true;
        addNumbersBool = true;
    }
}

function clickedSubstract(){
    if(substractNumbersBool){
        alert("no. go click the =, you reached your limit.");
    } else {
        executeSecond = true;
        substractNumbersBool = true;
    }
}

function clickedDivide(){
    if(divideNumbersBool){
        alert("no. go click the =, you reached your limit.");
    } else {
        executeSecond = true;
        divideNumbersBool = true;
    }
}

function clickedMultiply(){
    if(multiplyNumbersBool){
        alert("no. go click the =, you reached your limit.");
    } else {
        executeSecond = true;
        multiplyNumbersBool = true;
    }
}

function addNumbers(input1, input2){
    const answer = input1 + input2;
    return answer;
}

function subtractNumbers(input1, input2){
    const answer = input1 - input2;
    return answer;
}

function multiplyNumbers(input1, input2){
    const answer = input1 * input2;
    return answer;
}

function divideNumbers(input1, input2){
    const answer = input1 / input2;
    return answer;
}

function clickedEquals(){
    if(!input || !otherInput){
        alert("You are calculating nothing or zero?!");
    } else {
        let answer;
        if(addNumbersBool){
            answer = addNumbers(parseFloat(input), parseFloat(otherInput));
            addNumbersBool = false;
        } else if (substractNumbersBool) {
            answer = subtractNumbers(parseFloat(input), parseFloat(otherInput));
            substractNumbersBool = false;
        } else if  (divideNumbersBool) {
            answer = divideNumbers(parseFloat(input), parseFloat(otherInput));
            divideNumbersBool = false;
        } else if (multiplyNumbersBool) {
            answer = multiplyNumbers(parseFloat(input), parseFloat(otherInput));
            multiplyNumbersBool = false;
        }
        document.getElementById("answer").innerHTML = `Answer: ${answer}`;
        executeSecond = false;
        number = 0;
        otherInput = 0;
    }
    

}


