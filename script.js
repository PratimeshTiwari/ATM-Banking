class Bank {
    constructor(balance) {
      this.balance = Number(amount);
    }
    deposit(amount) {
      return this.balance += Number(amount);
    }
    withdraw(amount) {
      if (this.balance < amount) {
        console.log("Not enough balance to withdraw");
      }
      else {
        return this.balance -= Number(amount);
      }
  
    }
  }
  
  const account1 = new Bank(100);
  // console.log(account1.balance);
  // account1.deposit(100);
  // console.log(account1.balance);
  // account1.withdraw(200);
  // console.log(account1.balance);
  
  const btn1 = document.getElementById('btn1');
  const balDiv1 = document.getElementById('d1');
  
  const depS = document.getElementById('dep');
  const btn2 = document.getElementById('btn2');
  const balDiv2 = document.getElementById('d2');
  
  const witS = document.getElementById('wit');
  const btn3 = document.getElementById('btn3');
  const balDiv3 = document.getElementById('d3');
  
  btn1.onclick = () => {
    balDiv1.innerHTML = `<p>${account1.balance}</p>`
  }
  
  btn2.onclick = () => {
    account1.deposit(depS.value);
    balDiv2.innerHTML = `<p>${account1.balance}</p>`
  }
  
  btn3.onclick = () => {
    account1.withdraw(witS.value);
    balDiv3.innerHTML = `<p>${account1.balance}</p>`
  }
  
  