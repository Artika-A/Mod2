const billInput = document.getElementById("billInput");
// const tipInput = document.getElementById("tipInput");
const tipSelect = document.getElementById("tipSelect")
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");


button.addEventListener("click", function () {
   const bill = parseFloat(billInput.value);
   const tipPercent = parseFloat(tipSelect.value);
 
   if (isNaN(bill) || isNaN(tipPercent)) {
     result.textContent = "Please enter valid numbers.";
     return;
   }
 
   const tip = bill * (tipPercent / 100);
   const total = bill + tip;
 
   result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(2)}`;
 });

 // Bonus challenge 1

   if(billInput.value == "" || tipSelect.value == ""){
      button.disabled = true
   }

   billInput.addEventListener("keyup", function(){
    if(billInput.value == "" || tipSelect.value == ""){
      button.disabled = true
    }else{
      button.disabled = false
      calculateAndShowTotal()
    }
    })

    // Bonus challenge 3


    function calculateAndShowTotal(){
        const bill = parseFloat(billInput.value);
        const tipPercent = parseFloat(tipSelect.value);

        const tip = bill * (tipPercent / 100);
        const total = bill + tip;

       result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(2)}`;
    }
