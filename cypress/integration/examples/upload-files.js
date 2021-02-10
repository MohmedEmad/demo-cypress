const requiredExample = require('../../fixtures/example')

describe('Test upload file with cypress',function(){
    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/upload');
    })
    it('upload pdf file',() =>{
        cy.get('#drag-drop-upload').attachFile(
            {
                filePath: 'Engineer.pdf',
                mimeType: 'document/pdf',
                encoding: 'binary'
            },
            {
                subjectType: 'drag-n-drop',
                force: true,
            })
        cy.wait(2000);
        cy.get('#file-submit').click();
    })
    it('upload image file',() =>{
        cy.get('#drag-drop-upload').attachFile(
            {
                filePath: 'Orange.jpg',
                mimeType: 'image/jpg',
                encoding: 'binary'
            },
            {
                subjectType: 'drag-n-drop',
                force: true,
                allowEmpty: true
            })
        cy.wait(2000);
        cy.get('#file-submit').click();
    })
})