const assert = require('chai').assert;
const getFiles = require('../getFiles');
const rewriteImports = require('../rewriteImports');
const fs = require('fs');

describe('getFiles', () => {
    it('should return array', () => {
        assert.isArray(getFiles('./src'))
    });
    it('length should be equal total files count in a directory', () => {
        assert.lengthOf(getFiles('./src'), 7)
    })
    it('should include object with name(name), type(isFile) and path to file(path)', () => {
        assert.includeDeepMembers(getFiles('./src'), [{name: 'main.js', isFile: true, path: './src/main.js'}])
    })
})

describe('rewriteImports', () => {
    it( `Imports in target file doesnt exists relative paths (./ or ../)`, () => {
        assert.notMatch(fs.readFileSync('./src/main.js', 'utf8'), /(^import\s*[\"\'])(\.*\/)/gm)
    })
    it('Function doesnt change fake imports', () => {
        assert.match(fs.readFileSync('./src/main.js', 'utf8'), /(import\s*[\"\'])(\.*\/)/gm)
    })
})