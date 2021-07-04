import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

//Caminho para a pasta ondeas imagens vão ficar salvas
const tmpfolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {

    directory: tmpfolder,
    //Configurações para salvar imagens no através do multer
    storage: multer.diskStorage({
        destination: tmpfolder,
        filename(request, file, callback){
            
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
        
            return callback(null, fileName);
        }
    }),
}