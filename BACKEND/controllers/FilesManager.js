const multer = require('multer');

const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, 'uploads');
    
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});


const upload =  multer({storage})
module.exports = upload;