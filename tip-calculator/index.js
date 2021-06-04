function calculateTotalBill(){
    const bill = document.getElementById('bill').value
    const tip = document.getElementById('tip').value
    console.log(bill)
    console.log(tip)
    const totalBill = document.getElementById('total-bill')
    totalBill.value = (parseInt(bill) / 100) * parseInt(tip) + parseInt(bill)
}

