	$(function() {
		
		var $begin = $('.begin h2');
		var $beginDiv = $('.begin');
		var $questions = $('.questions');
		var $options = $('.options');
		var $main = $('section.main');
		var $footer = $('footer');
		
		$main.hide();
		$footer.hide();
		
		var manifesto = [
			{
				question: "Where are you from?",
				answers: ['A small town', 'The suburbs', 'The country', 'The city', 'Undefinable / Not Sure']
			},
			{
				question: "What is your favourite place?",
				answers: ['At home','In dreams', 'With others', 'In nature', 'Other', 'Scenic retreat']
			},
			{
				question: "What do you like to do in your spare time?",
				answers: ['Indulge', 'Be creative', 'Group activities', 'Cooking', 'Quiet time alone']
			},
			{
				question: "What is your greatest skill?",
				answers: ['Powerful imagination', 'Hospitality', 'Blending in', 'Physical strength', 'Strong will']
			},
			{
				question: "How would you describe your relationship with your parents?",
				answers: ['I didn\'t know them', 'I\'m close to my mother', 'I can\'t remember...', 'We\'re close', 'What are parents?', 'I had a normal upbringing']
			},
			{
				question: "What do you value most in life?",
				answers: ['The pursuit of pleasure', 'Quality family time', 'Trying new things', 'Creative freedom', 'Solitary pursuits']
			},
			{
				question: "Which of the following philosophies do you agree with?",
				answers: ['Family first', 'Follow your dreams', 'Do what thou wilt', 'Always be open to change', 'Sanctity in solitude']
			},
		];
		
		
		var villainScore = {
		norman: 0,
		freddy: 0,
		jason: 0,
		michael: 0,
		leatherface: 0,
		thing: 0,
		pinhead: 0,
		jack: 0
	};
		
//		quiz will do the following: call items from manifesto, modify html to make questions/options appear, get input from user which will add points to the villainScore
  k = 0;
	result = '';
	resultFull = '';

	
	function reStart() {
		$questions.html(`You are ${resultFull}.<br>Sweet dreams...<div class="wrapper"><img src="assets/${result}Web.jpg"><br>Play again?</div>`);
//		reset scoreboard
		for (var key in villainScore){
			villainScore[key] = 0;
		};
				
//		give yes or no choices to restart
		
		$options.html( '<li data-class="yes">Yes</li><li data-class ="no">No</li>' );
		
		$options.on('click', 'li', function(){
			
			var ynChoice = $(this).data();
			
			if (ynChoice.class === 'yes'){
				$questions.html('');
				$options.html('');
				k = 0;
				quizInc();
			}
			else if (ynChoice.class === 'no'){
				$questions.html( 'Until next time...' );
				$options.html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://slashers.club" data-text="see which #horror #villain you are! #halloween #quiz by @julianmeanchoff & @giordancodes" data-via="giordancodes" data-related="julianmeanchoff">Tweet</a>');
			}
		});
		
	};
	
	function quizInc(){

		$($questions).html(manifesto[k].question);
		for (var l = 0; l < manifesto[k].answers.length; l++){
			$($options).append(`<li data-score="${l}">${manifesto[k].answers[l]}</li>`);
		}
	};
		//			after clicking, score is added to and lis are removed, then appended with next batch of answers

		//Look for an event on an li that lives in the .options ul.
	$options.on('click', 'li',function(){
		var choice = $(this).data('score');
		$options.html('');
			
//			tally score with a series of if statements 7 times	

		if (k === 0 && choice === 0){
			villainScore.jason ++;
		}
		else if (k === 0 && choice === 1){
			villainScore.michael ++;
		}
		else if (k === 0 && choice === 2){
			villainScore.leatherface ++;
		}
		else if (k === 0 && choice === 3){
			villainScore.jack ++;
			villainScore.norman ++;
		}
		else if (k === 0 && choice === 4){
			villainScore.freddy ++;
			villainScore.thing ++;
			villainScore.pinhead ++;
		}
		else if (k === 1 && choice === 0){
			villainScore.norman ++;
			villainScore.leatherface ++;
			villainScore.michael ++;
		}
		else if (k === 1 && choice === 1){
			villainScore.freddy ++;
		}
		else if (k === 1 && choice === 2){
			villainScore.thing ++;
		}
		else if (k === 1 && choice === 3){
			villainScore.jason ++;
		}
		else if (k === 1 && choice === 4){
			villainScore.pinhead ++;
		}
		else if (k === 1 && choice === 5){
			villainScore.jack ++;
		}
		else if (k === 2 && choice === 0){
			villainScore.pinhead ++;
		}
		else if (k === 2 && choice === 1){
			villainScore.freddy ++;
			villainScore.jack ++;
		}
		else if (k === 2 && choice === 2){
			villainScore.thing ++;
		}
		else if (k === 2 && choice === 3){
			villainScore.leatherface ++;
		}
		else if (k === 2 && choice === 4){
			villainScore.jason ++;
			villainScore.michael ++;
			villainScore.norman ++;
		}
		else if (k === 3 && choice === 0){
			villainScore.freddy ++;
			villainScore.jack ++;
		}
		else if (k === 3 && choice === 1){
			villainScore.leatherface ++;
			villainScore.norman ++;
		}
		else if (k === 3 && choice === 2){
			villainScore.thing ++;
		}
		else if (k === 3 && choice === 3){
			villainScore.jason ++;
			villainScore.michael ++;
		}
		else if (k === 3 && choice === 4){
			villainScore.pinhead ++;
		}
		else if (k === 4 && choice === 0){
			villainScore.freddy ++;
		}
		else if (k === 4 && choice === 1){
			villainScore.norman ++;
			villainScore.jason ++;
		}
		else if (k === 4 && choice === 2){
			villainScore.pinhead ++;
		}
		else if (k === 4 && choice === 3){
			villainScore.leatherface ++;
			villainScore.michael ++;
		}
		else if (k === 4 && choice === 4){
			villainScore.thing ++;
		}
		else if (k === 4 && choice === 5){
			villainScore.jack ++;
		}
		else if (k === 5 && choice === 0){
			villainScore.pinhead ++;
		}
		else if (k === 5 && choice === 1){
			villainScore.leatherface ++;
			villainScore.norman ++;
//			villainScore.jack ++;
		}
		else if (k === 5 && choice === 2){
			villainScore.thing ++;
		}
		else if (k === 5 && choice === 3){
			villainScore.freddy ++;
		}
		else if (k === 5 && choice === 4){
			villainScore.jason ++;
			villainScore.michael ++;
		}
		else if (k === 6 && choice === 0){
			villainScore.norman ++;
			villainScore.jack ++;
			villainScore.leatherface ++;
		}
		else if (k === 6 && choice === 1){
			villainScore.freddy ++;
		}
		else if (k === 6 && choice === 2){
			villainScore.pinhead ++;
		}
		else if (k === 6 && choice === 3){
			villainScore.thing ++;
		}
		else if (k === 6 && choice === 4){
			villainScore.jason ++;
			villainScore.michael ++;
		}

//		increment to next question
		k++;
		
		
		if (k < 7){
			quizInc();
		}

		else{
//			flip key and value in villainScore object
			var invert = function (object) {
			var new_object = {};
			for (var prop in object) {
				if(object.hasOwnProperty(prop)) {
					new_object[object[prop]] = prop;
				}
			}
//			console.log(new_object);
			return new_object;
		};
//			end flip
			
//			process winner!
			
			var flipScore = invert(villainScore);
			flipScore = invert(flipScore);
			flipScore = Object.keys(flipScore);
			var winner = flipScore.pop();
//			console.log(winner);
			result = winner;
			
//			change result into proper spelling of name
			
			if (result === 'norman'){
				resultFull = 'Norman Bates';
			}
			else if (result === 'freddy'){
				resultFull = 'Freddy Krueger';
			}
			else if (result === 'jason'){
				resultFull = 'Jason Voorhees';
			}
			else if (result === 'michael'){
				resultFull = 'Michael Myers';
			}
			else if (result === 'leatherface'){
				resultFull = 'Leatherface';
			}
			else if (result === 'thing'){
				resultFull = 'The Thing';
			}
			else if (result === 'pinhead'){
				resultFull = 'Pinhead';
			}
			else if (result === 'jack'){
				resultFull = 'Jack Torrance';
			}
			reStart();
		}
		
	}); 
	//end of click

//		click to hide & begin
		
		$begin.on('click', function(e){
			$begin.fadeOut('slow');
			$beginDiv.hide();
			$main.fadeIn( 5000 );
			$footer.fadeIn( 5000 );
			quizInc();
		});
		
		
	});