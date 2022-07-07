
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
    let addedRMA = document.createElement('form');
    addedRMA.setAttribute('class', 'addedRMA');
    let customerLabel = document.createElement('label');
    customerLabel.innerText = 'Customer: ';
    addedRMA.append(customerLabel);
    let customer = document.createElement('input');
    customer.value = newRMAForm[0].value;
    addedRMA.append(customer);
    let productLabel = document.createElement('label');
    productLabel.innerText = 'Product: ';
    addedRMA.append(productLabel);
    let product = document.createElement('input');
    product.value = newRMAForm[1].value;
    addedRMA.append(product);
    let issueLabel = document.createElement('label');
    issueLabel.innerText = 'Issue: ';
    addedRMA.append(issueLabel);
    let issue = document.createElement('input');
    issue.value = newRMAForm[2].value;
    addedRMA.append(issue);
    currentRMAsContainer.append(addedRMA);
    console.log(array);
});

