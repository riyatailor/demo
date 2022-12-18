const SignUpBtn2 = document.querySelector(".SignIn_btn-SignUp");
const modelSignUp = document.querySelector(".SignUp-Form");
const mrindia = document.querySelector(".SignIn-Form");
const create = document.querySelector(".create-post");
const createcloseBtn = document.querySelector(".close-create");
const createBtn = document.querySelector(".CreatePost_Btn");
const allPostBtn = document.querySelector(".AllPost_Btn");


SignUpBtn2.addEventListener('click', () => {
    modelSignUp.style.display = "block";
    mrindia.style.display = "none";
});
createBtn.addEventListener('click', () => {
    create.style.display = "block";
});
createcloseBtn.addEventListener('click', () => {
    create.style.display = "none";
});
allPostBtn.addEventListener('click', () => {
    location.href = 'postslist.html';

});
