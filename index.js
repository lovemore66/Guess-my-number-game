let play_again = document.querySelector(".playagain");
let question_mark = document.querySelector('.question_mark');
let question = document.querySelector('.question h3');
let input_number = document.querySelector('.input_number').value;
let check_btn = document.querySelector('.check_btn');
let score = document.querySelector('.score');
let high_score = document.querySelector('.high_score');
let start_guessing = document.querySelector(".start_guessing")
let game_score = document.querySelector('.game_score');
let main = document.querySelector('.main');
let pbtn = document.querySelector('.pbtn')
let secret_number =  Math.trunc(Math.random() * 21);
let second_score = 20;

//game_score.textContent = second_score;
check_btn.addEventListener('click', () =>{
    //console.log(secret_number)
    console.log(input_number)
    console.log(secret_number)
    if( !input_number){
        start_guessing.textContent = "NO GUESSED NUMBER";
    }

    else if (input_number === secret_number ) {
    console.log(input_number.value + " " + " 💪 YOU WON THE GAME")
    start_guessing.textContent = "💪 YOU WON THE GAME"
    // if( second_score < 0 ){
    //     start_guessing.textContent = "YOU LOST THE GAME";
    //     main.style.backgroundColor = "RED"
    //     game_score.textContent = `${ "Score: 20"}`;
    //     input_number.value = "";
    //     question.textContent = "?";
    //     secret_number = "";
    //     pbtn.disabled = true
    //     second_score = 20;
    // }
    // else{
    //     start_guessing.textContent = "😰 is too Low";
    //     second_score--
    //     game_score.textContent = `${ "Score: " + second_score}`;
    // }
    // start_guessing.textContent = "🔥 is too High";
    // second_score--;
    // game_score.textContent = `${ "Score: " + second_score}`;
}


    else if (input_number > secret_number){
        console.log(input_number.value  + " " + " 🔥 YOUR GUESS IS TOO HIGH")
        start_guessing.textContent = "🔥 YOUR GUESS IS TOO HIGH";
    // if( second_score < 0 ){
    //     start_guessing.textContent = "YOU LOST THE GAME";
    //     main.style.backgroundColor = "RED"
    //     game_score.textContent = `${ "Score: 20"}`;
    //     input_number.value = "";
    //     question.textContent = "?";
    //     secret_number = "";
    //     second_score = 20;
    //     pbtn.disabled = true
    // }
    // else{
    //     start_guessing.textContent = "😰 is too Low";
    //     second_score--
    //     game_score.textContent = `${ "Score: " + second_score}`;
    // }

    }

    else if (input_number < secret_number){
        console.log('😰 YOUR GUESS IS TOO LOW')
        start_guessing.textContent = "😰 YOUR GUESS IS TOO LOW";
        // question.textContent = secret_number;
        // main.style.backgroundColor = "green"
        // secret_number = "";
        // pbtn.disabled = true

    }
})

play_again.addEventListener('click', () =>{
    //start_guessing.textContent = "Start guessing";
    // main.style.backgroundColor = "black"
    // game_score.textContent = `${ "Score: 20"}`;
    // input_number.value = "";
    // question.textContent = "?";
    // game_score = ""
    // pbtn.disabled = false;
    // //Math.floor(Math.random() * 21) = 0;
    // second_score = 20;
})

console.log(typeof(input_number))
console.log(typeof( secret_number))