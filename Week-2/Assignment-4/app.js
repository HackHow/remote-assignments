// Request 1: Click to Change Text.
// When the user clicks on the "Welcome Message" block, change the text to "Have a Good Time!".

function changeText() {
    document.getElementsByClassName("main_message")[0].innerHTML = "Have a Good Time!";
}

document.getElementsByClassName("main_message")[0].onclick = function() {changeText()};

// Request 2: Click to Show More Content Boxes.
// There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.

function incrContentBoxes() {
    let Boxes = document.querySelector(".allbox");
    let clonedBoxes = Boxes.cloneNode(true);
    clonedBoxes.id = "newContentBox";
    document.body.appendChild(clonedBoxes);
    document.querySelector("#newContentBox").style.display = "none";
}

incrContentBoxes()

function clickButton() {
    let newContentBox = document.querySelector("#newContentBox");
    // newContentBox.style.display = newContentBox.style.display == 'none' ? "" : "none"
    newContentBox.style.display = "";
}

document.querySelector(".foot").onclick = function() {clickButton()};