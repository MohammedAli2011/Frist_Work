//#region navbar & footer

let navbar = `    <!-- start navbar -->
    <nav class="navbar navbar-expand-lg p-0 position-fixed shadow-lg z-3">
        <div class="container">
            <a class="navbar-brand" href="#" title="logo"><img class="img-fluid" src="img/assets/images/logo.png"
                    alt=""></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link hvr-underline-from-center" aria-current="page" href="home.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link hvr-underline-from-center" href="shop.html">Shop</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link hvr-underline-from-center" href="about_us.html">About Us</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link hvr-underline-from-center" href="help.html">Help</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link hvr-underline-from-center" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>

            <div class="icons-container d-flex align-items-center p-2">
                <!-- icon -->
                <p class="position-relative d-flex align-items-center p-2 m-0">
                    <a class="btn icon icon-search border border-dark" data-bs-toggle="collapse" href="#search"
                        role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fa-solid fa-search"></i>
                    </a>
                </p>
                <div class="collapse search-collapse position-absolute top-100" id="search">
                    <div class="card card-body position-relative">
                        <input class="search-bar rounded" type="text" name="search-bar" placeholder="search" id="">
                        <a class="search-bar-link position-absolute text-dark" href="" title="search"><i
                                class="fa-solid fa-search"></i></a>

                    </div>
                </div>
                <!-- icon -->
                <p class="position-relative d-flex align-items-center p-2 m-0">
                    <a class="btn icon icon-account border border-dark d-flex align-items-center"
                        data-bs-toggle="collapse" href="#account" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i class="fa-regular fa-user-circle fs-5"></i>
                    </a>
                </p>
                <div class="collapse account-collapse position-absolute top-100 end-0" id="account">
                    <ul class="card card-body list-unstyled p-0">
                        <li><a class="d-block p-2 acount-link" href="my_account.html">My Account</a></li>
                        <li><a class="d-block p-2 acount-link" href="check_out.html">Check Out</a></li>
                        <li><a class="d-block p-2 acount-link" href="sign_in.html">Sign In</a></li>
                    </ul>
                </div>
                <!-- icon -->
                <p class=" d-flex align-items-center m-0 border border-dark m-2 rounded">
                    <a class="text-dark icon icon-heart rounded" href="wish_list.html"><i class="fa-regular fa-heart"></i></a>
                </p>
                <!-- icon -->
                <p class=" d-flex align-items-center m-0 border border-dark m-2 rounded">
                    <a class="text-dark icon icon-shop rounded" href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                </p>
            </div>
        </div>
    </nav>`
;

