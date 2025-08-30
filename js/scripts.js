<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', () => {
  // すでに表示したかをlocalStorageで確認
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    alert('自己紹介サイトへようこそ！');
    console.log('自己紹介サイトへようこそ！');
    localStorage.setItem('hasVisited', 'true'); // 表示済みの印を保存
  }
});
=======
window.addEventListener('DOMContentLoaded', () => {
  // すでに表示したかをlocalStorageで確認
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    alert('自己紹介サイトへようこそ！');
    console.log('自己紹介サイトへようこそ！');
    localStorage.setItem('hasVisited', 'true'); // 表示済みの印を保存
  }
});
>>>>>>> 16040523370adb25a7ab15bd3092cf0211ebbad6
