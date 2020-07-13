const pdf = require('html-pdf');
const ejs = require('ejs');
const path = require('path');

module.exports.createPdfToBuffer = async (htmlFile, variables) => {

    return new Promise((resolve) => {

        ejs.renderFile(path.join(__dirname, 'html', htmlFile), variables, (err, html) => {
            if (err) throw new Error(err);
            else {
                pdf.create(html, {}).toBuffer((err, buffer) => {
                    if (err) throw new Error(err);
                    else resolve(buffer.toString('base64'));
                });
            }
        });
    });
}

module.exports.createPdfToFile = async (htmlFile, pdfFileName, variables) => {

    return new Promise((resolve) => {

        ejs.renderFile(path.join(__dirname, 'html', htmlFile), variables, (err, html) => {
            if (err) throw new Error(err);
            else {
                pdf.create(html, {}).toFile(path.join(__dirname, 'pdf', `${pdfFileName}.pdf`), (err, res) => {
                    if (err) throw new Error(err);
                    else console.log(res.filename);
                });
            }
        });
    });
}