//#region footer
let footer = `<!--#region footer -->
<footer class="bg-dark text-white">

    <div class="container">

        <div class="content d-flex justify-content-center p-5">

            <div class="f-pages w-25 d-flex align-items-center flex-column">

                <div class="logo">

                    <a href="" class=""><img class="img-fluid" src="img/assets/images/logo.png" alt="logo"></a>

                </div>

                <div class="links-box w-100 d-flex justify-content-between align-items-center p-3">

                    <div class="left-side d-flex justify-content-center align-items-start flex-column">

                        <a href="home.html" class="link w-100 fw-bold p-1 hvr-forward">Home</a>

                        <a href="shop.html" class="link w-100 fw-bold p-1 hvr-forward">Shop</a>

                        <a href="about_us.html" class="link w-100 fw-bold p-1 hvr-forward">About Us</a>

                    </div>

                    <div class="right-side d-flex justify-content-center align-items-start flex-column">

                        <a href="contact.html" class="link w-100 fw-bold p-1 hvr-forward">Contact Us</a>

                        <a href="wishlist" class="link w-100 fw-bold p-1 hvr-forward">Wishlist</a>

                        <a href="Cart.html" class="link w-100 fw-bold p-1 hvr-forward">Cart</a>

                    </div>

                </div>

                <div class="other-sites w-100 d-flex align-items-center justify-content-between p-3 border">

                    <a href="https://youtube.com" target="_blank"><i class="fa-brands fa-youtube fs-5 p-2 hvr-grow"></i></a>

                    <a href="https://facebook.com" target="_blank"><i
                            class="fa-brands fa-square-facebook fs-5 p-2 hvr-grow"></i></a>

                    <a href="https://x.com" target="_blank"><i class="fa-brands fa-x-twitter fs-5 p-2 hvr-grow"></i></a>

                    <a href="https://instagram.com" target="_blank"><i
                            class="fa-brands fa-instagram fs-5 p-2 hvr-grow"></i></a>

                </div>

            </div>

            <div class="f-categories w-25 d-flex align-items-start flex-column ps-5">

                <div class="title mt-4">

                    <h2 class="ms-3">Categories:</h2>

                </div>

                <div class="links-box w-100 d-flex justify-content-between align-items-center p-3">

                    <div class="left-side d-flex justify-content-center align-items-start flex-column">

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate1</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate2</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate3</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate4</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate5</a>

                    </div>

                    <div class="right-side d-flex justify-content-center align-items-start flex-column">

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate8</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate9</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate10</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate11</a>

                        <a href="" class="link w-100 fw-bold p-1 hvr-forward">Cate12</a>

                    </div>


                </div>

            </div>

            <div class="f-account w-25 d-flex align-items-start flex-column ps-5">

                <div class="title mt-4 ms-2">

                    <h2 class="ms-2">My Account:</h2>

                </div>

                <div class="links-box w-100 d-flex flex-column justify-content-between align-items-center p-3">

                    <a href="" class="link w-100 fw-bold p-1 hvr-forward">My Account</a>

                    <a href="" class="link w-100 fw-bold p-1 hvr-forward">Sign In</a>

                    <a href="" class="link w-100 fw-bold p-1 hvr-forward">Sign Up</a>

                    <a href="" class="link w-100 fw-bold p-1 hvr-forward">Check Out</a>

                    <a href="" class="link w-100 fw-bold p-1 hvr-forward">FAQ</a>


                </div>

            </div>

            <div class="information w-25 d-flex align-items-start flex-column ps-5">

                <div class="title mt-4 ms-2">

                    <h2 class="ms-2">Information:</h2>

                </div>

                <p class="w-100 p-3">
                    ABC, Address Here, Country <br>
                    Call Us: <a href="tel:01210908070" target="_blank">01210908070</a><br>
                    Email: <a href="https://mail.google.com" target="_blank">engineer.mohammed.ali11@gmail.com</a>
                </p>

                <a href="https://maps.google.com" target="_blank"><img class="img-fluid ps-3" src="img/download.jpg"
                                                                       alt=""></a>

            </div>

        </div>

    </div>

</footer>
<!--#endregion footer -->`;
let copyright = `<!--#region copyright -->
<div class="copyright">

    <div class="container w-100 h-100">

        <p class="ms-5 w-100 h-100 d-flex align-items-center justify-content-between">
            © 2025 memo All rights reserved.
        </p>

    </div>

</div>
<!--#endregion copyright -->`
//#endregion footer

document.body.innerHTML = navbar + document.body.innerHTML + footer + copyright;

let links = [document.getElementsByClassName("nav-link")[0], document.getElementsByClassName("nav-link")[1], document.getElementsByClassName("nav-link")[2], document.getElementsByClassName("nav-link")[3], document.getElementsByClassName("nav-link")[4]];
let links2 = [document.getElementsByClassName("acount-link")[0], document.getElementsByClassName("acount-link")[1], document.getElementsByClassName("acount-link")[2], document.getElementsByClassName("icon-heart")[0], document.getElementsByClassName("icon-shop")[0]];

//#region nav links access
//pages links
links.forEach((e) => {
    if (window.location.href === e.href) {
        e.classList.remove("hvr-underline-from-center");
        e.classList.add("active");
    }
    ;
});

links2.forEach((e) => {
    if (window.location.href === e.href) {
        e.style.background = "var(--bg-color) !important";
        e.style.color = "var(--main-color) !important";
        if (e.innerHTML === "My Account" || e.innerHTML === "Sign In" || e.innerHTML === "Check Out") {
            document.getElementsByClassName("icon-account")[0].style.background = "var(--bg-color) !important";
            document.getElementsByClassName("icon-account")[0].style.color = "var(--main-color) !important";
        }
        ;
    }
    ;
});

//search bar

document.getElementsByClassName("card")[0].addEventListener("mouseover", () => {
    document.getElementsByClassName("icon-search")[0].style.background = "var(--bg-color) !important";
    document.getElementsByClassName("icon-search")[0].style.color = "var(--main-color) !important";
});

document.getElementsByClassName("card")[0].addEventListener("mouseout", () => {
    document.getElementsByClassName("icon-search")[0].style.background = "transparent";
    document.getElementsByClassName("icon-search")[0].style.color = "var(--bs-dark)";
});

document.getElementsByClassName("search-bar")[0].addEventListener("click", () => {
    document.getElementsByClassName("icon-search")[0].style.background = "var(--bg-color) !important";
    document.getElementsByClassName("icon-search")[0].style.color = "var(--main-color) !important";
});

document.getElementsByClassName("search-bar")[0].addEventListener("keyup", () => {
    document.getElementsByClassName("icon-search")[0].style.background = "var(--bg-color) !important";
    document.getElementsByClassName("icon-search")[0].style.color = "var(--main-color) !important";
});

