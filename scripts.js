const addBtn = document.querySelector('.add-clients-btn');
const modal = document.querySelector('.modal-div');

addBtn.addEventListener('click', function() {
    modal.style.display = 'flex';

    const closeBtnModal = modal.querySelector('img');

    closeBtnModal.addEventListener('click', function() {
        modal.style.display = 'none';
    })

    let brojac = 0;
    const addBtnModal = modal.querySelector('.add-clients-btn');
    addBtnModal.addEventListener('click', function() {
        brojac++;

        const tableDiv = document.querySelector('.table-rows');

        let noviID = '#'+brojac;
        const noviDiv = document.createElement('div');
        noviDiv.setAttribute('class', 'table-row');
        noviDiv.setAttribute('id', noviID);
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

        const idDiv = document.createElement('div');
        idDiv.innerText = noviID;
        noviDiv.appendChild(idDiv);

        const nameEmail = document.createElement('div');
        noviDiv.appendChild(nameEmail);

        const nameDiv = document.createElement('div');
        nameDiv.innerText = name.value;
        nameEmail.appendChild(nameDiv);

        const emailDiv = document.createElement('div');
        emailDiv.innerText = email.value;
        nameEmail.appendChild(emailDiv);
        
        const phoneCountry = document.createElement('div');
        noviDiv.appendChild(phoneCountry);

        const phoneDiv = document.createElement('div');
        phoneDiv.innerText = phone.value;
        phoneCountry.appendChild(phoneDiv);

        const countryDiv = document.createElement('div');
        countryDiv.innerText = country.value;
        phoneCountry.appendChild(countryDiv);

        const addressDiv = document.createElement('div');
        addressDiv.innerText = address.value;
        noviDiv.appendChild(addressDiv);

        const linksDiv = document.createElement('div');
        linksDiv.innerText = "False";
        if(linksDiv.innerText === "True")
        {
            linksDiv.style.backgroundColor = "#ECFDF3";
            linksDiv.style.color = "#027A48";
        }
        else
        {
            linksDiv.style.backgroundColor = "#FEF3F2";
            linksDiv.style.color = "#B42318";
        }
        noviDiv.appendChild(linksDiv);

        const buttonsDiv = document.createElement('div');
        noviDiv.appendChild(buttonsDiv);
        buttonsDiv.style.display = "flex";

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
    })
})