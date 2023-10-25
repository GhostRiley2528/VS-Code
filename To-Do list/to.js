document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("taskList");
    const saveButton = document.getElementById("saveButton");

    // Function to save the to-do list to a text file
    function saveToDoList() {
        const tasks = Array.from(taskList.querySelectorAll("li")).map(task => task.textContent).join("\n");
        const blob = new Blob([tasks], { type: "text/plain" });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "todo-list.txt";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    saveButton.addEventListener("click", saveToDoList);
});
