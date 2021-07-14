let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterTransactionid = document.getElementById("enterTransactionid").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   

   // Money transfer concept
   if (enterAmount > 15000) {
      alert("Insufficient Balance!")
   } else {
      var findUserBankAccount = enterTransactionid + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Your transaction is successful!!  
      ₹${enterAmount} is sent to ${enterTransactionid}`)

      // Transaction history concept
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹${enterAmount} is sent to recepient with Transaction-id ${enterTransactionid} on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}