import { Injectable } from "@nestjs/common";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
//import * as toStream from "buffer-to-stream"
// import { PassThrough } from 'stream';
const toStream = require ("buffer-to-stream")

@Injectable()
export class CloudinaryService {

    private extractPublicId(secureUrl: string): string {
        const parts = secureUrl.split('/');
        const versionAndId = parts.slice(-2).join('/'); // Obtener la parte final del URL
        return versionAndId.replace(/v\d+\//, '').split('.')[0]; // Remover la versión y extensión
      }

    async uploadImage (file: Express.Multer.File): Promise<UploadApiResponse> {
        return new Promise((resolve,reject) => {
                    const upload = cloudinary.uploader.upload_stream(
                        { resourse_type: "auto"},
                        (error, result) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        },
                    );
                    toStream(file.buffer).pipe(upload);
                    //  const bufferStream = new PassThrough();
                    //  bufferStream.end(file.buffer);
                    //  bufferStream.pipe(upload);
             })
    }

    async deleteImage(img: string): Promise<any> {
        return new Promise((resolve, reject) => {
          const publicId =  this.extractPublicId(img) 
          cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      }
}