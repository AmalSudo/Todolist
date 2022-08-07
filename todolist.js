window.addEventListener('load', () => {
	const input= document.getElementById("item");
	const form= document.getElementById("list");
	const todolist= document.getElementById("taskslist");

	if(input== ""){
		alert("please enter a task");
	} else{

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_list = document.createElement('div');
		task_list.classList.add('task');

		const list_content = document.createElement('div');
		list_content.classList.add('content');

		task_list.appendChild(list_content);

		const todo = document.createElement('input');
		todo.classList.add('text');
		todo.type = 'text';
		todo.value = task;
		todo.setAttribute('readonly', 'readonly');

		list_content.appendChild(todo);
		

		const button_section = document.createElement('div');
		button_section.classList.add('actions');
		
		const edit = document.createElement('button');
		edit.classList.add('edit');
		edit.innerText = 'Edit';


	
	
const delete_btn = document.createElement('button');
delete_btn.classList.add('delete');
delete_btn.innerText = 'Delete';
	
button_section.appendChild(edit);
button_section.appendChild(delete_btn);
	
task_list.appendChild(button_section);
	
todolist.appendChild(task_list);

	
input.value = '';
	
edit.addEventListener('click', (e) => {
		if (edit.innerText.toLowerCase() == "edit") {
			edit.innerText = "Save";
			todo.removeAttribute("readonly");
			todo.focus();
			} else {
				edit.innerText = "Edit";
				todo.setAttribute("readonly", "readonly");
			}
		});
	
delete_btn.addEventListener('click', (e) => {
		todolist.removeChild(task_list);
		});
});}

		
});