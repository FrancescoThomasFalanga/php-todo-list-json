<?php

if(isset($_POST["newTodo"])) {


    $todosJSON = file_get_contents("todos.json");

    $todos = json_decode($todosJSON);

    $todos[] = [
        "name" => $_POST["newTodo"],
        "status" => "false"
    ];

    $newTodoJSON = json_encode($todos);

    file_put_contents("todos.json", $newTodoJSON);

} elseif(isset($_POST['deleteTask'])){

    $todosJSON = file_get_contents('todos.json');
  
    $todos = json_decode($todosJSON);
  
    array_splice($todos, $_POST['deleteTask'], 1);
  
    $newTodo = json_encode($todos);
  
    file_put_contents('todos.json', $newTodo);
    
} elseif(isset($_POST['toggleTodo'])) {

    $todosJSON = file_get_contents('todos.json');
  
    $todos = json_decode($todosJSON);
  
    if ($todos[$_POST['toggleTodo']] -> status == "true") {

        $todos[$_POST['toggleTodo']] -> status = "false";

    } elseif ($todos[$_POST['toggleTodo']] -> status == "false") {

        $todos[$_POST['toggleTodo']] -> status = "true";

    };
  
    $newTodo = json_encode($todos);
  
    file_put_contents('todos.json', $newTodo);

} else {
    
    $getString = file_get_contents("todos.json");
    
    $todos = json_decode($getString);
    
    header("Content-type: application/json");
    
    echo json_encode($todos);

};
