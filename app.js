document.documentElement.className = 'no-fouc';

const STORE = {
	questioning: 0,
	yourAnswer: null,
	questions: [{
					problem: 'Hi! Welcome to our Music quiz. Lets start this if you are ready.',
					choices: ['Choose your answer carefully', 'You can use Google at anytime.', 'This will be not graded and have a fun!'],
					yourPick: null,
					correctAnswer: null,
					r: null
				},{
					problem:'Billie Eilish been writing music since she was ___.',
					choices: [5, 9, 11, 16],
					yourPick: null,
					correctAnswer: 2,
					r: null
				},{
					problem: '___ started rapping under the name “JayOhVee”, but eventually changed it to ___.',
					choices: ['Lil Uzi', '21 Savage', '6IX9INE', 'Joey Bada$$'],
					yourPick: null,
					correctAnswer: 3,
					r: null
				},{
					qproblem: 'Lil Yachty used to work at ___.',
					choices: ['Bdubs', 'Red Lobster', 'Taco Bell', 'McDonald’s'],
					yourPick: null,
					correctAnswer: 3,
					r: null
				},{
					problem: 'What year did A Tribe Called Quest release their last studio album?',
					choices: [1991, 1993, 1998, 2016],
					yourPick: null,
					correctAnswer: 3,
					r: null
				},{
					problem: 'How many albums did Prince release before his death?',
					choices: [5, 39, 76, 102],
					yourPick: null,
					correctAnswer: 1,
					r: null
				},{
					problem: 'What is the genre of music that combines reggae and punk rock?',
					choices: ['Afro-Punk', 'Metal', 'Ska', 'Grindcore'],
					yourPick: null,
					correctAnswer: 2,
					r: null
				},{
					problem: 'Great work son! Now, Let see how many you got here:',
					choices: [],
					yourPick: null,
					correctAnswer: null
				}]
	};

function renderQA(){
	var questioning = STORE.questioning;
	$('#count').text('Question '+questioning+' of '+(STORE.questions.length-2));
	$('#question').text(STORE.questions[questioning].problem);
	$('#result').hide();
	initSelection();

	if(questioning == 0){
		$('#count').css('visibility', 'hidden');
		STORE.questions[questioning].choices.forEach(function(answer, index){
			var introHTML = `<p>${answer}</p>`;
			$('#intro').append(introHTML);
		});
		$('.radio-item').hide();
		$('#button-submit').show().text('START!');
		$('#button-continue').hide();
	}
	else if(questioning == 7){
		$('#count').css('visibility', 'hidden');
		getResults();
		for (i = 1; i < STORE.questions.length-1; i++){
				var results = {
					n: i,
					problem: STORE.questions[i].problem,
					correctAnswer: STORE.questions[i].choices[STORE.questions[i].correctAnswer],
					yourPick: STORE.questions[i].choices[STORE.questions[i].yourPick],
					r: STORE.questions[i].r
				}
			var resultsHTML = `<p class="results-p"><span class="results-number">${results.n}.</span> <span class="results-question">${results.problem}</span><br>Correct Answer: <span class="results-correct">${results.correctAnswer}</span><br>Your Answer: <span class="results-user">${results.yourPick}</span><br>Result: <span class="results-result">${results.r}</span></p>`;
			$('.radio-item').hide();
			$('#end-results').hide();
			$('#end-results').append(resultsHTML);
			$('#end-results').fadeIn();
			$('#button-submit').show().text('Restart');
			$('#button-continue').hide();
		};
	}
	else{
		$('#count').css('visibility', 'visible');
		$('#intro').hide();
		$('.radio-item').fadeIn();
		STORE.questions[questioning].choices.forEach(function(answer, index){
			$('label[for="answer-'+index+'"]').text(answer);
		});
		$('#button-submit').show().text('ENTER');
		$('#button-continue').hide();
	}
	console.log('questioning is: '+questioning);
} 

function initSelection(){
	$('input[type=radio]:first').prop('checked', true);
	getUserAnswer();
}

function startListeners(form){
	form.on('change','input[type=radio]', getUserAnswer)
		.on('submit', handleSubmit);
}

function getUserAnswer(event){
	STORE.yourAnswer = Number($('input:checked').val());
	return STORE.yourAnswer;
}

function handleSubmit(event){
	event.preventDefault();

	if(STORE.questioning == 7 ){
		console.log('RESTART');
		window.location.href='';
	}
	else if(STORE.questioning == 0){
		console.log('BEGIN');
		renderQA(STORE.questioning += 1);
	}
	else{
		console.log('SUBMIT');
		storeUserAnswer(getUserAnswer());
		checkUserAnswer(getUserAnswer());
	}
}

function storeUserAnswer(answer){
	STORE.questions[STORE.questioning].yourPick = answer;
}	

function checkUserAnswer(userAnswer){
  if(userAnswer == STORE.questions[STORE.questioning].correctAnswer){
		STORE.questions[STORE.questioning].r = 'Correct';
		console.log('YAY!');
		$('#result').removeClass('incorrect').addClass('correct');
		displayResult('YAY!')
	}
	else {
		STORE.questions[STORE.questioning].r = 'Incorrect';
		console.log('OOPS!');
		$('#result').removeClass('correct').addClass('incorrect');
		displayResult('OOPS!')
	}
}

function displayResult(result){
	$('.radio-item').hide();
	$('#button-submit').hide();
	$('#result').fadeIn();
	$('#result > p').text(result);
	$('#button-continue').show().unbind('click').click(function(e){
		e.preventDefault();
		console.log('questioning +1')
		renderQA(STORE.questioning += 1);

	});
}

function getResults(){
	var resultsArray=[];
	for(i = 1 ; i < STORE.questions.length-1; i++){
		var question = STORE.questions[i].problem;
		var answerNum = STORE.questions[i].yourPick;
		var answerStr = STORE.questions[i].choices[answerNum];
		resultsArray.push( {problem:question, choices:answerStr} );
	}
	return STORE.questions[7].choices = resultsArray;
}

$(function(){
	renderQA();
	startListeners($('form'));
	$('.no-fouc').removeClass('no-fouc');
});
/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 */