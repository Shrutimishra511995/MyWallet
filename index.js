document.addEventListener('DOMContentLoaded', function () {
    const balanceElement = document.getElementById('balance');
    const transactionList = document.getElementById('transaction-list');
    const sendButton = document.getElementById('send-button');
  
    sendButton.addEventListener('click', function () {
      const amount = parseFloat(document.getElementById('amount').value);
      const recipient = document.getElementById('recipient').value;
  
      if (isNaN(amount) || amount <= 0 || !recipient) {
        alert('Please enter a valid amount and recipient.');
        return;
      }
  
      // Update balance
      const currentBalance = parseFloat(balanceElement.textContent.replace('$', ''));
      const newBalance = currentBalance - amount;
      balanceElement.textContent = '$' + newBalance.toFixed(2);
  
      // Add transaction to list
      const transaction = `Sent $${amount.toFixed(2)} to ${recipient}`;
      const transactionItem = document.createElement('li');
      transactionItem.textContent = transaction;
      transactionList.appendChild(transactionItem);
  
      // Clear input fields
      document.getElementById('amount').value = '';
      document.getElementById('recipient').value = '';
    });
  });
  