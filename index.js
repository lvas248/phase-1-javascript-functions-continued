// code your solution here

function saturdayFun(string="roller-skate"){
    return "This Saturday, I want to " + string + "!";
} 

const mondayWork = function(string="go to the office"){
    return `This Monday, I will ${string}.`
}

const wrapAdjective = function(string="*"){
    return function(para="special"){
        return `You are ${string}${para}${string}!`;
    }
    
}