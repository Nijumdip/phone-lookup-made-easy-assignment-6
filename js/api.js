const mainDiv = document.getElementById('main-one');
    const searchPhone = () => {
        const searchFeild = document.getElementById('search-feild');
        const error = document.getElementById('error');
        const searchFeildText = searchFeild.value;
        // console.log(searchFeildText);
        if (searchFeildText == '') {
            error.innerText = 'Please write something  to display ';
            searchFeild.value = '';
            mainDiv.innerHTML = '';
        }
        else {
            const url = `https://openapi.programming-hero.com/api/phones?search=${searchFeildText}`
            fetch(url)
                .then(res => res.json())
                .then(data => displayPhone(data.data));
            searchFeild.value = '';
            error.innerText = '';
            mainDiv.innerHTML = '';
        }
    };
    const displayPhone = phones => {
        // console.log(phones);
        /* if (phones.length == 0) {
            error.innerText = 'show no result found';
        }
        else { }*/
        for (const phone of phones) {
            console.log(phone);
            const div = document.createElement('div');               
            div.classList.add("col-lg-4", 'col-sm-1');
            div.classList.add("mb-5", 'mt-5');
            div.innerHTML = `
                <div class="card p-2 rounded" style="width: 18rem;">
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
    };
    const loadPhoneDetail = phoneId => {
        console.log(phoneId);
       /*  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${phoneId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMealDetail(data.meals[0])) */
    };
    
    




















