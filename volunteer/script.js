document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskTableBody = document.querySelector('#taskTable tbody');
    const notification = document.getElementById('notification');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const volunteerName = document.getElementById('volunteerName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('dueDate').value;
        const volunteerEmail = document.getElementById('volunteerEmail').value;
        const volunteerPhone = document.getElementById('volunteerPhone').value;

        const task = {
            volunteerName: volunteerName,
            taskDescription: taskDescription,
            dueDate: dueDate,
            status: 'Pending',
            volunteerEmail: volunteerEmail,
            volunteerPhone: volunteerPhone
        };

        addTaskToTable(task);
        showNotification(`Task assigned to ${volunteerName}`);
        taskForm.reset();
    });

    function addTaskToTable(task) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.volunteerName}</td>
            <td>${task.taskDescription}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>
                <a href="mailto:${task.volunteerEmail}">${task.volunteerEmail}</a><br>
                <a href="tel:${task.volunteerPhone}">${task.volunteerPhone}</a>
            </td>
            <td><button class="delete" onclick="deleteTask(this)">Delete</button></td>
        `;
        taskTableBody.appendChild(row);
    }

    window.deleteTask = function (button) {
        const row = button.closest('tr');
        row.remove();
        showNotification('Task deleted');
    };

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
});
