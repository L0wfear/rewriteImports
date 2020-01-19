const fs = require('fs');
const path = require('path');

const rewriteImportsPaths = (func, src) => {
    const files = func(src);
    
    for (const file of files) {
        if (path.extname(file.path) === '.js') {
         const regex = /(^import\s*[\"\'])(\.*\/)/gm;
         let initialFileData = fs.readFileSync(file.path, 'utf8');
         if(initialFileData.match(regex)) {
            let changedFileData = initialFileData.replace(regex, '$1');

            fs.writeFile(file.path, changedFileData, (err) => {
                if(err) throw err;
                console.log(`File ${file.name} updated successfully!`)
            })
         }
         
        } 
     }
}

module.exports = rewriteImportsPaths;