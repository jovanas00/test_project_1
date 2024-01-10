// localStorage.setItem('isLogedIn', false);
// localStorage.setItem('email', 'olivia@untitledui.com');
// localStorage.setItem('password', 'olivia123');

// const logInBtn = document.querySelector('.log-in');
// logInBtn.addEventListener('click', function() {
//     check();
// })

// function check() {
//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');
//     const isLogedIn = localStorage.getItem('isLogedIn');

//     const userEmail = document.querySelector('.user-email');
//     const userPassword = document.querySelector('.user-password');

//     if(userEmail.value !== storedEmail || userPassword.value !== storedPassword) {
//         alert("Netacni podaci");
//     }
//     else if(isLogedIn){
//         alert("Vec ste ulogovani!");
//     }
//     else
//     {
//         localStorage.getItem('isLogedIn', true);
//         window.location = 'index.html';
//     }
// }

const logOut = document.querySelector('.sidebar-button');
logOut.addEventListener('click', function() {
    localStorage.setItem('isLogedIn', false);
    window.location = 'login.html';
});

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
    modal.querySelector('.name-input').value = "";
    modal.querySelector('.email-input').value = "";
    modal.querySelector('.phone-input').value = "";
    modal.querySelector('.company-input').value = "";
    modal.querySelector('.country-input').value = "";
    modal.querySelector('.zip-input').value = "";
    modal.querySelector('.address-input').value = "";
    modal.querySelector('.apt-input').value = "";
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
    const companyValue = company.value;
    const country = modal.querySelector('.country-input');
    const zip = modal.querySelector('.zip-input');
    const zipValue = zip.value;
    const address = modal.querySelector('.address-input');
    const apt = modal.querySelector('.apt-input');
    const aptValue = apt.value;
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
    nameDiv.classList.add('name-column');
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
    if(link.innerText === "True" || link.innerText === "Active")
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

    deleteBtn.addEventListener('click', function() {
        deleteClientModal.id = noviDiv.id;
        deleteClientModal.style.display = "flex";
    });

    editBtn.addEventListener('click', function() {
        openEditModal(noviDiv.id, nameDiv.innerText, emailDiv.innerText, phoneDiv.innerText, companyValue, countryDiv.innerText, zipValue, addressDiv.innerText, aptValue);
    })

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
});

function openEditModal(rowId, name, email, phone, company, country, zip, address, apt) {
    modal.style.display = 'flex';

    modal.querySelector('.name-input').value = name;
    modal.querySelector('.email-input').value = email;
    modal.querySelector('.phone-input').value = phone;
    modal.querySelector('.company-input').value = company;
    modal.querySelector('.country-input').value = country;
    modal.querySelector('.zip-input').value = zip;
    modal.querySelector('.address-input').value = address;
    modal.querySelector('.apt-input').value = apt;

    const currentRow = document.getElementById(rowId);
    const rowCells = currentRow.cells;
    console.log(rowCells);
    
    modal.querySelector('.add-clients-btn').addEventListener('click', function() {
        rowCells[1] = modal.querySelector('.name-input').value;
        // rowCells[1] =  modal.querySelector('.email-input').value;
        rowCells[2] =  modal.querySelector('.phone-input').value;
        // rowCells[1] =  modal.querySelector('.email-input').value;

        modal.querySelector('.name-input').value = "";
        modal.querySelector('.email-input').value = "";
        modal.querySelector('.phone-input').value = "";
        modal.querySelector('.company-input').value = "";
        modal.querySelector('.country-input').value = "";
        modal.querySelector('.zip-input').value = "";
        modal.querySelector('.address-input').value = "";
        modal.querySelector('.apt-input').value = "";
        
        modal.style.display = 'none';
    });
}

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
    let filter = pageSearch.value.toUpperCase();
    const tableRows = document.querySelectorAll('.table-rows .table-row');
    tableRows.forEach(row => {
        const nameColumn = row.querySelector('.name-column');
        if(nameColumn)
        {
            const nameText = nameColumn.textContent.toUpperCase();
            if(nameText.includes(filter))
                row.style.display = '';
            else
                row.style.display = 'none';
        }
    });

    if(!filter) {
        tableRows.forEach(row => {
            row.style.display = '';
        })
    }
});

const newLinkBtn = document.querySelector('.new-link-btn');
const newLinkModal = document.querySelector('.new-link-modal-div');
const accessListModal = document.querySelector('.access-list-modal-div');
const closeBtnAccessList = accessListModal.querySelector('img');

newLinkBtn.addEventListener('click', function() {
    newLinkModal.style.display = 'flex';
});

const closeBtn = newLinkModal.querySelector('img');

