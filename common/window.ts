import * as fs from 'fs';

export function openDir(){
    fs.readdir('/path/to/directory', (err, files) => {
        if (err) {
          console.error("An error occurred:", err);
        } else {
          console.log(files);
        }
      });
}