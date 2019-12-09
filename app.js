function renderStartMenu() {
	$("main").html(`
	<section class="menuScreen padding-top-medium">
		<h1>Hi! Welcome to our Music quiz. Lets start this if you are ready.</h1>
		<p>Choose your answer carefully <br>
		You can use Google at anytime.<br>
		This will not be graded. Have  fun!		
		</p>
		<button type="button" class="startB">Let's Start!</button>
	</section>
	`)
}

function renderQuestion() {
	let problem = getCurQuestion();
	
	$("main").html(`
	<section class="questionScreen">
		<form class="questionForm">
			<fieldset class="radio">
				<legend>${problem.text}</legend>
				
				<label>
					<input type="radio" value="${problem.choiceOne}" name="answer" required>
					${problem.choiceOne}
				</label>
				<label>
					<input type="radio" value="${problem.choiceTwo}" name="answer" required>
					${problem.choiceTwo}
				</label>
				<label>
					<input type="radio" value="${problem.choiceThree}" name="answer" required>
					${problem.choiceThree}
				</label>
				<label>
					<input type="radio" value="${problem.choiceFour}" name="answer" required>
					${problem.choiceFour}
				</label>
			</fieldset>
			
			<button type="submit">Submit</button>
		</form>
	</section>
	`)
}

function renderAnswer(answer, correctAnswer, explanation) {
	
	// CORRECT ANSWER!
	if(answer == correctAnswer) {
		$("main").html(`
		<section class="answerRightScreen">
			<h1 class="padding-bottom-small">YAY!</h1>
			<div class="bold">Your answer is:</div>
			<div>${correctAnswer}</div>
			<div>${explanation}</div>
			<br>
			<button type="button" class="nextQuestion">Next</button>
		</section>
		`)
	}

	else {
		$("main").html(`
		<section class="answerRightScreen">
			<h1 class="padding-bottom-small">OOPS!</h1>
			<div class="bold">Your answer was:</div>
			<div>${answer}</div>
			<br>
			<div class="bold">The correct answer is:</div>
			<div>${correctAnswer}</div>
			<div>${explanation}</div>
			<br>
			<button type="button" class="nextQuestion">Next</button>
		</section>
		`)
	}
}

function renderFeedback() {
	let won = getScore() == getTotalNumQuestions();
	$("main").html(`
	<section class="feedbackScreen">
		<h1 class="padding-bottom-small">${won ? "Hooray! You made it!" : "Uh-Oh... It is okay. You can try again."}</h1>
		<br><br>
		<div><span class="bold">Final Score</span>: <span class="score">${getScore()}</span>/${getTotalNumQuestions()}</div>
		<br>
		<br>
		<button type="button" class="startB">Play Again</button>
	</section>
	`)
}

function updateScore() {
	$(".score").html(curScore);
	
	let questionNum = curQuestion+1;
	questionNum = Math.min(questionNum, getTotalNumQuestions());
	$(".questionNumber").html(questionNum);
}

function handleStartQuiz() {
	$("main").on("click", ".startB", function(e) {
		curScore = 0;
		curQuestion = 0;
		updateScore();
		renderQuestion();
	});
}

function handleAnswerSubmit() {
	$("main").on("submit", "form", function(e) {
		e.preventDefault();
		
		let answer = $("input[name='answer']:checked", ".questionForm").val();
		let isCorrect = checkAnswer(answer, curQuestion);
		if(isCorrect) {
			curScore++;
			updateScore();
		}
		
		renderAnswer(answer, getCorrectAnswer(curQuestion), getExplanation(curQuestion));
	});
}

function handleNextQuestion() {
	$("main").on("click", ".nextQuestion", function(e) {
		curQuestion++;
		updateScore();
		
		if(curQuestion >= questionSet.length) {
			renderFeedback();
		}
		else {
			renderQuestion();
		}
	});
}

function handleSetup() {
	$(function(){
		handleStartQuiz();
		handleAnswerSubmit();
		handleNextQuestion();
		
		updateScore();
		
		renderStartMenu();
	});
}
handleSetup();

function checkAnswer(answer, questionNumber) {
	let question = questionSet[questionNumber];
	let correctAnswer = getCorrectAnswer(questionNumber);
	return correctAnswer == answer;
}

function getCorrectAnswer(questionNumber) {
	return ANSWERS[questionNumber];
}

function getExplanation(questionNumber) {
	return EXPLANATIONS[questionNumber];
}

function getCurQuestion() {
	return questionSet[curQuestion];
}

function getScore() {
	return curScore;
}

function getTotalNumQuestions() {
	return questionSet.length;
}
