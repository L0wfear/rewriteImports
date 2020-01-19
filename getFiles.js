const fs = require('fs');

const getFiles = (src) => {
    const result = [];
    fs.readdirSync(src, { withFileTypes: true }).map(d => {
        if(!d.isDirectory()) {
            result.push({ name: d.name, isFile: d.isFile(), path: `${src}/${d.name}`})
        }

        else {
            const directory = getFiles(`${src}/${d.name}`);
            for (const file of directory.values()) {
                result.push(file)
            }
        }
    })

    return result
}

module.exports = getFiles;