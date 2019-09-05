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
      console.log('Your Todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)',this.todos[i].todoTextDescription);
        } else {
          console.log('( )', this.todos[i].todoTextDescription);
      }
    }
  }
},
  addTodo: function(todoText) { // addTodo('hi')
    this.todos.push({
        todoTextDescription: todoText, // todoText property is function paramter todoText
        completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoTextDescription = todoText;
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
  toggleAll: function() {
    todoList.toggleAll();
  }
};
