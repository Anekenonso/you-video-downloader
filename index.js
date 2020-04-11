const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

app.listen(4000, ()=> {
    console.log('server running on port 4000');
});

// get mp4 file download
app.get('/downloadmp4', (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);/*.pipe(fs.createWriteStream('video.flv'));*/
});


// get mp3 download
app.get('/downloadmp3', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="audio.mp3" ');
    ytdl(URL, {
        format: 'mp3',
        filter: 'audioonly'
    }).pipe(res);
});