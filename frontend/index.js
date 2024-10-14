import { backend } from 'declarations/backend';

async function calculate(operation) {
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
        updateHistory();
    } catch (error) {
        resultElement.textContent = `Error: ${error.message}`;
    }
}

async function updateHistory() {
    const historyList = document.getElementById('historyList');
    const history = await backend.getHistory();
    historyList.innerHTML = '';
    history.forEach(([x, y, op, result]) => {
        const li = document.createElement('li');
        li.textContent = `${x} ${op} ${y} = ${result}`;
        historyList.appendChild(li);
    });
}

async function clearHistory() {
    await backend.clearHistory();
    updateHistory();
}

function shareResult() {
    const result = document.getElementById('result').textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Calculator Result',
            text: result
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Web Share API not supported in your browser');
    }
}

window.calculate = calculate;
window.clearHistory = clearHistory;
window.shareResult = shareResult;

// Initial history update
updateHistory();
