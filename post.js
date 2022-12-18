const editBtn = document.querySelector(".editTitle-text");
const editVlog = document.querySelector(".editvlog-Text");
const editSymbol = document.querySelector(".editSymbol");
const saveBtn = document.querySelector(".saveSymbol");
const count = document.querySelector(".like-btn");
const displaylikes = document.querySelector(".dispaylikes");
const commentBtn = document.querySelector(".commentSymbol");
const comment = document.querySelector(".comment");
const commentsection = document.querySelector(".AllComments");
var countlikes = 0;
if (countlikes == 0) {
    displaylikes.innerHTML = "Be the first one to like this!"
}
editSymbol.addEventListener('click', () => {
    saveBtn.style.display = "block";
    editSymbol.style.display = "none";
    editBtn.style.border = "2px solid pink";
    editVlog.style.border = "2px solid pink";
    editBtn.contentEditable = "true";
    editVlog.contentEditable = "true";
});


saveBtn.addEventListener('click', () => {
    saveBtn.style.display = "none";
    editSymbol.style.display = "block";
    editBtn.style.border = "none";
    editVlog.style.border = "none";
    editBtn.contentEditable = "false";
    editVlog.contentEditable = "false";
    editBtn.innerHTML = "UPDATED:" + editBtn.innerText;
    editVlog.innerHTML = "UPDATED:\n" + "<br>" + editVlog.innerText;

});
count.addEventListener('click', () => {
    countlikes++;
    displaylikes.innerHTML = countlikes + " person likes this!"
})
commentBtn.addEventListener('click', () => {
    var itemBox = document.createElement('div');
    itemBox.classList.add('commentsreader');
    var itemBox2 = document.createElement('input');
    itemBox2.classList.add('review');
    itemBox2.disabled = true;
    itemBox2.value = comment.value;
    commentsection.prepend(itemBox);
    itemBox.prepend(itemBox2);


})
