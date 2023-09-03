// $(window).load(function () {

// });
window.addEventListener("load", (event) => {
    $(".preloader").fadeOut();
    $("body").removeClass("overflow-hidden");
});
$("#meal").mouseover(function () {
    $("#meal-text").slideUp("slow");
    console.log("in");
});
$(document).ready(function () {
    $(".fa-align-justify").on("click", function () {
        $('.side-nav-menu').css("left", "0px");
        $(".open-close-icon").attr("onclick", "closeSideNav()");
        $('.open-close-icon').addClass('fa-x');
        $('.open-close-icon').removeClass('fa-align-justify');
        $('.slid').slideDown();
    });
});
// $(".fa-x").on("click", closeSideNav());

function closeSideNav() {
    $('.side-nav-menu').css("left", "-260px");
    $('li').slideDown();
    $('.open-close-icon').addClass('fa-align-justify');
    $('.open-close-icon').removeClass('fa-x');
    $(".open-close-icon").removeAttr("onclick");
    $('.slid').slideUp();

}
var Row = document.getElementById('row');
let bow = document.getElementById('bow');
let tow = document.getElementById('tow');

var Single = document.getElementById('POST');
var arr = [];
////////////////////////////////////////////////////////////////
async function mainMeals() {

    var data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    data = await data.json()
    arr = data.meals;
    displayMainMeals()
}
mainMeals();
function displayMainMeals() {
    var box = ''

    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3 meal" onclick="getSingleMeal(${arr[i].idMeal})" ;
        ">
                <img src="${arr[i].strMealThumb}" class="w-100" alt="" >
                <div class="meal-text ">
                    <p>${arr[i].strMeal}</p>
                </div>
            </div   >
        </div>`
    }
    Row.innerHTML = box
}
////*************************************************** */

////////////////////////////////////////////////////////////////
async function getCategories() {
    var data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    data = await data.json()
    arr = data.categories
    displayCategories()
}
function displayCategories() {
    var box = ''

    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3 meal" onclick="getCatPosts('${arr[i].strCategory}')">
                <img src="${arr[i].strCategoryThumb}" class="w-100" alt="">
                <div class="meal-text text-center">
                    <p>${arr[i].strCategory}</p>
                    <p class="desc">${arr[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>`
    }
    Row.innerHTML = box
}
////*************************************************** */
async function getCatPosts(cat) {
    var data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    data = await data.json()
    arr = data.meals
    displayCatPosts()
}
function displayCatPosts() {
    var box = ''

    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3 meal" onclick="getSingleMeal(${arr[i].idMeal})">
            <img src="${arr[i].strMealThumb}" class="w-100" alt="">
            <div class="meal-text text-center">
                <p>${arr[i].strMeal}</p>
            </div>

            </div>
        </div>`
    }
    Row.innerHTML = box
}
/* ===================================================== */
async function getSingleMeal(id) {
    var data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    data = await data.json();
    arr = data.meals;
    displaySingleMeal();
}
function displaySingleMeal() {
    var box = ''
    var meas = [];
    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-4">
            <div class="item p-3" onclick="getSingleMeal(${arr[i].idMeal})">
            <img src="${arr[i].strMealThumb}" class="w-100" alt="">
            <p>${arr[i].strMeal}</p>
            </div>
        </div>
        <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${arr[i].strInstructions}</p>
        <h2>Category : ${arr[i].strCategory}</h2>
        <h2>Area : ${arr[i].strArea}</h2>
        <h2>Recipes  :</h2>`
        if (arr[i].strMeasure1 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure1}
                </span>`
        }
        if (arr[i].strMeasure2 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure2}
                </span>`
        }
        if (arr[i].strMeasure3 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure3}
                </span>`
        }
        if (arr[i].strMeasure4 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure4}
                </span>`
        }
        if (arr[i].strMeasure5 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure5}
                </span>`
        }
        if (arr[i].strMeasure6 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure6}
                </span>`
        }
        if (arr[i].strMeasure7 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure7}
                </span>`
        }
        if (arr[i].strMeasure8 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure8}
                </span>`
        }
        if (arr[i].strMeasure9 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure9}
                </span>`
        }
        if (arr[i].strMeasure10 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure10}
                </span>`
        }
        if (arr[i].strMeasure11 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure11}
                </span>`
        }
        if (arr[i].strMeasure12 !== "") {
            box += `<span class="alert alert-info m-2 p-1">
                ${arr[i].strMeasure12}
                </span>`
        }
        if (arr[i].strTags == "" || arr[i].strTags == undefined) {

        }
        else {
            let tags = arr[i].strTags.split(',');
            box += `<h2>Tags :</h2>`
            for (let w = 0; w < tags.length; w++) {
                box += `<span class="alert alert-danger m-2 p-1">
                    ${tags[i]}
                    </span>`

            }
        }

        box += `<br><br><br>
        <a class="btn btn-success" href="${arr[i].strSource}">Sourse</a>
        <a class="btn btn-danger" href="${arr[i].strYoutube}">Youtube</a>

        </div>`
    }
    bow.innerHTML = box
}




////////////////////////////////////////////////////////////////
async function getArea() {
    var data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    data = await data.json()
    arr = data.meals
    displayArea()
}
function displayArea() {
    var box = ''

    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3" onclick="getAreaMeals('${arr[i].strArea}')">
            
            <p><i class="fa-solid fa-house big"></i> <br>${arr[i].strArea}</p>
            </div>
        </div>`
    }
    Row.innerHTML = box
}
////////////////////////////////////////////////////////////////
async function getAreaMeals(areaMeals) {
    var data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaMeals}`)
    data = await data.json()
    arr = data.meals
    displayAreaMeals()
}
function displayAreaMeals() {
    var box = ''

    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3 meal" onclick="getSingleMeal(${arr[i].idMeal})">
            <img src="${arr[i].strMealThumb}" class="w-100" alt="">
            <div class="meal-text text-center">
                <p>${arr[i].strMeal}</p>
            </div>

            </div>
        </div>`
    }
    Row.innerHTML = box
}
////////////////////////////////////////////////////////////////

