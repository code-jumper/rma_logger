
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
    let addedRMA = document.createElement('div');
    let customer = document.createElement('p');
    customer.textContent = newRMAForm[0].value;
    addedRMA.append(customer);
    let product = document.createElement('p');
    product.textContent = newRMAForm[1].value;
    addedRMA.append(product);
    let issue = document.createElement('p');
    issue.textContent = newRMAForm[2].value;
    addedRMA.append(issue);
    currentRMAsContainer.append(addedRMA);
    console.log(array);
});

