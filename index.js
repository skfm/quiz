const question = '2020年7月、最も登録者数の多いユーチューバーは？';
const quiz = [
  {
    question: '2020年7月、最も登録者数が多いユーチューバーは？',  
    answers: [
      'はじめしゃちょー',
      'Hikakin TV',
      'ヒカル(Hikaru)',
      '東海オンエア'
    ],
    correct: 'はじめしゃちょー'
  },

  {
    question: '東海オンエアは何人組のユーチューバーか？',  
    answers: [
      '2人',
      '4人',
      '6人',
      '8人'
    ],
    correct: '6人'
  },

  {
    question: '江頭2:50のYouTube登録者数は約何人か',  
    answers: [
      '100万人',
      '150万人',
      '200万人',
      '250万人'
    ],
    correct: '200万人'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for(let i = 0; i < buttonLength; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i];
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
  }
}

for (let i = 0; i < buttonLength; i++) {
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}



