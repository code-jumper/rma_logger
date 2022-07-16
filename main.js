
class RMA {
    constructor(customer, product, issue){
        this.customer = customer;
        this.product = product;
        this.issue = issue;
        this.sayCustomer = console.log("hello ")
    }
}
let array = [];
let newRMAForm = document.getElementById('newRMAForm');
let currentRMAsContainer = document.getElementById('currentRMAsContainer');
let addRMAButton = document.getElementById('addRMA');
addRMAButton.addEventListener('click', function(){
    let nextRMA = new RMA(
        newRMAForm[0].value, 
        newRMAForm[1].value, 
        newRMAForm[2].value);
    array.push(nextRMA);
    let addedContainer = document.createElement('div');
    let deleteRMAButton = document.createElement('button');
    deleteRMAButton.innerText = 'Delete RMA';
    deleteRMAButton.addEventListener('click', function(){
        ///Delete an RMA by clicking on it
        ///Deactive deletion by clicking button again
        ///Must implement removal of RMA in the array, too
        let index = array.indexOf(nextRMA);
        array.splice(index, 1);
        currentRMAsContainer.removeChild(addedContainer);
    })
    let addedRMA = document.createElement('form');
    addedRMA.setAttribute('class', 'addedRMA');
    let customerLabel = document.createElement('label');
    customerLabel.innerText = 'Customer: ';
    addedRMA.append(customerLabel);
    let customer = document.createElement('input');
    customer.name = 'customer';
    customer.value = newRMAForm[0].value;
    addedRMA.append(customer);
    let productLabel = document.createElement('label');
    productLabel.innerText = 'Product: ';
    addedRMA.append(productLabel);
    let product = document.createElement('input');
    product.name = 'product';
    product.value = newRMAForm[1].value;
    addedRMA.append(product);
    let issueLabel = document.createElement('label');
    issueLabel.innerText = 'Issue: ';
    addedRMA.append(issueLabel);
    let issue = document.createElement('input');
    issue.name = 'issue';
    issue.value = newRMAForm[2].value;
    addedRMA.append(issue);
    addedContainer.append(addedRMA);
    addedContainer.append(deleteRMAButton);
    currentRMAsContainer.append(addedContainer);
    console.log(array);
});
let i = 0;
let updateRMAsButton = document.getElementById('updateRMAs');
updateRMAsButton.addEventListener('click', function(){
    /// On click, check if there are any differences between stored
    /// array of RMAs and the current displayed values in the forms.
    /// If so, update the array with the new values
    /// To do: Add RMA stages input (either radio or checklist)
    for (i = 0; i<array.length; i++) {
        if (array[i].customer != document.forms[i+1].customer.value) {
            console.log('no match');
            console.log(array[i].customer + ', ' + document.forms[i+1].customer.value);
            array[i].customer = document.forms[i+1].customer.value;
            console.log(array[i].customer + ', ' + document.forms[i+1].customer.value);
        } else {
            console.log('match');
            console.log(array[i].customer + ', ' + document.forms[i+1].customer.value);
        }
    }
    for (i = 0; i<array.length; i++) {
        if (array[i].product != document.forms[i+1].product.value) {
            console.log('no match');
            console.log(array[i].product + ', ' + document.forms[i+1].product.value);
            array[i].product = document.forms[i+1].product.value;
            console.log(array[i].product + ', ' + document.forms[i+1].product.value);
        } else {
            console.log('match');
            console.log(array[i].product + ', ' + document.forms[i+1].product.value);
        }
    }
    for (i = 0; i<array.length; i++) {
        if (array[i].issue != document.forms[i+1].issue.value) {
            console.log('no match');
            console.log(array[i].issue + ', ' + document.forms[i+1].issue.value);
            array[i].issue = document.forms[i+1].issue.value;
            console.log(array[i].issue + ', ' + document.forms[i+1].issue.value);
        } else {
            console.log('match');
            console.log(array[i].issue + ', ' + document.forms[i+1].issue.value);
        }
    }
});