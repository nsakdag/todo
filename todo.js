window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
  const completedEl = document.querySelector(".completed");
  let completedTitle;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    function playAudio() {
      var audio = document.getElementById("myAudio");
      audio.play();
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const checkboxEl = document.createElement("i");
    checkboxEl.classList.add("fa", "fa-square");

    task_el.appendChild(checkboxEl);

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
      completedEl.removeChild(task_el);
      checkAndRemoveCompletedTitle();
    });

    checkboxEl.addEventListener("click", () => {
      playAudio()
      if (checkboxEl.classList.contains("fa-square")) {
        checkboxEl.classList.remove("fa-square");
        checkboxEl.classList.add("fa-square-check");
        task_input_el.style.textDecoration = "line-through";
        const newh2 = document.querySelector(".completed h2");

        if (!newh2) {
          const completedTitle = document.createElement("h2");
          completedTitle.textContent = "Completed";
          completedEl.appendChild(completedTitle);
        }
        completedEl.appendChild(task_el);
      } else {
        checkboxEl.classList.remove("fa-square-check");
        checkboxEl.classList.add("fa-square");
        task_input_el.style.textDecoration = "none";
        list_el.appendChild(task_el);
        checkAndRemoveCompletedTitle();
      }
    });

  
    function checkAndRemoveCompletedTitle() {
      const hasCompletedElements = completedEl.querySelector(".fa-square-check");
  
      if (!hasCompletedElements) {
        newh2.remove();
      }
    }

    
 

    task_delete_el.addEventListener("click", (e) => {
      completedEl.removeChild(task_el);
   

    });
   
  
  });
});
