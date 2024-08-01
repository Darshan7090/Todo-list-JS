 document.addEventListener("DOMContentLoaded", function() {
        const taskInput = document.getElementById("taskInput");
        const addTaskBtn = document.getElementById("addTaskBtn");
        const taskList = document.getElementById("taskList");

       
        function createTaskItem(taskContent) {
            const li = document.createElement("li");
            li.textContent = taskContent;
            li.className = "taskItem";

    		const editBtn = document.createElement("button");
   		editBtn.textContent = "Edit";
    		editBtn.className = "editBtn";
   		editBtn.addEventListener("click", function() {

        const newTaskContent = prompt ("Edit your task:", taskContent);
        if (newTaskContent !== null) {
            li.textContent = newTaskContent;
        }
    	});
    		li.appendChild(editBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "deleteBtn";
            deleteBtn.addEventListener("click", function() {
                li.remove();
            });
            li.appendChild(deleteBtn);
            return li;
        }

        function addTask() {
            const taskContent = taskInput.value.trim();
            if (taskContent !== "") {
                const taskItem = createTaskItem(taskContent);
                taskList.appendChild(taskItem);
                taskInput.value = "";
            } else {
                alert("Please enter a task.");
            }
        }

        
        addTaskBtn.addEventListener("click", addTask);


        taskInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTask();
            }
        });
    });
