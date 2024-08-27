const email = document.querySelector("#email")
const not_email = document.querySelector(".not-email")

const pass = document.querySelector("#pass")
const confirm_pass = document.querySelector("#confirm-pass")
const pas = document.querySelector(".pas")
const confirm_pas = document.querySelector(".confirm-pas")







email.onkeyup = function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email.value) == true) {
        email.classList.remove("active");
        not_email.classList.add("none");
    } else {
        email.classList.add("active");
        not_email.classList.remove("none");
    }
}



pass.onkeyup = function () {
    let passValue = pass.value;
    if (passValue.length < 6) {
        pass.classList.add("active");
        pas.classList.remove("none");
    } else {
        pass.classList.remove("active");
        pas.classList.add("none");
    }
}

confirm_pass.onkeyup = function () {
    if (confirm_pass.value != pass.value) {
        confirm_pass.classList.add("active")
        confirm_pas.classList.remove("none")
    } else {
        confirm_pass.classList.remove("active")
        confirm_pas.classList.add("none")
    }
}


