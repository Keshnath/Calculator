var buttons = document.getElementsByClassName("button");
var display = document.getElementById("container");
var operand1 = 0;
var operand2 = null ;
var operator = null ;

for (var i = 0 ; i < buttons.length ; i++){

    buttons[i].addEventListener('click',function()
    {
        var value = this.getAttribute('data-value');

        if (value == "+"|| value == "-" || value == "*" || value == "/" || value == "%")
        {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.textContent = "";

        }
        else if (value == "CE")
        {
            display.textContent  = "";

        }
        
        else if (value == "C")
        {
            display.textContent = parseInt(parseFloat(display.textContent) / 10) ;
        }
        // else if (value == "-/+")
        // {
        //     display.textContent = "-" + parseFloat(display.textContent) ;
        // }
        else if (value == ".")
        {
            display.textContent += ".";
        }
        else if (value == "=")
        {
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + " " + operator + " " + operand2);
            display.textContent = "";
            display.textContent = result;
                        
        }
        else {
            display.textContent += value;
        }

    })





}