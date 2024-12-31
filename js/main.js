window.onload = () => {
  // Memulai pemutaran musik segera setelah halaman dimuat
  const audio = document.getElementById('background-music');
  audio.play(); // Memastikan musik dimulai

  // Animasi teks "I LOVE U"
  const titles = ('I LOVE U').split('');
  const titleElement = document.getElementById('title');
  let index = 0;

  function appendTitle() {
    if (index < titles.length) {
      titleElement.innerHTML += titles[index];
      index++;
      setTimeout(appendTitle, 300); // Setiap karakter muncul dengan delay 300ms
    }
  }

  appendTitle();

  // Menghapus kelas "not-loaded" setelah teks mulai muncul
  document.body.classList.remove("not-loaded");
};