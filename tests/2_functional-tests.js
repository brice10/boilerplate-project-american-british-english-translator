const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    
    suite('Translate API', () => {

        const americanToBritish = 'american-to-british';
        const britishToAmerican = 'british-to-american';

        test('Translation with text and locale fields: POST request to /api/translate', (done) => {
            chai.
                request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ 
                    locale: americanToBritish, 
                    text: 'Mangoes are my favorite fruit.'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);

                    const resBody = res.body;

                    assert.isOk(resBody);
                    assert.property(resBody, 'text');
                    assert.property(resBody, 'translation');
                    assert.isString(resBody.text);
                    assert.isString(resBody.translation);
                    assert.equal(resBody.text, 'Mangoes are my favorite fruit.');
                    assert.equal(resBody.translation, 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.');

                    done()
                })
        });

        test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
            chai.
                request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ 
                    locale: 'invalid locale', 
                    text: 'Mangoes are my favorite fruit.'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);

                    const resBody = res.body;

                    assert.isOk(resBody);
                    assert.property(resBody, 'error');
                    assert.isString(resBody.error);
                    assert.equal(resBody.error, 'Invalid value for locale field');

                    done()
                })
        });

        test('Translation with missing text field: POST request to /api/translate', (done) => {
            chai.
                request(server)
                .keepOpen()
                .post('/api/translate')
                .send({
                    locale: britishToAmerican
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);

                    const resBody = res.body;

                    assert.isOk(resBody);
                    assert.property(resBody, 'error');
                    assert.isString(resBody.error);
                    assert.equal(resBody.error, 'Required field(s) missing');

                    done()
                })
        });

        test('Translation with missing locale field: POST request to /api/translate', (done) => {
            chai.
                request(server)
                .keepOpen()
                .post('/api/translate')
                .send({
                    text: 'Mangoes are my favorite fruit.'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);

                    const resBody = res.body;

                    assert.isOk(resBody);
                    assert.property(resBody, 'error');
                    assert.isString(resBody.error);
                    assert.equal(resBody.error, 'Required field(s) missing');

                    done()
                })
        });

        test('Translation with empty text: POST request to /api/translate', (done) => {
            chai.
                request(server)
                .keepOpen()
                .post('/api/translate')
                .send({
                    locale: americanToBritish,
                    text: ''
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);

                    const resBody = res.body;

                    assert.isOk(resBody);
                    assert.property(resBody, 'error');
                    assert.isString(resBody.error);
                    assert.equal(resBody.error, 'No text to translate');

                    done()
                })
        });

        test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
            chai.
                request(server)
                .keepOpen()
                .post('/api/translate')
                .send({
                    locale: americanToBritish,
                    text: '   '
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);

                    const resBody = res.body;

                    assert.isOk(resBody);
                    assert.property(resBody, 'text');
                    assert.property(resBody, 'translation');
                    assert.isString(resBody.text);
                    assert.isString(resBody.translation);
                    assert.equal(resBody.text, '   ');
                    assert.equal(resBody.translation, 'Everything looks good to me!');

                    done()
                })
        });

    });

});
