
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
    addedContainer.setAttribute('id', 'addedContainer');
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
    customerLabel.htmlFor = 'customer';
    customerLabel.innerText = 'Customer: ';
    addedRMA.append(customerLabel);
    let customer = document.createElement('input');
    customer.name = 'customer';
    customer.value = newRMAForm[0].value;
    addedRMA.append(customer);
    let productLabel = document.createElement('label');
    productLabel.htmlFor = 'product';
    productLabel.innerText = 'Product: ';
    addedRMA.append(productLabel);
    let product = document.createElement('input');
    product.name = 'product';
    product.value = newRMAForm[1].value;
    addedRMA.append(product);
    let issueLabel = document.createElement('label');
    issueLabel.htmlFor = 'issue';
    issueLabel.innerText = 'Issue: ';
    addedRMA.append(issueLabel);
    let issue = document.createElement('input');
    issue.name = 'issue';
    issue.value = newRMAForm[2].value;
    addedRMA.append(issue);
    addedContainer.append(addedRMA);
    ///Checkboxes for stages of RMA completed
    let check1 = document.createElement('input');
    check1.setAttribute('type', 'checkbox');
    check1.id = 'startRMA';
    let check1Label = document.createElement('label');
    check1Label.htmlFor = 'startRMA';
    check1Label.innerText = 'Process initiated with distributor';

    let check2 = document.createElement('input');
    check2.setAttribute('type', 'checkbox');
    check2.id = 'creditReceived';
    let check2Label = document.createElement('label');
    check2Label.htmlFor = 'creditReceived';
    check2Label.innerText = 'Exchange/Credit received by ECO';

    let check3 = document.createElement('input');
    check3.setAttribute('type', 'checkbox');
    check3.id = 'customerExchanged';
    let check3Label = document.createElement('label');
    check3Label.htmlFor = 'customerExchanged';
    check3Label.innerText = 'Exchanged/Credit given to customer';

    let check4 = document.createElement('input');
    check4.setAttribute('type', 'checkbox');
    check4.id = 'completed';
    let check4Label = document.createElement('label');
    check4Label.htmlFor = 'completed';
    check4Label.innerText = 'Completed';
    ///End of checkboxes

    //Implement check-divs as a function?
    // function someDiv() {
    //     document.createElement('div');
    // }
    // let someDiv1 = someDiv();

    // addedRMA.append(someDiv1);
    // someDiv1.append(check1);
    // someDiv1.append(check1Label);
    let div1 = document.createElement('span');
    let div2 = document.createElement('span');
    let div3 = document.createElement('span');
    let div4 = document.createElement('span');
    div1.setAttribute('class', 'checkDiv');
    div2.setAttribute('class', 'checkDiv');
    div3.setAttribute('class', 'checkDiv');
    div4.setAttribute('class', 'checkDiv');

    div1.append(check1);
    div1.append(check1Label);
    addedRMA.append(div1);

    div2.append(check2);
    div2.append(check2Label);
    addedRMA.append(div2);

    div3.append(check3);
    div3.append(check3Label);
    addedRMA.append(div3);

    div4.append(check4);
    div4.append(check4Label);
    addedRMA.append(div4);

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

///Add functionality : add dates (start date, etc.) and upon completion, have a timer start and on countdown remove that rma