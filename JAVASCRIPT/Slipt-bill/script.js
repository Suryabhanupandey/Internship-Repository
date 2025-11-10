function calculateSplit() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tip = parseFloat(document.getElementById('tip').value || 0);
  const people = parseInt(document.getElementById('people').value);

    if (isNaN(bill) || isNaN(people) || people <= 0) {
    document.getElementById('result').textContent = "Please enter valid inputs.";
    return;
  }

  const tipAmount = (tip / 100) * bill;
  const total = bill + tip;
  const perPerson = total /people;

  document.getElementById('result').textContent = `Each person pays: ₹${perPerson.toFixed(2)}`;
}
