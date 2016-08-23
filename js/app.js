$(document).ready(function() {

    $('span').click(function() {
        if ($(this).attr('id') === 'clear') {
            location.reload();
        } else if ($(this).attr('id') === 'equals') {
            calculate();
        } else {
            let input = $(this).text();
            $('#screen').append(input);
        }
    })

    function calculate() {
        let screenInput = $('#screen').text();
        var operator;
        var result;
        if (screenInput.includes('+')) {
            operator = '+';
        }
        if (screenInput.includes('-')) {
            operator = '-';
        }
        if (screenInput.includes('÷')) {
            operator = '÷';
        }
        if (screenInput.includes('*')) {
            operator = '*';
        }

        let firstNum = parseInt(screenInput.substr(0, screenInput.indexOf(operator)));
        let secondNum = parseInt(screenInput.substr(screenInput.indexOf(operator) + 1,
            screenInput.length - (screenInput.indexOf(operator) + 1)));

        if (operator === '+') {
            result = firstNum + secondNum;
            check(result);
        } else if (operator === '-') {
            result = firstNum - secondNum;
            check(result);
        } else if (operator === 'x') {
            result = firstNum * secondNum;
            check(result);
        } else if (operator === '÷') {
            result = firstNum / secondNum;
            check(result);
        } else {
            $('#screen').text(result);
        }

        function check(result) {
            if (screenInput !== firstNum + operator + secondNum || isNaN(result) || result === Infinity || result === undefined) {
                $('#screen').text('ERROR');
            } else {
                $('#screen').text(result);
            }
        }
    };
});
