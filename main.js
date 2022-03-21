const sign_in_btn = document.querySelector("#sign-in-button");
const sign_up_btn = document.querySelector("#sign-up-button");
const container = document.querySelector(".container");
const left_panel = document.querySelector(".left-panel");
const right_panel = document.querySelector("#right-panel");
const signup_form = document.querySelector(".signup-signup");


sign_up_btn.addEventListener("click", () =>{
    container.classList.add("sign-up-mode");
    left_panel.classList.add("move-left-image");
    right_panel.classList.add("move-right-image");
    signup_form.classList.add("move-signup");
});

sign_in_btn.addEventListener("click", () =>{
    container.classList.remove("sign-up-mode");
    left_panel.classList.remove("move-left-image");
    right_panel.classList.remove("move-right-image");
    signup_form.classList.remove("move-signup");

});