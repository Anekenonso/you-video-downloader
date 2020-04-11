var mp3Btn = document.getElementById('mp3');
var mp4Btn = document.getElementById('mp4');
//var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');


//server to connect to for download
var server = 'http://localhost:4000';


// convert to mp3
mp3Btn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
      redirectMp3(URLinput.value);
});


//convert to mp4
mp4Btn.addEventListener('click', () =>{
      console.log(`URL: ${URLinput.value}`);
      redirectMp4(URLinput.value);
});

//getting mp3
function redirectMp3(query) {
  window.location.href = `${server}/downloadmp3?url=${query}`;
}

// getting mp4
function redirectMp4(query) {
  window.location.href = `${server}/downloadmp4?url=${query}`;
}
