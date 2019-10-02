// Code goes here
// todoList is an object
var todoList = {
  // todos is a property of todoList
  todos: [],
  // when functions are methods they don't need to be named
  // when running the fuction, we will use property name instead (displayTodos)
  displayTodos: function() {
    // 'this' refers to a property inside current object (todoList)
    // this.todos gets todos property from todoList (removed because no need to print object info to console)
    if (this.todos.length === 0) {
      console.log("Your Todo list is empty!");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    // addTodo('hi')
    this.todos.push({
      todoText: todoText, // todoText property is function paramter todoText
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    // var todo saves some typing and makes for easier reading
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 1: If everything true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Case 2: Otherwise, make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// Called handlers because object handles different events
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    // Clears input so that next value can be added
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoTextPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput = "";
    changeTodoTextInput = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};

var view = {
  displayTodos: function () {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = ''
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      // (x) todoText
      // var todoTextWithCompletion = '';
      // if (todo.completed === true)
        // (x) todoText
      // else
        // () todoText
      // todoLi.textContent = todoTextWithCompletion;
      
      todoLi.textContent = todoList.todos[i].todoText;
      todosUl.appendChild(todoLi);
    }
  }
};
