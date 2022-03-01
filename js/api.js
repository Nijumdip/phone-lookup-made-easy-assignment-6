const mainDiv = document.getElementById('main-one');

    const searchPhone = () => {
        const searchFeild = document.getElementById('search-feild');
        const error = document.getElementById('error');
        const searchFeildText = searchFeild.value;
        if (searchFeildText == '') {
            error.innerText = 'Please write something  to display ';
            searchFeild.value = '';
            mainDiv.innerHTML = '';
        }
        else {
            const url = `https://openapi.programming-hero.com/api/phones?search=${searchFeildText}`
            fetch(url)
                .then(res => res.json())
                .then(data => displayPhones(data.data));
            searchFeild.value = '';
            error.innerText = '';
            mainDiv.innerHTML = '';
        }
    };
    const displayPhones = phones => {
        const first20Phones = phones.slice(0, 20);
        if (phones.length == '') {
            error.innerText = 'No Phone Found';
        }
        else {
            for (const phone of first20Phones) {
                const div = document.createElement('div');
                div.classList.add("col");
                div.innerHTML = `
                    <div class="card p-2 rounded " style="width: 100%">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                                <h5 class="card-title">${phone.phone_name}</h5>
                                <p class="card-text">${phone.brand}</p>
                                <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">See Details</button>
                        </div>
                    </div>
                `;
                mainDiv.appendChild(div);
            };
        }
    };

    const loadPhoneDetail = phoneId => {
        const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhoneDetail(data.data))
    }
    const displayPhoneDetail = phone => {
        const phoneDetails = document.getElementById('phone-details');
        const div = document.createElement('div');
        div.classList.add("d-flex", "justify-content-center");
        div.innerHTML = `
            <div class="card p-2 rounded single-card">
                <img src=" ${phone.image} " class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${phone.slug} </h5>
                    <h6>${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}
                    </h6>
                    <p> ${phone.mainFeatures.storage} </p>
                    <p> ${phone.mainFeatures.displaySize} </p>
                    <p> ${phone.mainFeatures.chipSet} </p>
                    <p> ${phone.mainFeatures.memory} </p>

                    <p> ${phone.mainFeatures.sensors[0]} </p>
                    <p> ${phone.mainFeatures.sensors[1]} </p>
                    <p> ${phone.mainFeatures.sensors[2]} </p>
                    <p> ${phone.mainFeatures.sensors[3]} </p>
                    <p> ${phone.mainFeatures.sensors[4]} </p>
                </div>
            </div>
        `;
        phoneDetails.appendChild(div);
        mainDiv.innerHTML = '';
    };