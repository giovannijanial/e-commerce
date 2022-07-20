import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const storage = {
  storage: diskStorage({
    destination: './uploads/imgs-product',
    filename: (req, file, cb) => {
      const filename = `${file.originalname.substring(
        0,
        file.originalname.length - 4,
      )}-${uuidv4()}`;
      const extension = `${extname(file.originalname)}`;

      cb(null, `${filename}${extension}`);
    },
  }),
};
