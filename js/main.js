'use strict'

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  
  const quizSet = shuffle ([
    {q: 'Which of the following language of computer was invented the earliest?', c:['Python', 'JavaScript', 'HTML', 'Ruby']},
    {q: 'What does HTML stands for?', c:['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language']},
    {q: 'What is the correct sequence of HTML tags for starting a webpage?', c:['HTML, Head, Title', 'Title, Head, HTML', 'Head, Title, HTML', 'HTML, Title, Head']},
    {q: 'How can you make a list that lists the items with numbers?', c:['OI', 'DI', 'UI', 'List']},
    {q: 'How can you make a list that lists the items with bullets?', c:['UI', 'DI', 'OI', 'List']},
    {q: 'What is the font-size of the h1 heading tag?', c:['2em / 24px', '1.5em / 18px', '2.15em / 26px', '3em / 36px']},
    {q: 'Which of the following attributes is used to add link to any element?', c:['href', 'ref', 'link', 'newref']},
    
    {q: 'Which of the following language of computer was invented the earliest?', c:['Python', 'JavaScript', 'HTML', 'Ruby']},
  ]);

  let currentNum = 0;
  let isAnswered;
  let score = 0;

  



  function checkAnswer(li) {
    // if (isAnswered === true) {
    if (isAnswered) {
      return;
    }
      isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      // console.log('correct');
      li.classList.add('correct');
      score++;
    } else {
      // console.log('wrong');
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');

  }




  function shuffle(arr) {
    for (let i = arr.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }




  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild){
      choices.removeChild(choices.firstChild);
    }

    const shuffleChoices = shuffle([...quizSet[currentNum].c]);
    // console.log(quizSet[currentNum].c);
    shuffleChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length -1) {
      btn.textContent = 'Show Score';
    }
  }


  setQuiz();




  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length -1) {
      // console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden'); //hide
    } else {
      currentNum++;
      setQuiz();
    }
  });


} 
