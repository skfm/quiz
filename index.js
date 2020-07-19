const question = '2020年7月、最も登録者数の多いユーチューバーは？';
const answers = [
  'はじめしゃちょー',
  'Hikakin TV',
  '東海オンエア',
  'ヒカル(Hikaru)'
];
const correct = 'はじめしゃちょー';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  for(let i = 0; i < buttonLength; i++) {
    $button[i].textContent = answers[i];
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
}

for (let i = 0; i < buttonLength; i++) {
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}



