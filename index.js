const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const PORT = process.env.PORT || 4000;
const app = express();

app.listen(PORT, ()=> {
    console.log('server running on port 4000');
});

app.get('download', (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);/*.pipe(fs.createWriteStream('video.flv'));*/
});
