
let family = {
    revenue: [20, 50],
    expenditure: [10, 25, 200]
}

function sum(array) {
    let total = 0;

    for (const value of array) {
        total += value;
    }
    
    return total;
}

function calculateBalance() {
    const calculateRevenue = sum(family.revenue);
    const calculateExpenditure = sum(family.expenditure);
    
    const total = calculateRevenue - calculateExpenditure;

    if (total > 0) {
        console.log(`Saldo positivo de ${total.toFixed(2)} reais`);
    } else if (total < 0) {
        console.log(`Saldo negativo de ${total.toFixed(2)} reais`);
    } else if (total == 0){
        console.log("Não houve lucro nem prejuízo");
    } else {
        console.log("Valores fornecidos são inválidos");
    }

    return total;
}

calculateBalance()
