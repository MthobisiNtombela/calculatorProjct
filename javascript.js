const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const chars = ["%", "/", "*", "-", "+", "="];

var output = "";
const calculator = (btnValue) =>{
    if(btnValue =="=" && btnValue !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue=="AC"){
        output = "";
    }
    else if(btnValue=="DEL"){
        output = output.toString().slice(0, -1);
    }
    else{
        if(output == "" && chars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}
buttons.forEach((button)=>{
    button.addEventListener("click", (e) => calculator(e.target.dataset.
    value))
})