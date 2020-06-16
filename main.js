const mp4Btn = document.getElementById('convert-button');
const URLinput = document.querySelector('.URL-input');
const server = `http://localhost:${PORT}`;


mp4Btn.addEventListener('click', () => {
  console.log(`URL: ${URLinput.value}`);
  redirectMP4(URLinput.value);
});

function redirectMp4(query) {
  windows.location.href = `${server}/downloadmp4?url=${query}`;
}
