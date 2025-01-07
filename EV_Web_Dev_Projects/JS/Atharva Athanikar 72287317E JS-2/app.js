// BankAccount class implementation
class BankAccount {
    constructor(accountName, accountNumber, email, address, initialDeposit) {
      this.accountName = accountName;
      this.accountNumber = accountNumber;
      this.email = email;
      this.address = address;
      this.balance = parseFloat(initialDeposit) || 0;
    }
  
    // Deposit method
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        return true;
      }
      return false;
    }
  
    // Withdraw method
    withdraw(amount) {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        return true;
      }
      return false;
    }
  
    // Check balance
    checkBalance() {
      return this.balance;
    }
  
    // Get account details
    getAccountDetails() {
      return {
        accountName: this.accountName,
        accountNumber: this.accountNumber,
        email: this.email,
        address: this.address,
        balance: this.balance
      };
    }
  }
  let account = null;
  const createAccountBtn = document.getElementById('create-account-btn');
  const accountForm = document.getElementById('account-form');
  const submitAccountBtn = document.getElementById('submit-account-btn');
  const accountActions = document.getElementById('account-actions');
  const accountNameDisplay = document.getElementById('account-name-display');
  const accountNumberDisplay = document.getElementById('account-number-display');
  const accountEmailDisplay = document.getElementById('account-email-display');
  const accountAddressDisplay = document.getElementById('account-address-display');
  const depositBtn = document.getElementById('deposit-btn');
  const withdrawBtn = document.getElementById('withdraw-btn');
  const checkBalanceBtn = document.getElementById('check-balance-btn');
  const balanceDisplay = document.getElementById('balance');
  const transactionSection = document.getElementById('transaction-section');
  const confirmTransactionBtn = document.getElementById('confirm-transaction-btn');
  const cancelTransactionBtn = document.getElementById('cancel-transaction-btn');
  const amountInput = document.getElementById('amount');
  const transactionTitle = document.getElementById('transaction-title');
  
  // Account Creation
  createAccountBtn.addEventListener('click', () => {
    accountForm.style.display = 'block';
  });
  
  // Submit Account Details
  submitAccountBtn.addEventListener('click', () => {
    const accountName = document.getElementById('account-name').value;
    const accountNumber = document.getElementById('account-number').value;
    const accountEmail = document.getElementById('account-email').value;
    const accountAddress = document.getElementById('account-address').value;
    const initialDeposit = document.getElementById('initial-deposit').value;
    if (accountName && accountNumber && accountEmail && accountAddress && initialDeposit) {
      account = new BankAccount(accountName, accountNumber, accountEmail, accountAddress, initialDeposit);
      const accountDetails = account.getAccountDetails();
      accountNameDisplay.textContent = accountDetails.accountName;
      accountNumberDisplay.textContent = accountDetails.accountNumber;
      accountEmailDisplay.textContent = accountDetails.email;
      accountAddressDisplay.textContent = accountDetails.address;
      balanceDisplay.textContent = `Balance: $${accountDetails.balance}`;
      accountForm.style.display = 'none';
      accountActions.style.display = 'block';
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  // Handle Deposit Button
  depositBtn.addEventListener('click', () => {
    transactionTitle.textContent = "Enter amount of money to deposit into your account"; // Update title for deposit
    transactionSection.style.display = 'block';
    confirmTransactionBtn.onclick = () => {
      const amount = parseFloat(amountInput.value);
      if (amount > 0 && account.deposit(amount)) {
        balanceDisplay.textContent = `Balance: $${account.checkBalance()}`;
        transactionSection.style.display = 'none';
        amountInput.value = ''; 
      } else {
        alert("Invalid deposit amount.");
      }
    };
  });
  
  // Handle Withdraw Button
  withdrawBtn.addEventListener('click', () => {
    transactionTitle.textContent = "Enter amount of money to withdraw from your account"; // Update title for withdrawal
    transactionSection.style.display = 'block';
    confirmTransactionBtn.onclick = () => {
      const amount = parseFloat(amountInput.value);
      if (amount > 0 && account.withdraw(amount)) {
        balanceDisplay.textContent = `Balance: $${account.checkBalance()}`;
        transactionSection.style.display = 'none';
        amountInput.value = '';
      } else {
        alert("Insufficient balance or invalid withdrawal amount.");
      }
    };
  });
  
  // Check Balance
  checkBalanceBtn.addEventListener('click', () => {
    alert(`Current Balance: $${account.checkBalance()}`);
  });
  
  // Cancel Transaction
  cancelTransactionBtn.addEventListener('click', () => {
    transactionSection.style.display = 'none';
    amountInput.value = '';
  });