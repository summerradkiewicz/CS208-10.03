let textArea;
let ol;

window.addEventListener('DOMContentLoaded', function domLoaded() {
    // register addBtnClick() as Add button's click event handler
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addBtnClick);

    // let the enter key also trigger addBtnClick()
    textArea = document.getElementById('text-area');
    textArea.addEventListener('keyup', (event) => {
        if (event.key == 'Enter') {
            console.log("enter");
            addBtnClick();
        }
    });
});

function addBtnClick() {
    // extract the text entered in the textbox, then call addTask() with the new task
    textArea = document.getElementById('text-area');
    const newTask = textArea.value;

    // if text was entered, add it as a task and clear the textbox
    if (textArea.value != "") {
        textArea.value = "";
        addTask(newTask);
    }

    textArea.focus(); // put focus back on the box
}

function addTask(task) {
    // Call document.createElement() to create a new <li> element
    const listItem = document.createElement('li');
    const taskHTML = '<span class="task-text">' + task + '</span><button class="done-btn">&#10006;</button>';
    // Set the new <li> element's innerHTML
    listItem.innerHTML = taskHTML;

    // Call document.querySelector() to find the <ol> DOM node
    ol = document.querySelector('ol');
    // Call appendChild() on the <ol> DOM node with the new <li> element to append the <li> to the ordered list
    ol.appendChild(listItem);

    // add removeTask() to any new task
    const doneBtnList = document.querySelectorAll('.done-btn');
    const lastBtn = doneBtnList[doneBtnList.length - 1];
    lastBtn.addEventListener('click', removeTask);
}

function removeTask(event) {
    const li = event.target.parentNode;
    ol.removeChild(li);
}