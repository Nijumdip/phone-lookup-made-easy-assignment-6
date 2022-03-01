const mainDiv = document.getElementById('main-one');
const searchPhone = () => {
    const searchFeild = document.getElementById('search-feild');
    const error = document.getElementById('error');
    const searchFeildText = searchFeild.value;
    console.log(searchFeildText);
    if (searchFeildText == '') {
        error.innerText = 'Please write something  to display ';
        searchFeild.value = '';
        mainDiv.innerHTML = '';
    }
}





























/* const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/phones')
        .then(res => res.json())
        .then(data => displayPhone(data.data[0]));
    
}
loadData();
const displayPhone = phones => {
    console.log(phones);
    const mainOne = document.getElementById('main-one');
} */