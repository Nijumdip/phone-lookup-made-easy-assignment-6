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
                                <h4 class="card-title">${phone.phone_name}</h4>
                                <p class="card-text">${phone.brand}</p>
                                <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">See Details</button>
                        </div>
                    </div>
                `;
                mainDiv.appendChild(div);
                error.innerText = '';
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
        // console.log(phone);
        const phoneDetails = document.getElementById('phone-details');
        const div = document.createElement('div');
        div.classList.add("d-flex", "justify-content-center");
        div.innerHTML = `
            <div class="card p-2 rounded single-card">
                <img src=" ${phone.image} " class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title"> ${phone.slug} </h4>
                    <h6> <b>ReleaseDate:</b> ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}
                    </h6>
                    <p> <b> MainFeatures: </b> <br/>
                        Storage: ${phone.mainFeatures.storage}. <br/>
                        DisplaySize: ${phone.mainFeatures.displaySize}. <br/>
                        ChipSet: ${phone.mainFeatures.chipSet}. <br/>
                        Memory: ${phone.mainFeatures.memory}. 
                    </p>
                    <p> <b> Sensors:</b> <br/>
                        ${phone.mainFeatures.sensors[0]}.
                        ${phone.mainFeatures.sensors[1]}.
                        ${phone.mainFeatures.sensors[2]}.
                        ${phone.mainFeatures.sensors[3]}. 
                        ${phone.mainFeatures.sensors[4]}. 
                    </p>

                    <p> <b> Others: </b> <br>
                        WLAN: ${phone.others.WLAN}. <br/> 
                        Bluetooth: ${phone.others.Bluetooth}. <br/> 
                        GPS: ${phone.others.GPS}. <br/>
                        NFC: ${phone.others.NFC}. <br/> 
                        Radio: ${phone.others.Radio}. <br/> 
                        USB: ${phone.others.USB}. 
                    </p>
                </div>
            </div>
        `;
        phoneDetails.appendChild(div);
        mainDiv.innerHTML = '';
    };