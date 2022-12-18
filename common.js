const model = document.querySelector(".SignUp-Form");
const modelSignIn = document.querySelector(".SignIn-Form");
const SingUpBtn = document.querySelector(".SignUp_btn");
const SignInBtn = document.querySelector(".SignIn_btn");
const closeSignUp = document.querySelector(".close-SignUp");
const closeSignIn = document.querySelector(".close-SignIn");

SingUpBtn.addEventListener('click', () => {
    model.style.display = "block";
});
SignInBtn.addEventListener('click', () => {
    modelSignIn.style.display = "block";
});
closeSignUp.addEventListener('click', () => {
    model.style.display = "none";
});
closeSignIn.addEventListener('click', () => {
    modelSignIn.style.display = "none";
});
