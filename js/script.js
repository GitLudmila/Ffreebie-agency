
//Смена текста на герое 
let slideText = 1;
showTexts(slideText);
let nums = document.querySelectorAll(".hero__nums"),
    controls = document.querySelector(".hero__controls");

// Thumbnail image controls
function currentText(n) {
    showTexts(slideText = n);
};
// nums.classList.add("hero__nums--active");
function showTexts(n) {
    let i;
    let slides = document.querySelectorAll("#hero__text");
    if (n > slides.length) {slideText = 1}
    if (n < 1) {slideText = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideText-1].style.display = "flex";
}

// Выделение карточек при наведении на наших сервисах
const showElem = document.querySelectorAll("#services__elem"),
    servSticker = document.querySelectorAll("#serv__svg"),
    servLink = document.querySelectorAll("#serv__link");

for (let value of showElem){
    value.addEventListener ("mouseover", function() {
        // preventDefault();
        value.style.cursor = "pointer";
        value.classList.add("services__elem-on");
        if(showElem.item(0) == value){
            servSticker.item(0).style.opacity = 1;
            servLink.item(0).style.opacity = 1;
        } else if (showElem.item(1) == value){
            servSticker.item(1).style.opacity = 1;
            servLink.item(1).style.opacity = 1;
        } else if (showElem.item(2) == value){
            servSticker.item(2).style.opacity = 1;
            servLink.item(2).style.opacity = 1;
        } else {
            alert("ERROR")
        }
    }) ;
    value.addEventListener ("mouseout", function() {
        value.classList.remove("services__elem-on");
        if(showElem.item(0) == value){
            servSticker.item(0).style.opacity = .5;
            servLink.item(0).style.opacity = .5;
        } else if (showElem.item(1) == value){
            servSticker.item(1).style.opacity = .5;
            servLink.item(1).style.opacity = .5;
        } else if (showElem.item(2) == value){
            servSticker.item(2).style.opacity = .5;
            servLink.item(2).style.opacity = .5;
        } else {
            alert("ERROR")
        }
    }) 
};

// Выделение блогов при наведении на последних работах
const lateElem = document.querySelectorAll("#late__elem"),
    lateTitle = document.querySelectorAll("#late__title"),
    lateRead = document.querySelectorAll("#late__read"),
    lateBg = document.querySelectorAll("#late__bg");

for (let value of lateElem){
    value.style.cursor = "pointer";
    
    value.addEventListener ("mouseover", function() {
        // preventDefault();
        if(lateElem.item(0) == value){
            lateBg.item(0).style.opacity = .8;
            lateBg.item(0).style.transition = "opacity .5s ease-in";
            lateRead.item(0).style.opacity = 1;
            // lateTitle.item(0).classList.add("late__elem--title-on-1");
        } else if (lateElem.item(1) == value){
            lateBg.item(1).style.opacity = .8;
            lateBg.item(1).style.transition = "opacity .5s ease-in";
            lateRead.item(1).style.opacity = 1;
            // lateTitle.item(1).classList.add("late__elem--title-on-2");
        } else if (lateElem.item(2) == value){
            lateBg.item(2).style.opacity = .8;
            lateBg.item(2).style.transition = "opacity .5s ease-in";
            lateRead.item(2).style.opacity = 1;
            // lateTitle.item(2).classList.add("late__elem--title-on-3");
        } else if (lateElem.item(3) == value){
            lateBg.item(3).style.opacity = .8;
            lateBg.item(3).style.transition = "opacity .5s ease-in";
            lateRead.item(3).style.opacity = 1;
            // lateTitle.item(3).classList.add("late__elem--title-on-4");
        } else {
            alert("ERROR")
        }
    }) ;
    value.addEventListener ("mouseout", function() {
        if(lateElem.item(0) == value){
            lateBg.item(0).style.opacity = .3;
            lateRead.item(0).style.opacity = 0;
            // lateTitle.item(0).classList.remove("late__elem--title-on-1");
        } else if (lateElem.item(1) == value){
            lateBg.item(1).style.opacity = .3;
            lateRead.item(1).style.opacity = 0;
            // lateTitle.item(1).classList.remove("late__elem--title-on-2");
        } else if (lateElem.item(2) == value){
            lateBg.item(2).style.opacity = .3;
            lateRead.item(2).style.opacity = 0;
            // lateTitle.item(2).classList.remove("late__elem--title-on-3");
        } else if (lateElem.item(3) == value){
            lateBg.item(3).style.opacity = .3;
            lateRead.item(3).style.opacity = 0;
            // lateTitle.item(3).classList.remove("late__elem--title-on-4");
        } else {
            alert("ERROR")
        }
    });

    value.addEventListener("click", function() {
        if(lateElem.item(0) == value){
            lateTitle.item(0).classList.add("late__elem--title-on-1");
        } else if (lateElem.item(1) == value){
            lateTitle.item(1).classList.add("late__elem--title-on-2");
        } else if (lateElem.item(2) == value){
            lateTitle.item(2).classList.add("late__elem--title-on-3");
        } else if (lateElem.item(3) == value){
            lateTitle.item(3).classList.add("late__elem--title-on-4");
        } else {
            alert("ERROR")
        }
    })
};

