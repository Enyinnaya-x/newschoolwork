const ham = document.getElementById("ham");
const spans = document.querySelectorAll(".span");
const cancel = document.querySelector(".fa-times");
spans.forEach(span => span.addEventListener("click", function () {
    const listDiv = document.querySelector(".list");
    spans.forEach(span => span.style.display = "none");
    cancel.style.display = "block";
    listDiv.style.display = "block";
    listDiv.style.position = "absolute";
    listDiv.style.left = "40px";
}));
cancel.addEventListener("click", function () {
    const listDiv = document.querySelector(".list");
    spans.forEach(span => span.style.display = "block");
    cancel.style.display = "none";
    listDiv.style.display = "none";
    listDiv.style.position = "absolute";
    listDiv.style.left = "570px";
});