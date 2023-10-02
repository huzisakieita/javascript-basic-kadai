const clickBtn = document.getElementById('btn');
const clickBtnText = document.getElementById('text');

//クリック操作による変更
clickBtn.addEventListener('click', () => {
  clickBtnText.textContent = 'ボタンをクリックしました';
});