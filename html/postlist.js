function deletevlog() {
    const deleteBtn = document.querySelector(".delete");
    const deleteconfirmation = document.querySelector(".delete-confirmation");
    const No = document.querySelector(".reject-delete");
    const yes = document.querySelector(".confirm-delete");
    const deleteParent = deleteBtn.parentNode.nodeName;
    const child = document.querySelector('.delete');
    const parentWithClass = child.closest('.post');
    deleteconfirmation.style.display = "block";
    No.addEventListener('click', () => {
        deleteconfirmation.style.display = "none";
    });
    yes.addEventListener('click', () => {
        parentWithClass.remove();
        deleteconfirmation.style.display = "none";

    });
}

function sign() {
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
} 
