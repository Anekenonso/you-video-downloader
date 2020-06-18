const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

const PORT = process.env.port || 3000

app.use(cors());

app.listen(PORT, () => {
  //console.log(`server running on port ${PORT}`);
});

app.get('/download', async (req, res, next) => {
  try {
  var URL = req.query.url;
  let title = 'video';

  await ytdl.getBasicInfo(URL, {
    format: 'mp4'
  }, (err, info) => {
    title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
  });

  res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);

  ytdl(URL, {
    format: 'mp4'
  }).pipe(res);

} catch (err) {
   console.error(err);
 }

});

