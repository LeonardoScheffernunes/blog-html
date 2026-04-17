const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        taskInput.focus();
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// A delegacao de eventos permite remover tambem os <li> criados dinamicamente.
taskList.addEventListener("click", (event) => {
    const clickedItem = event.target.closest("li");

    if (!clickedItem || !taskList.contains(clickedItem)) {
        return;
    }

    clickedItem.remove();
});
