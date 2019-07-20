function createTodo(todoText) {

    // DECLARATION DOM
    const div = document.createElement('div');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const labelCheckbox = document.createElement('label');
    const spanText = labelCheckbox.cloneNode();
    const btDelete = document.createElement('button');

    // IMBRICATION

    div.appendChild(label);
    label.appendChild(checkbox);
    label.appendChild(labelCheckbox);
    label.appendChild(spanText);
    label.appendChild(btDelete);

    // CONFIGURATION
    div.className = 'todo';
    label.className = 'btn btn-primary'
    checkbox.type = 'checkbox';
    checkbox.id = 'check';
    checkbox.className = 'checkbox';
    labelCheckbox.htmlFor = 'check';
    labelCheckbox.id = 'check';
    spanText.className = 'fas fa-image';
    spanText.textContent = todoText;
    btDelete.className = 'btDelete';
    btDelete.onclick = deleteTodo.bind(div, checkbox);

    document.querySelector('.todoList').appendChild(div);
}

// addTodo()
const form = document.formAddTodo;

form.addEventListener('submit', function(e) {
    e.preventDefault(); // empêche le navigateur de faire 1 appel serveur
    const todo3 = form.AddTodo.value;
    if (todo3.length > 0) {
        createTodo(todo3.trim());
        form.reset();
    }
});

// deleteTodo()
function deleteTodo(checkbox) {
    let remove = true;

    if (!checkbox.checked) {

        remove = confirm('La tâche est en cours, \nVoulez-vous vraiment la supprimer ?');
    }

    if (remove) this.parentElement.removeChild(this);

}

/*
---------------------------------------------

// ARBORESCENCE HTML (ancienne) cf index02.html
section #component
    h1 #todos-label
    ul
        li
            input.vh type:checkbox
            label   
                span.tick
                span.text
            button type:delete
                img.track
    div.empty-delete
        p ""
    form
        label.vh
        input #add type:text placeholder:"" true
        button type:submit
    div.vh 
--------------------------
// ARBORESCENCE HTML pour le DOM
div.component
    header
        h1 #todosLabel
        
    div.todoList // ul
        div.todo // li
            input.vh type="checkbox"
            label
                span.tick
                span.text
            button.btDelete type="delete"
                img.track

    div.addTodo
        form name="add"
            label.vh
                input.add type="text" placeholder="Write a new todo item"
                button type="submit"
                

--------------------------
// ARBORESCENCE HTML pour le DOM : toDo
    1- DECLARATION 
        const div --> div.todo
        const checkbox --> input.vh type="checkbox" 
        const label --> label
        const spantick --> span.tick
        const spantext --> span.text
        const btDelete --> button.btDelete
*/

/*
----------------------------------------------
var app = new Vue({
    el: '.todoList',
    data: {
        todoText: [],
        addContent: '',
    },
    methods: {
        add(e) {
            e.preventDefault();
            this.todoText.push({
                name: this.addContent,
                done: false
            });
            this.feedback = `${this.addContent} added`;
            this.addContent = '';
        },
        remove(index, name) {
            this.todoText.splice(index, 1);
            document.getElementById('component').focus();
            this.feedback = `${name} deleted`;
        }
    },
    computed: {
        validity() {
            return this.addContent.trim() === '';
        }
    }
});
*/