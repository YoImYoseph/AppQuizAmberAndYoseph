document.documentElement.className = 'no-fouc';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  beginingP: 0,
  currentA: null,
  questions: [
    {
      question: 'Billie Eilish been writing music since she was ___.',
      correctAnswer: 2,
      answers: [
        5,
        9,
        11,
        16
      ]
    },

    {
      question: '___ started rapping under the name “JayOhVee”, but eventually changed it to ___.',
      correctAnswer: 3,
      answers: [
        'Lil Uzi',
        '21 Savage',
        '6IX9INE',
        'Joey Bada$$'
      ]
    },

    {
      question: 'Lil Yachty used to work at ___.',
      correctAnswer: 3,
      answers: [
        'Bdubs',
        'Red Lobster',
        'Taco Bell',
        'McDonald’s'
      ]
    },
    
  ],
  questionNumber: 0,
  score: 0
};

function renderQA(){
	var beginingP = STORE.beginingP;
	$('#count').text('Question '+beginingP+' of '+(STORE.questions.length-2));
	$('#question').text(STORE.questions[beginingP].q);
	$('#result').hide();
  initSelection();
  
if(beginingP == 0){
	$('#count').css('visibility', 'hidden');
		STORE.questions[beginingP].a.forEach(function(answer, index){
			var introHTML = `<p>${answer}</p>`;
	$('#intro').append(introHTML);
		});
	$('.radio-item').hide();
	$('#button-submit').show().text('Begin');
	$('#button-continue').hide();
	}

else if(currentQ == 11){ // END
	$('#count').css('visibility', 'hidden');
	getResults();
	for (i = 1; i < STORE.questions.length-1; i++){ // Render answers to radio labels
		var results = {
			n: i,
			q: STORE.questions[i].q,
			c: STORE.questions[i].a[STORE.questions[i].c],
			u: STORE.questions[i].a[STORE.questions[i].u],
			r: STORE.questions[i].r
    }
			var resultsHTML = `<p class="results-p"><span class="results-number">${results.n}.</span> <span class="results-question">${results.q}</span><br>Correct Answer: <span class="results-correct">${results.c}</span><br>Your Answer: <span class="results-user">${results.u}</span><br>Result: <span class="results-result">${results.r}</span></p>`;
			$('.radio-item').hide();
			$('#end-results').hide();
			$('#end-results').append(resultsHTML);
			$('#end-results').fadeIn();
			$('#button-submit').show().text('Restart');
			$('#button-continue').hide();
		};
	}



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
 *
 */