const form = document.getElementById('form');
var inputs = document.querySelectorAll('input');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validate()) {
        inputs.forEach(input => input.value = '');
    }

})

function validate() {

    var returnvalname = false;
    var returnvalemail = false;
    var returnvalcontact = false;
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var contact = document.getElementById('contactInput').value;

    var name_format = /^[A-Za-z ]+$/;
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var contact_format = /^\d{10}$/;



    if (name_format.test(name)) {
        returnvalname = true;
    } else {
        returnvalname = false;
    }

    if (mail_format.test(email)) {
        returnvalemail = true;
    } else {
        returnvalemail = false;
    }
    if (contact == "") {
        returnvalcontact = true;
    } else {
        if (contact_format.test(contact)) {
            returnvalcontact = true;
        } else {
            returnvalcontact = false;
        }
    }


    if (!returnvalname && !returnvalemail && !returnvalcontact) {
        alert("enter valid name, contact and email");
        document.getElementById('nameInput').value = "";

        document.getElementById('emailInput').value = "";
        document.getElementById('contactInput').value = "";

    } else if (!returnvalname && !returnvalemail) {
        alert("please enter valid  name and email");
        document.getElementById('nameInput').value = "";
        document.getElementById('emailInput').value = "";


    } else if (!returnvalname && !returnvalcontact) {
        alert("please enter valid name and contact");
        document.getElementById('nameInput').value = "";
        document.getElementById('contactInput').value = "";

    } else if (!returnvalcontact && !returnvalemail) {
        alert("please enter valid email and contact");
        document.getElementById('emailInput').value = "";
        document.getElementById('contactInput').value = "";

    } else if (!returnvalname) {
        alert("please enter valid name");
        document.getElementById('nameInput').value = "";
        document.getElementById('nameInput').focus();

    } else if (!returnvalemail) {
        alert("please enter valid email");
        document.getElementById('emailInput').value = "";
        document.getElementById('emailInput').focus();

    } else if (!returnvalcontact) {
        alert("please enter valid contact");
        document.getElementById('contactInput').value = "";
        document.getElementById('contactInput').focus();
    }

    if (returnvalemail && returnvalcontact && returnvalname) {
        setData();
        setTable();
        return true;


    }
}

function setData() {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var contact = document.getElementById('contactInput').value;
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);
    localStorage.setItem("usercontact", contact);

}

function setTable() {
    const tableBody = document.getElementById('tableBody');
    const tr = document.createElement("tr");
    const td1 = document.createElement('td');
    const nameNode = document.createTextNode(localStorage.getItem("username"));
    td1.appendChild(nameNode);
    const td2 = document.createElement('td');
    const emailNode = document.createTextNode(localStorage.getItem("useremail"));
    td2.appendChild(emailNode);
    const td3 = document.createElement('td');
    const contactNode = document.createTextNode(localStorage.getItem("usercontact"));
    td3.appendChild(contactNode);
    tr.append(td1, td2, td3);
    tableBody.append(tr);

}