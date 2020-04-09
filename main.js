var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
      sendURL(URLinput.value);
});

function sendURL(URL) {
    
  fetch(`https://yvd.netlify.com/?URL=${URL}`, {
    method: 'GET'
  }).then(res => res.json())
  .then(json => console.log(json));
  

  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
