const pdf = require('./createPdf');

pdf.createPdfToFile('test.ejs', 'test', { title: 'Hello World!' });