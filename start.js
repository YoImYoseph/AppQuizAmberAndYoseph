const STORE = {
	questioning: 0,
	yourAnswer: null,
	questions: [{
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


function startQuiz () {
    $('main').html(`<div><h1>startQuiz</h1><button id='start'>start</button></div>`)
}

function handleStart () {
    $('main').on('click','#start',function(){
        $('main').html(`<h2>${STORE.questions[STORE.questioning].problem} </h2>`)
    })
}

$(function(){
	startQuiz();
	handleStart();
});