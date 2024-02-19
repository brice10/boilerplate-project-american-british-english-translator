const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

    suite('Translate American English to British English', () => {

        const globaLocale = 'american-to-british';

        test('Translate Mangoes are my favorite fruit. to British English', () => {
            const { locale, text } = { locale: globaLocale, text: 'Mangoes are my favorite fruit.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'Mangoes are my favorite fruit.');
            assert.equal(translation.translation, 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.');
        });

        test('Translate I ate yogurt for breakfast. to British English', () => {
            const { locale, text } = { locale: globaLocale, text: 'I ate yogurt for breakfast.' };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'I ate yogurt for breakfast.');
            assert.equal(translation.translation, 'I ate <span class=\"highlight\">yoghurt</span> for breakfast.');
        });

        test("Translate We had a party at my friend's condo. to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "We had a party at my friend's condo." };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "We had a party at my friend's condo.");
            assert.equal(translation.translation, "We had a party at my friend's <span class=\"highlight\">flat</span>.");
        });

        test("Translate Can you toss this in the trashcan for me? to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "Can you toss this in the trashcan for me?" };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "Can you toss this in the trashcan for me?");
            assert.equal(translation.translation, "Can you toss this in the <span class=\"highlight\">bin</span> for me?");
        });

        test("Translate The parking lot was full. to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "The parking lot was full." };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "The parking lot was full.");
            assert.equal(translation.translation, "The <span class=\"highlight\">car park</span> was full.");
        });

        test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "Like a high tech Rube Goldberg machine." };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "Like a high tech Rube Goldberg machine.");
            assert.equal(translation.translation, "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.");
        });

        test("Translate To play hooky means to skip class or work. to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "To play hooky means to skip class or work." };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "To play hooky means to skip class or work.");
            assert.equal(translation.translation, "To <span class=\"highlight\">bunk off</span> means to skip class or work.");
        });

        test("Translate No Mr. Bond, I expect you to die. to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "No Mr. Bond, I expect you to die." };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "No Mr. Bond, I expect you to die.");
            assert.equal(translation.translation, "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.");
        });

        test("Translate Dr. Grosh will see you now. to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "Dr. Grosh will see you now." };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "Dr. Grosh will see you now.");
            assert.equal(translation.translation, "<span class=\"highlight\">Dr</span> Grosh will see you now.");
        });

        test("Translate Lunch is at 12:15 today. to British English", () => {
            const { locale, text } = { locale: globaLocale, text: "Lunch is at 12:15 today." };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "Lunch is at 12:15 today.");
            assert.equal(translation.translation, "Lunch is at <span class=\"highlight\">12.15</span> today.");
        });

    });


    suite('Translate British English to American English', () => {

        const globaLocale = 'british-to-american';

        
        test('Translate We watched the footie match for a while. to American English', () => {
            const { locale, text } = { locale: globaLocale, text: 'We watched the footie match for a while.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'We watched the footie match for a while.');
            assert.equal(translation.translation, 'We watched the <span class=\"highlight\">soccer</span> match for a while.');
        });

        test('Translate Paracetamol takes up to an hour to work. to American English', () => {
            const { locale, text } = { locale: globaLocale, text: 'Paracetamol takes up to an hour to work.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'Paracetamol takes up to an hour to work.');
            assert.equal(translation.translation, '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.');
        });

        test('Translate First, caramelise the onions. to American English', () => {
            const { locale, text } = { locale: globaLocale, text: 'First, caramelise the onions.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'First, caramelise the onions.');
            assert.equal(translation.translation, 'First, <span class=\"highlight\">caramelize</span> the onions.');
        });

        test('Translate I spent the bank holiday at the funfair. to American English', () => {
            const { locale, text } = { locale: globaLocale, text: 'I spent the bank holiday at the funfair.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'I spent the bank holiday at the funfair.');
            assert.equal(translation.translation, 'I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.');
        });

        test('Translate I had a bicky then went to the chippy. to American English', () => {
            const { locale, text } = { locale: globaLocale, text: 'I had a bicky then went to the chippy.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'I had a bicky then went to the chippy.');
            assert.equal(translation.translation, 'I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.');
        });

        test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
            const { locale, text } = { locale: globaLocale, text: "I've just got bits and bobs in my bum bag." };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "I've just got bits and bobs in my bum bag.");
            assert.equal(translation.translation, "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.");
        });

        test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
            const { locale, text } = { locale: globaLocale, text: "The car boot sale at Boxted Airfield was called off." };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "The car boot sale at Boxted Airfield was called off.");
            assert.equal(translation.translation, "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.");
        });

        test("Translate Have you met Mrs Kalyani? to American English", () => {
            const { locale, text } = { locale: globaLocale, text: "Have you met Mrs Kalyani?" };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "Have you met Mrs Kalyani?");
            assert.equal(translation.translation, "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?");
        });

        test("Translate Prof Joyner of King's College, London. to American English", () => {
            const { locale, text } = { locale: globaLocale, text: "Prof Joyner of King's College, London." };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "Prof Joyner of King's College, London.");
            assert.equal(translation.translation, "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.");
        });

        test("Tea time is usually around 4 or 4.30.", () => {
            const { locale, text } = { locale: globaLocale, text: "Tea time is usually around 4 or 4.30." };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, "Tea time is usually around 4 or 4.30.");
            assert.equal(translation.translation, "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.");
        });

    });

    suite('Highlight translations', () => {

        const americanToBritish = 'american-to-british';
        const britishToAmerican = 'british-to-american';

        test('Highlight translation in Mangoes are my favorite fruit.', () => {
            const { locale, text } = { locale: americanToBritish, text: 'Mangoes are my favorite fruit.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'Mangoes are my favorite fruit.');
            assert.equal(translation.translation, 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.');
        });

        
        test('Highlight translation in I ate yogurt for breakfast.', () => {
            const { locale, text } = { locale: americanToBritish, text: 'I ate yogurt for breakfast.' };
            
            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'I ate yogurt for breakfast.');
            assert.equal(translation.translation, 'I ate <span class=\"highlight\">yoghurt</span> for breakfast.');
        });

        test('Highlight translation in We watched the footie match for a while.', () => {
            const { locale, text } = { locale: britishToAmerican, text: 'We watched the footie match for a while.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'We watched the footie match for a while.');
            assert.equal(translation.translation, 'We watched the <span class=\"highlight\">soccer</span> match for a while.');
        });

        test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
            const { locale, text } = { locale: britishToAmerican, text: 'Paracetamol takes up to an hour to work.' };

            const translation = translator.translate(locale, text);
            
            assert.property(translation, 'text');
            assert.property(translation, 'translation');
            assert.isString(translation.text);
            assert.isString(translation.translation);
            assert.equal(translation.text, 'Paracetamol takes up to an hour to work.');
            assert.equal(translation.translation, '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.');
        });

    });
});
