function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    actual_answer = parse_Int(number1) * parse_Int(number2);

    question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id = 'input_check_box'></br>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;



    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "quiz_game_page.html";
}

