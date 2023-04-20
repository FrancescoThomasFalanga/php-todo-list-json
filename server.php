<?php

if(isset($_POST["newTodo"])) {


    $todosJSON = file_get_contents("todos.json");

    $todos = json_decode($todosJSON);

    $todos[] = [
        "name" => $_POST["newTodo"],
        "status" => "true"
    ];

    $newTodoJSON = json_encode($todos);

    file_put_contents("todos.json", $newTodoJSON);

} elseif(isset($_POST['deleteTask'])){

    $todosJSON = file_get_contents('todos.json');
  
    $todos = json_decode($todosJSON);
  
    array_splice($todos, $_POST['deleteTask'], 1);
  
    $newTodo = json_encode($todos);
  
    file_put_contents('todos.json', $newTodo);
    
} else {

    $getString = file_get_contents("todos.json");
    
    $todos = json_decode($getString);
    
    header("Content-type: application/json");
    
    echo json_encode($todos);

};