// Наведение на аля команду
const teamPers = document.querySelectorAll("#team__personas"),
    persContent = document.querySelectorAll("#personas__content");

    for (let value of teamPers){
        value.style.cursor = "pointer";
        value.style.transition = "filter 2s";

        // При наведении портреты подсвечиваются
        // Появлется текст
        value.addEventListener("mouseover", function() {
            if(teamPers.item(0) == value){
                teamPers.item(0).style.filter = "grayscale(0%)"
                teamPers.item(0).style.marginBottom = "5px";
                persContent.item(0).style.marginTop = "-150px";
                persContent.item(0).style.height = "8em";
                persContent.item(0).classList.add("personas__content__on");
            } else if (teamPers.item(1) == value){
                teamPers.item(1).style.filter = "grayscale(0%)"
                teamPers.item(1).style.marginBottom = "5px";
                persContent.item(1).style.marginTop = "-150px";
                persContent.item(1).style.height = "8em";
                persContent.item(1).classList.add("personas__content__on");
            } else if (teamPers.item(2) == value){
                teamPers.item(2).style.filter = "grayscale(0%)"
                teamPers.item(2).style.marginBottom = "5px";
                persContent.item(2).style.marginTop = "-150px";
                persContent.item(2).style.height = "8em";
                persContent.item(2).classList.add("personas__content__on");
            } else {
                alert("ERROR")
            }
        });
        // И исчезает
        value.addEventListener("mouseout", function() {
            if(teamPers.item(0) == value){
                teamPers.item(0).style.filter = "grayscale(100%)";
                teamPers.item(0).style.marginBottom = "0px";
                persContent.item(0).style.marginTop = "-70px";
                persContent.item(0).style.height = "3.9em";
                persContent.item(0).classList.remove("personas__content__on");
            } else if (teamPers.item(1) == value){
                teamPers.item(1).style.filter = "grayscale(100%)";
                teamPers.item(1).style.marginBottom = "0px";
                persContent.item(1).style.marginTop = "-70px";
                persContent.item(1).style.height = "3.9em";
                persContent.item(1).classList.remove("personas__content__on");
            } else if (teamPers.item(2) == value){
                teamPers.item(2).style.filter = "grayscale(100%)";
                teamPers.item(2).style.marginBottom = "0px";
                persContent.item(2).style.marginTop = "-70px";
                persContent.item(2).style.height = "3.9em";
                persContent.item(2).classList.remove("personas__content__on");
            } else {
                alert("ERROR")
            }
        });
    };

// Слайдер на ревью с оценкой

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll("#slider--item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


// Заготовка
// if (value.classList.contains("services__elem-on")) {
//     value.classList.remove("services__elem-on");
//     if(showElem.item(0) == value){
//         servSticker.item(0).style.opacity = .5;
//         servLink.item(0).style.opacity = .5;
//     } else if (showElem.item(1) == value){
//         servSticker.item(1).style.opacity = .5;
//         servLink.item(1).style.opacity = .5;
//     } else if (showElem.item(2) == value){
//         servSticker.item(2).style.opacity = .5;
//         servLink.item(2).style.opacity = .5;
//     } else {
//         console.log("Error")
//     }
// } else {
//     value.classList.add("services__elem-on");

//     if(showElem.item(0) == value){
//         servSticker.item(0).style.opacity = 1;
//         servLink.item(0).style.opacity = 1;
//     } else if (showElem.item(1) == value){
//         servSticker.item(1).style.opacity = 1;
//         servLink.item(1).style.opacity = 1;
//     } else if (showElem.item(2) == value){
//         servSticker.item(2).style.opacity = 1;
//         servLink.item(2).style.opacity = 1;
//     } else {
//         console.log("Error")
//     }
// }