async function getIngredients() {
    var data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    data = await data.json()
    arr = data.meals
    displayIngredients()
}
function displayIngredients() {
    var box = ''

    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-3 text-center pointer">
            <div class="item p-3" onclick="getIngredientsMeals('${arr[i].strIngredient}')">
            
            <p><i class="fa-solid fa-house big"></i> <br>${arr[i].strIngredient}</p>
            </div>
        </div>`
    }
    Row.innerHTML = box
}
////////////////////////////////////////////////////////////////

async function getIngredientsMeals(ingredientsMeals) {
    var data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsMeals}`)
    data = await data.json()
    arr = data.meals
    displayAreaMeals()
}
function displayAreaMeals() {
    var box = ''

    for (var i = 0; i < arr.length; i++) {
        box += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3 meal" onclick="getSingleMeal(${arr[i].idMeal})">
            <img src="${arr[i].strMealThumb}" class="w-100" alt="">
            <div class="meal-text text-center">
                <p>${arr[i].strMeal}</p>
            </div>

            </div>
        </div>`
    }
    Row.innerHTML = box
}
////////////////////////////////////////////////////////////////
function showContacts() {
    var box = ''

    box += ` 
        <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" onfocus="nameFocs()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onfocus="emailFocs()" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput"  onfocus="phoneFocs()" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onfocus="ageFocs()" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" onfocus="passFocs()" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" onfocus="rePassFocs()" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled="" class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>`

    Row.innerHTML = box
}
submitBtn = document.getElementById("submitBtn")



function nameFocs() {
    console.log("fffff ");
    nameInputTouched = true
    console.log(nameInputTouched);
}

function emailFocs() {
    emailInputTouched = true
    console.log(emailInputTouched);
}

function phoneFocs() {
    phoneInputTouched = true
    console.log(phoneInputTouched);
}

function ageFocs() {
    ageInputTouched = true
}

function passFocs() {
    passwordInputTouched = true
}

function rePassFocs() {
    repasswordInputTouched = true
}


let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    console.log(nameInputTouched);
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        $('#submitBtn').attr("disabled", false)
    } else {
        $('#submitBtn').attr("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}
/////////////////////////////////////////////////////////////////////////////////
function showSearchInputs() {
    var box = ''

    box += ` 
        <div class="container w-75" id="searchContainer">
            <div class="row py-4 ">
                <div class="col-md-6 ">
                    <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
                </div>
                <div class="col-md-6">
                    <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
                </div>
            </div>
        </div><br>
        `

    Row.innerHTML = box
}


async function searchByName(meal) {
    var data = await fetch(`https://www.themealdb.com//api/json/v1/1/search.php?s=${meal}`)
    data = await data.json()
    arr = data.meals
    displaySearchMeals()
}
function displaySearchMeals() {
    var box2 = '';
    for (var i = 0; i < arr.length; i++) {
        box2 += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3 meal" onclick="getSingleMeal(${arr[i].idMeal})">
            <img src="${arr[i].strMealThumb}" class="w-100" alt="">
            <div class="meal-text text-center">
                <p>${arr[i].strMeal}</p>
            </div>

            </div>
        </div>`
    }
    tow.innerHTML = box2
}
async function searchByFLetter(letter) {
    var data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    data = await data.json()
    arr = data.meals
    displaySearchFLetter()
}
function displaySearchFLetter() {
    var box2 = '';
    for (var i = 0; i < arr.length; i++) {
        box2 += ` 
        <div class="col-md-3 pointer">
            <div class="item p-3 meal" onclick="getSingleMeal(${arr[i].idMeal})">
            <img src="${arr[i].strMealThumb}" class="w-100" alt="">
            <div class="meal-text text-center">
                <p>${arr[i].strMeal}</p>
            </div>

            </div>
        </div>`
    }
    tow.innerHTML = box2
}