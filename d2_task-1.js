const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];


tasks.forEach((item) => {
    const newTaskList = document.createElement('div');
    newTaskList.className = 'task-item';
    newTaskList.dataset.taskId = item.id;
    const newTaskItemMainContainer = document.createElement('div');
    newTaskItemMainContainer.className = 'task-item__main-container';
    const newTaskItemMainContent = document.createElement('div');
    newTaskItemMainContent.className = 'task-item__main-content';
    const newForm = document.createElement('form');
    newForm.className = 'checkbox-form';
    const newInput = document.createElement('input'); 
    newInput.className = 'checkbox-form__checkbox';
    newInput.type = 'checkbox';
    newInput.id = item.id;
    const newLabel = document.createElement('label');
    newLabel.htmlFor = item.id;
    const newSpan = document.createElement('span');
    newSpan.textContent = item.text;
    const newButton = document.createElement('button');
    newButton.className = 'task-item__delete-button default-button delete-button';
    newButton.textContent = 'Удалить';
    const TaskList = document.querySelector('.tasks-list');
    TaskList.append(newTaskList);
    newTaskList.append(newTaskItemMainContainer);
    newTaskItemMainContainer.append(newTaskItemMainContent);
    newTaskItemMainContainer.append(newButton);
    newTaskItemMainContent.append(newForm);
    newForm.append(newInput);
    newForm.append(newLabel);
    newTaskItemMainContent.append(newSpan);
});

const form = document.querySelector('.create-task-block');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = event.target.elements.taskName.value;
    console.log(event.target.elements.taskName.value);
    const newTasks = (id, completed, text) => {
            id = String(Date.now());
            completed = false;
            text = newTask;
            const newTaskList = document.createElement('div');
            newTaskList.className = 'task-item';
            newTaskList.dataset.taskId = id;
            const newTaskItemMainContainer = document.createElement('div');
            newTaskItemMainContainer.className = 'task-item__main-container';
            const newTaskItemMainContent = document.createElement('div');
            newTaskItemMainContent.className = 'task-item__main-content';
            const newForm = document.createElement('form');
            newForm.className = 'checkbox-form';
            const newInput = document.createElement('input'); 
            newInput.className = 'checkbox-form__checkbox';
            newInput.type = 'checkbox';
            newInput.id = id;
            const newLabel = document.createElement('label');
            newLabel.htmlFor = id;
            const newSpan = document.createElement('span');
            newSpan.textContent = text;
            const newButton = document.createElement('button');
            newButton.className = 'task-item__delete-button default-button delete-button';
            newButton.textContent = 'Удалить';
            const TaskList = document.querySelector('.tasks-list');
            TaskList.append(newTaskList);
            newTaskList.append(newTaskItemMainContainer);
            newTaskItemMainContainer.append(newTaskItemMainContent);
            newTaskItemMainContainer.append(newButton);
            newTaskItemMainContent.append(newForm);
            newForm.append(newInput);
            newForm.append(newLabel);
            newTaskItemMainContent.append(newSpan);
        return tasks.push({id, completed, text})
    };
    newTasks();
    console.log(tasks)
})




    