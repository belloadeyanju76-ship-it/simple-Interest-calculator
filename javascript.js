function calculateInterest() {
    let principal = Number(document.getElementById('principal').value);
    let duration = Number(document.getElementById('duration').value);
    let rate = Number(document.getElementById('rate').value);
    let Interestcalculation = (principal * duration * rate )/100;
    let totalpay = principal + Interestcalculation;
    let result = 'Your interest is ' + Interestcalculation;
    let payment  = 'Your total payment is ' + totalpay;
    document.getElementById('result').innerHTML = result
    document.getElementById('total').innerHTML = payment
}
