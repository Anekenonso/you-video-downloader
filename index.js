const express = require('express');
const path = require('path');
const cors = require('cors');
const ytdl = require('ytdl-core');
const router = express.Router();

const app = express();

const PORT = process.env.port || 8000

app.use(cors());

app.use('/', router);

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.get('/download', (reg, res) => {
  let url = reg.query.url;
  res.header('content-Disposition', 'attachment; filename="youTube-video.mp4"');
  ytdl(url, {
    format: 'mp4'
  }).pipe(res);
});
