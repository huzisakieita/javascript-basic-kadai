// ボタンの取得
const clickBtn = document.getElementById('btn');

//テキスト
const clickBtnText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    clickBtnText.textContent = 'ボタンをクリックしました';
  }, 2000);
});