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

} else {

    $getString = file_get_contents("todos.json");
    
    $todos = json_decode($getString);
    
    header("Content-type: application/json");
    
    echo json_encode($todos);

};
