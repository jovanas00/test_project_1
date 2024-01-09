const addBtn = document.querySelector('.add-clients-btn');
const modal = document.querySelector('.modal-div');
const deleteClientModal = document.querySelector('.delete-client-modal-div');
let names = [];
let brojac = 0;

addBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

const closeBtnModal = modal.querySelector('img');

closeBtnModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

    
const addBtnModal = modal.querySelector('.add-clients-btn');
addBtnModal.addEventListener('click', function() {
    brojac++;

    const tableDiv = document.querySelector('.table-rows');

    let noviID = '#'+brojac;
    const noviDiv = document.createElement('tr');
    noviDiv.setAttribute('class', 'table-row');
    noviDiv.setAttribute('id', brojac);
    tableDiv.appendChild(noviDiv);

    const name = modal.querySelector('.name-input');
    const email = modal.querySelector('.email-input');
    const phone = modal.querySelector('.phone-input');
    const company = modal.querySelector('.company-input');
    const country = modal.querySelector('.country-input');
    const zip = modal.querySelector('.zip-input');
    const address = modal.querySelector('.address-input');
    const apt = modal.querySelector('.apt-input');
    // if(name.value === "" || email.value === "" || phone.value === "" || company.value === "" || country.value === "" || 
    // zip.value === "" || address.value === "" || apt.value === "") {
    //     alert("Niste uneli sve podatke!");
    // }

    const idDiv = document.createElement('td');
    idDiv.innerText = noviID;
    idDiv.classList.add('table-cell');
    noviDiv.appendChild(idDiv);

    const nameEmail = document.createElement('td');
    nameEmail.classList.add('table-cell');
    noviDiv.appendChild(nameEmail);

    const nameDiv = document.createElement('div');
    nameDiv.innerText = name.value;
    const nameObject = {id: noviDiv.id, name: nameDiv.innerText};
    names.push(nameObject);
    nameEmail.appendChild(nameDiv);

    const emailDiv = document.createElement('div');
    emailDiv.innerText = email.value;
    nameEmail.appendChild(emailDiv);
    
    const phoneCountry = document.createElement('td');
    phoneCountry.classList.add('table-cell');
    noviDiv.appendChild(phoneCountry);

    const phoneDiv = document.createElement('div');
    phoneDiv.innerText = phone.value;
    phoneCountry.appendChild(phoneDiv);

    const countryDiv = document.createElement('div');
    countryDiv.innerText = country.value;
    phoneCountry.appendChild(countryDiv);

    const addressDiv = document.createElement('td');
    addressDiv.innerText = address.value;
    addressDiv.classList.add('table-cell');
    noviDiv.appendChild(addressDiv);

    const linksDiv = document.createElement('td');
    linksDiv.classList.add('table-cell');
    const link = document.createElement('div');
    link.innerText = "False";
    link.style.width = "40px"
    link.style.borderRadius = "0.5rem";
    if(link.innerText === "True")
    {
        link.style.backgroundColor = "#ECFDF3";
        link.style.color = "#027A48";
    }
    else
    {
        link.style.backgroundColor = "#FEF3F2";
        link.style.color = "#B42318";
    }
    linksDiv.appendChild(link);
    noviDiv.appendChild(linksDiv);

    const buttonsDiv = document.createElement('td');
    buttonsDiv.classList.add('table-cell');
    noviDiv.appendChild(buttonsDiv);

    const deleteBtn = document.createElement('img');
    deleteBtn.setAttribute('src', 'images/modal/delete.png');
    buttonsDiv.appendChild(deleteBtn);

    const editBtn = document.createElement('img');
    editBtn.setAttribute('src', 'images/modal/edit.png');
    buttonsDiv.appendChild(editBtn);

    name.value = ""; 
    email.value = ""; 
    phone.value = ""; 
    company.value = ""; 
    country.value = ""; 
    zip.value = ""; 
    address.value = "";  
    apt.value = "";

    modal.style.display = 'none';

    let numberOfClients = document.querySelector(".number-of-clients");
    let num = parseInt(numberOfClients.innerText);
    num++;
    numberOfClients.innerText = num.toString();

    deleteBtn.addEventListener('click', function() {
        deleteClientModal.id = noviDiv.id;
        deleteClientModal.style.display = "flex";
    });
});

const clientInfoBtn = document.querySelector(".client-info-button");
const pageInfo = document.querySelector(".page-info");
const clientInfo = document.querySelector(".client-info");

clientInfoBtn.addEventListener('click', function() {
    clientInfoBtn.style.pointerEvents = 'none';
    pageInfo.style.display = 'none';

    const pageNavigation = document.querySelector(".navigation");
    const pageTitle = document.querySelector(".page-title");
    pageTitle.style.color = "#667085";
    
    const newTitle = document.createElement('li');
    newTitle.innerText = "Olivia Rhye";
    newTitle.classList.add("page-title");
    
    pageNavigation.appendChild(newTitle);
    clientInfo.style.display = 'flex';

    pageTitle.addEventListener('click', function() {
        pageNavigation.removeChild(newTitle);
        pageInfo.style.display = 'flex';
        clientInfo.style.display = 'none';
        pageTitle.style.color = "#6941C6";
        clientInfoBtn.style.pointerEvents = 'auto';
    });
});

const deleteClientCancelBtn = document.querySelector('.delete-client-cancel-btn');
deleteClientCancelBtn.addEventListener('click', function() {
    deleteClientModal.style.display = "none";
});

const deleteClientDeleteBtn = document.querySelector('.delete-client-delete-btn');
deleteClientDeleteBtn.addEventListener('click', function() {
    const tableDiv = document.querySelector('.table-rows');
    let tableRow = document.getElementById(deleteClientModal.id);
    // console.log(tableRow);
    tableDiv.removeChild(tableRow);
    
    deleteClientModal.style.display = "none";

    let numberOfClients = document.querySelector(".number-of-clients");
    let num = parseInt(numberOfClients.innerText);
    num--;
    numberOfClients.innerText = num.toString();
});

const inputTableDiv = document.querySelector('.table-rows');

const pageSearch = document.querySelector('.page-search');
pageSearch.addEventListener('input', function() {
    
    const tableChildren = inputTableDiv.innerHTML;
    console.log(tableChildren);
    let filter = pageSearch.value.toUpperCase();
    names.forEach(n => {
        if(n.name.toUpperCase() === filter)
        {
            let row = document.getElementById(`${n.id}`);
            // inputTableDiv.replaceChildren();
            inputTableDiv.appendChild(row);
        }
        else
        {
            inputTableDiv.replaceChildren();
            inputTableDiv.innerHTML = tableChildren;
        }
    });
});