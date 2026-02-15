// #region navbar

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

document.body.innerHTML = navbar + document.body.innerHTML;
let links = [document.getElementsByClassName("nav-link")[0], document.getElementsByClassName("nav-link")[1], document.getElementsByClassName("nav-link")[2], document.getElementsByClassName("nav-link")[3], document.getElementsByClassName("nav-link")[4]];
let links2 = [document.getElementsByClassName("acount-link")[0], document.getElementsByClassName("acount-link")[1], document.getElementsByClassName("acount-link")[2], document.getElementsByClassName("icon-heart")[0], document.getElementsByClassName("icon-shop")[0]];

//#region nav links access
//pages links
links.forEach((e) => {
    if (window.location.href === e.href) {
        e.classList.remove("hvr-underline-from-center");
        e.classList.add("active");
    };
});

links2.forEach((e) => {
    if (window.location.href === e.href) {
        e.style.background = "var(--bg-color) !important";
        e.style.color = "var(--main-color) !important";
        if (e.innerHTML === "My Account" || e.innerHTML === "Sign In" || e.innerHTML === "Check Out") {
            document.getElementsByClassName("icon-account")[0].style.background = "var(--bg-color) !important";
            document.getElementsByClassName("icon-account")[0].style.color = "var(--main-color) !important";
        };
    };
});

//search bar

document.getElementsByClassName("card")[0].addEventListener("mouseover", () => {
    document.getElementsByClassName("icon-search")[0].style.background = "var(--bg-color) !important";
    document.getElementsByClassName("icon-search")[0].style.color = "var(--main-color) !important";
});

document.getElementsByClassName("card")[0].addEventListener("mouseout", () => {
    document.getElementsByClassName("icon-search")[0].style.background = "#fff";
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
    document.getElementsByClassName("icon-account")[0].style.background = "#fff";
    document.getElementsByClassName("icon-account")[0].style.color = "var(--bs-dark)";
});

document.getElementsByClassName("account-collapse")[0].addEventListener("click", () => {
    document.getElementsByClassName("icon-account")[0].style.background = "var(--bg-color) !important";
    document.getElementsByClassName("icon-account")[0].style.color = "var(--main-color) !important";
});

//#endregion

//#endregion navbar

// #region landing

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

// #region new collections

let daysInp = document.getElementsByClassName("days")[0];
let hoursInp = document.getElementsByClassName("hours")[0];
let minutesInp = document.getElementsByClassName("minutes")[0];
let secondsInp = document.getElementsByClassName("seconds")[0];
let time = new Date("Dec 31, 2026 23:59:59").getTime();

setInterval(() => {
    let timeNow = new Date();
    let timeDef = time - timeNow;

    // days
    let days = Math.floor((timeDef / (1000 * 60 * 60 * 24)));
    daysInp.innerHTML = days < 10 ? `0${days}` : days;
    // hours
    let hours = Math.floor((timeDef % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hoursInp.innerHTML = hours < 10 ? `0${hours}` : hours;
    //minutes
    let minutes = Math.floor((timeDef % (1000 * 60 * 60)) / (1000 * 60));
    minutesInp.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    //seconds
    let seconds = Math.floor((timeDef % (1000 * 60)) / (1000));
    secondsInp.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // conditions
    // style condition
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
    // clear interval condition
    if (timeDef === 0) {
        clearInterval();
    };
}, 1000);

// #endregion new collections

// #endregion new collections

let ddd = document.getElementsByClassName("product");

document.getElementsByClassName("products-box")[1].removeChild(ddd[0])
document.getElementsByClassName("products-box")[1].prepend(ddd[0])