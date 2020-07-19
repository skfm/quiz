const question = '2020年7月、最も登録者数の多いユーチューバーは？';
const answers = [
  'はじめしゃちょー',
  'Hikakin TV',
  '東海オンエア',
  'ヒカル(Hikaru)'
];
const correct = 'はじめしゃちょー';

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];