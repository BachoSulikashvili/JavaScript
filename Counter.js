var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');

for (var i = 0; i < incrementButton.length; i++) {
    var button = incrementButton[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;

        getTotal();
    })
}

for (var i = 0; i < decrementButton.length; i++) {
    var button = decrementButton[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        
        if (newValue >= 0) {
            input.value = newValue;
        }
        else {
            input.value = 0;
        }

        getTotal();
    })
}

function getTotal() {
    var arr = document.querySelectorAll('.input-filed');
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if(parseInt(arr[i].value)) {
            total += parseInt(arr[i].value);
        }
    }
    document.getElementById('total').value = total;
}