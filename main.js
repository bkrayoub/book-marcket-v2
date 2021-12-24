// input
const title = document.getElementById ('title')
const writer = document.getElementById ('writer');
const price = document.getElementById ('price');
const date = document.getElementById ('date');
const language = document.getElementById ('language');
const type = document.getElementById ('type');
const types = document.getElementsByClassName ('types');
const email = document.getElementById ('email');
// error message
const titleErr = document.getElementById ('TitleError');
const writerErr = document.getElementById ('WriterError');
const priceErr = document.getElementById ('PriceError');
const dateErr = document.getElementById ('DateError');
const languageErr = document.getElementById ('LanguageError');
const typeErr = document.getElementById ('TypeError');
const emailErr = document.getElementById ('EmailError');

var myList = [];
function btn(){
    // title
    if(title.value.length > 25 || !isNaN(title.value)){
        titleErr.innerText = ('You only use 25 latters without numbers')
        titleErr.style.color="red";
    }
    if(title.value == "" ){
        titleErr.innerText = ('this area is empety')
    }
    // writer
    if(writer.value.length > 25 || !isNaN(writer.value)){
        writerErr.innerText = ('You only use 25 latters without numbers')
        writerErr.style.color="red";
    }
    if(writer.value == "" ){
        writerErr.innerText = ('this area is empety');
        writerErr.style.color="red";
    }
    // Price
    if(price.value == ""){
        priceErr.innerText = ('this area is empety');
        priceErr.style.color="red"
    }
    if(isNaN(price.value)){
        priceErr.innerHTML = ('only numbers')
        priceErr.style.color="red"
    }
    // date
    if (date.value == ""){
        dateErr.innerHTML = ('date?')
        dateErr.style.color="red"
    }
    if(language.selectedIndex== ""){
        languageErr.innerHTML = ('you most select language');
        languageErr.style.color = ('red')
    }
    if(!(types[0].checked || types[1].checked || types[2].checked)){
        typeErr.innerHTML = ("you most check one");
        typeErr.style.color = "red"
    }
    if(email.value == ""){
        emailErr.innerHTML = ('you most fill this area')
        emailErr.style.color = "red"
    }
}