//account icon links

document.getElementsByClassName("card")[1].addEventListener("mouseover", () => {
    document.getElementsByClassName("icon-account")[0].style.background = "var(--bg-color) !important";
    document.getElementsByClassName("icon-account")[0].style.color = "var(--main-color) !important";
});

document.getElementsByClassName("card")[1].addEventListener("mouseout", () => {
    document.getElementsByClassName("icon-account")[0].style.background = "transparent";
    document.getElementsByClassName("icon-account")[0].style.color = "var(--bs-dark)";
});

document.getElementsByClassName("account-collapse")[0].addEventListener("click", () => {
    document.getElementsByClassName("icon-account")[0].style.background = "var(--bg-color) !important";
    document.getElementsByClassName("icon-account")[0].style.color = "var(--main-color) !important";
});

//#endregion nav links access

//#endregion navbar & footer

//#region landing

let leftArrow = document.getElementsByClassName("arrow-left")[0];
let rightArrow = document.getElementsByClassName("arrow-right")[0];
let landingItems = document.querySelectorAll(".landing .container .item")
let n = 0;

function slider() {
    for (let i = 0; i < landingItems.length; i++) {
        landingItems[i].classList.remove("d-flex")
        landingItems[i].classList.add("d-none")
    }
}

slider();
landingItems[n].classList.remove("d-none")
landingItems[n].classList.add("d-flex")

leftArrow.addEventListener("click", () => {
    if (n > 0) {
        n--
    } else {
        n = landingItems.length - 1
    }
    slider();
    landingItems[n].classList.remove("d-none")
    landingItems[n].classList.add("d-flex")
});

rightArrow.addEventListener("click", () => {
    if (n === landingItems.length - 1) {
        n = 0
    } else {
        n++
    }

    slider();
    landingItems[n].classList.remove("d-none")
    landingItems[n].classList.add("d-flex")

});

//#endregion landing

//#region new collections

let daysInp = document.getElementsByClassName("days")[0];
let hoursInp = document.getElementsByClassName("hours")[0];
let minutesInp = document.getElementsByClassName("minutes")[0];
let secondsInp = document.getElementsByClassName("seconds")[0];
let time = new Date("Dec 31, 2026 23:59:59").getTime();

setInterval(() => {
    let timeNow = new Date();
    let timeDef = time - timeNow;

    //days
    let days = Math.floor((timeDef / (1000 * 60 * 60 * 24)));
    daysInp.innerHTML = days < 10 ? `0${days}` : days;
    //hours
    let hours = Math.floor((timeDef % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hoursInp.innerHTML = hours < 10 ? `0${hours}` : hours;
    //minutes
    let minutes = Math.floor((timeDef % (1000 * 60 * 60)) / (1000 * 60));
    minutesInp.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    //seconds
    let seconds = Math.floor((timeDef % (1000 * 60)) / (1000));
    secondsInp.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    //conditions
    //style condition
    if (daysInp.innerHTML === "00") {

        daysInp.classList.add("text-danger");

    } else if (hoursInp.innerHTML === "00") {

        hoursInp.classList.add("text-danger");

    } else if (minutesInp.innerHTML === "00") {

        minutesInp.classList.add("text-danger");

    } else {

        minutesInp.classList.remove("text-danger");

        daysInp.classList.remove("text-danger");

        hoursInp.classList.remove("text-danger");

    }
    //clear interval condition
    if (timeDef === 0) {
        clearInterval();
    }
    ;
}, 1000);

//#endregion new collections

//#region featured products
let productsBox = document.querySelector(".featured-products .products-box");
let leftAngle = document.querySelector(".featured-products .left-arrow");
let rightAngle = document.querySelector(".featured-products .right-arrow");
//code

leftAngle.addEventListener("click", () => {
    let product = productsBox.firstElementChild;
    productsBox.removeChild(product);
    productsBox.appendChild(product);
});

rightAngle.addEventListener("click", () => {
    let product = productsBox.lastElementChild;
    console.log(product);
    productsBox.removeChild(product);
    productsBox.prepend(product);
});

//#endregion featured products

//#region featured products
let sProductsBox = document.querySelector(".sale-products .products-box");
let sLeftAngle = document.querySelector(".sale-products .left-arrow");
let sRightAngle = document.querySelector(".sale-products .right-arrow");
//code

sLeftAngle.addEventListener("click", () => {
    let product = sProductsBox.firstElementChild;
    sProductsBox.removeChild(product);
    sProductsBox.appendChild(product);
});

sRightAngle.addEventListener("click", () => {
    let product = sProductsBox.lastElementChild;
    console.log(product);
    sProductsBox.removeChild(product);
    sProductsBox.prepend(product);
});

//#endregion featured products