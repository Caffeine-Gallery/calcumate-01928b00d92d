import { backend } from 'declarations/backend';

window.calculate = async function(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers';
        return;
    }

    try {
        let result;
        switch (operation) {
            case 'add':
                result = await backend.add(num1, num2);
                break;
            case 'subtract':
                result = await backend.subtract(num1, num2);
                break;
            case 'multiply':
                result = await backend.multiply(num1, num2);
                break;
            case 'divide':
                result = await backend.divide(num1, num2);
                if (result === null) {
                    resultElement.textContent = 'Error: Division by zero';
                    return;
                }
                break;
        }
        resultElement.textContent = `Result: ${result}`;
    } catch (error) {
        resultElement.textContent = `Error: ${error.message}`;
    }
};
