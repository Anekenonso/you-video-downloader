const convertBtn = document.getElementById('button');
const URLinput = document.querySelector('.URL-input');


convertBtn.addEventListener('click', () =>{
  if (!URLinput.value) {
		alert('Enter YouTube URL');
	} else {
    sendURL(URLinput.value);
  }
	
});

function sendURL(query) {
    
 /* fetch(`https://localhost:3000/download?URL=${URL}`, {
    method: 'GET'
  }).then(res => res.json())
  .then(json => console.log(json));
  */

  window.location.href = `http://localhost:3000/download?
  URL=${query}`;

}
