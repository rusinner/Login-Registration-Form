const sign_in_btn = document.querySelector("#sign-in-button");
const sign_up_btn = document.querySelector("#sign-up-button");
const container = document.querySelector(".container");
const left_panel = document.querySelector(".left-panel");
const right_panel = document.querySelector("#right-panel");


sign_up_btn.addEventListener("click", () =>{
    container.classList.add("sign-up-mode");
    left_panel.classList.add("move-left-image");
    right_panel.classList.add("move-right-image");
});

sign_in_btn.addEventListener("click", () =>{
    container.classList.remove("sign-up-mode");

});