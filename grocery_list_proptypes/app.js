function ListItem(name, price, amount) {
  this.name = name;
  this.price = price;
  this.amount = amount;
}

function UI() {}

UI.prototype.addItemToList = function(item) {
  const groceryList = document.getElementById('grocery-list');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.amount}</td>
    <td><a href='#'>X</a></td>
  `;

  groceryList.appendChild(row);
}

UI.prototype.clearFields = function() {
  document.getElementById('item').value = '';
  document.getElementById('price').value = '';
  document.getElementById('amount').value = '';
}

UI.prototype.showAlert = function(msg) {
  const alert = document.createElement('h2');
  alert.id = 'alert';
  alert.textContent = msg;
  
  const title = document.querySelector('h1');
  
  const container = document.getElementById('container');
  container.insertBefore(alert, title);

  setTimeout(function() {
    document.getElementById('alert').remove()
  }, 2000);
}

UI.prototype.deleteItem = function(target) {
  target.parentElement.parentElement.remove();
}

document.getElementById('button').addEventListener('click', function(e) {
  const name = document.getElementById('item').value;
        price = document.getElementById('price').value;
        amount = document.getElementById('amount').value;

  const listItem = new ListItem(name, price, amount);

  const ui = new UI();

  if(name === '' || price === '' || amount === '') {
    ui.showAlert('Please provide an input');
  } else {
    ui.addItemToList(listItem);

    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('grocery-list').addEventListener('click', function(e) {
  const ui = new UI();

  ui.deleteItem(e.target);

  e.preventDefault();
});