closeBtn.addEventListener('click', function() {
    newLinkModal.style.display = 'none';
});

const sendLinkBtn = newLinkModal.querySelector('.send-link-btn');
let linkBrojac = 0;

sendLinkBtn.addEventListener('click', function() {
    linkBrojac++;

    const tableDiv = document.querySelector('.table-rows-links');

    let noviID = '#'+linkBrojac;
    const noviDiv = document.createElement('tr');
    noviDiv.setAttribute('class', 'table-row');
    noviDiv.setAttribute('id', linkBrojac);
    tableDiv.appendChild(noviDiv);

    const idDiv = document.createElement('td');
    idDiv.innerText = noviID;
    idDiv.classList.add('table-cell');
    noviDiv.appendChild(idDiv);

    const issuedBy = document.createElement('td');
    issuedBy.classList.add('table-cell');
    noviDiv.appendChild(issuedBy);
    issuedBy.innerText = "John Malkovich";

    const issueDate = document.createElement('td');
    issueDate.classList.add('table-cell');
    noviDiv.appendChild(issueDate);
    issueDate.innerText = "22.08.2023";

    const radioGroup1 = newLinkModal.querySelector('.radio-group1');
    console.log(radioGroup1);

    const timeLimitation = newLinkModal.querySelector('.time-limitation'); 
    const accessLimitation = newLinkModal.querySelector('.access-limitation');
    const expirationUnlimited = newLinkModal.querySelector('.expiration-unlimited');
    const date = document.querySelector('.select-date'); 
    const dateValue = date.value;
    const time = document.querySelector('.select-time-input');

    const expiration = document.createElement('td');
    expiration.classList.add('table-cell');
    noviDiv.appendChild(expiration);

    if(timeLimitation.checked)
    {
        const date1 = new Date(dateValue);
        const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        expiration.innerText = `${date1.getDay()}.${months[date1.getMonth()]}.${date1.getFullYear()}.`;
    }
    if(accessLimitation.checked)
        expiration.innerText = "Access limitation";
    if(expirationUnlimited.checked)
        expiration.innerText = "Unlimited";

    const projectAccessLimitation = newLinkModal.querySelector('.project-access-limitation');
    // console.log(projectAccessLimitation);
    const onlySelected = newLinkModal.querySelector('.only-selected');
    const selectTime = newLinkModal.querySelector('.select-time'); 

    const projectAccess = document.createElement('td');
    projectAccess.classList.add('table-cell');
    noviDiv.appendChild(projectAccess);

    if(projectAccessLimitation.checked)
        projectAccess.innerText = "Access limitation";
    if(onlySelected.checked)
    {
        
        projectAccess.innerText = selectTime.value;
        projectAccess.style.textDecoration = "underline";
        projectAccess.style.color = "#6941C6";
        projectAccess.style.cursor = "pointer";
        projectAccess.addEventListener('click', function() {
            accessListModal.style.display = 'flex';
        });
    }

    const downloading = document.createElement('td');
    downloading.classList.add('table-cell');
    noviDiv.appendChild(downloading);

    const link = document.createElement('div');
    link.innerText = "False";
    link.style.width = "60px"
    link.style.borderRadius = "0.5rem";
    downloading.appendChild(link);

    link.innerText = "Allowed";

    const action = document.createElement('td');
    action.classList.add('table-cell');
    noviDiv.appendChild(action);
    action.style.display = "flex";
    action.style.columnGap = "2rem";

    const edit = document.createElement('img');
    edit.src = "images/edit_link.png";
    action.appendChild(edit);

    if(downloading.innerText === "Allowed")
    {
        link.style.backgroundColor = "#ECFDF3";
        const allowed = document.createElement('img');
        allowed.src = "images/pause-circle.png";
        action.appendChild(allowed);
    }
    if(downloading.innerText === "Paused")
    {
        link.style.backgroundColor = "#FFFAEB";
        link.style.color = "#FFFAEB";
        const paused = document.createElement('img');
        paused.src = "images/play-circle.png";
        action.appendChild(paused);
    }
    if(downloading.innerText === "Denied")
    {
        link.style.backgroundColor = "#FEF3F2";
        link.style.color = "#B42318";
    }

    const deleteLink = document.createElement('img');
    deleteLink.src = "images/trash-2.png";
    action.appendChild(deleteLink);

    let numberOfLinks = document.querySelector(".number-of-links");
    let num = parseInt(numberOfLinks.innerText);
    num++;
    numberOfLinks.innerText = num.toString();

    date.value = "";
    time.value = "";
    selectTime.value = "";

    newLinkModal.style.display = 'none';
});

closeBtnAccessList.addEventListener('click', function() {
    accessListModal.style.display = 'none';
});