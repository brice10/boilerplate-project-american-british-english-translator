const { Locales, highlight, endsWithPontuation, getWordTab, completePonctuation, getFinalPonctuation, capitalize, isAmericanHour, toBritishHour, isBritishHour, toAmericanHour, invertObject } = require('../utils/translator-utils.js');
const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {

    translateXToY(text, spelling, spellingOnly, titles) {
        const wordsTab = getWordTab(text);
        const wordsTabTranslate = [];
        const finalPonctuation = getFinalPonctuation(text);

        for (let index = 0; index < wordsTab.length; index++) {
            const word = wordsTab[index];
            const translation = {
                word: word,
                translate: highlight(spelling[word.toLowerCase()]) || highlight(spellingOnly[word.toLowerCase()])
            }
            if (!translation.translate) {
                const { expressionTranslation, nextIndex } = this.translateXToYExpression(word, wordsTab, index, spellingOnly);
                translation = expressionTranslation;
                index = nextIndex;
            }
            this.translateXToYTitle(translation, titles);
            this.translateXToYHour(translation);
            wordsTabTranslate.push(translation);
        }

        const finalText = wordsTabTranslate.map(x => x.word).join(' ')
        const finalTranslateText = wordsTabTranslate.map(x => x.translate).join(' ')
        return {
            text: finalPonctuation ? completePonctuation(finalText, finalPonctuation) : finalText,
            translation: finalPonctuation ? completePonctuation(finalTranslateText, finalPonctuation) : finalTranslateText
        }
    }

    translateXToYExpression(word, wordsTab, index, spellingOnly) {
        const initialIndex = index;
        let expression = wordsTab[index];
        let step = 0;
        while (wordsTab[index] && !spellingOnly[expression.toLowerCase()]) {
            expression += wordsTab[index + 1] ? ' ' + wordsTab[index + 1]: '';
            index++;
            step++;
        }
        const nextExpression = wordsTab[index + 1]? expression + ' ' + wordsTab[index + 1]: null;
        if (spellingOnly[expression.toLowerCase()] && !spellingOnly[nextExpression]) {
            return {
                expressionTranslation: {
                    word: expression,
                    translate: highlight(spellingOnly[expression.toLowerCase()])
                },
                nextIndex: step + initialIndex
            }
        } else if (spellingOnly[expression.toLowerCase()] && spellingOnly[nextExpression]) {
            return {
                expressionTranslation: {
                    word: nextExpression,
                    translate: highlight(spellingOnly[nextExpression.toLowerCase()])
                },
                nextIndex: step + initialIndex + 1
            }
        }
        return {
            expressionTranslation: {
                word: word,
                translate: word
            },
            nextIndex: initialIndex
        }
    }

    translateXToYTitle(translation, titles) {
        if (titles[translation.word.toLowerCase()]) {
            translation.translate = highlight(capitalize(titles[translation.word.toLowerCase()]));
        }
    }

    translateXToYHour(translation) {
        if (isAmericanHour(translation.word)) {
            translation.translate = highlight(toBritishHour(translation.word));
        }
        if (isBritishHour(translation.word)) {
            translation.translate = highlight(toAmericanHour(translation.word));
        }
    }

    translateBritishToAmerican(text) { }

    translate(locale, text) {
        switch (locale) {
            case Locales.A_to_B:
                return this.translateXToY(text, americanToBritishSpelling, americanOnly, americanToBritishTitles);
            case Locales.B_to_A:
                return this.translateXToY(text, invertObject(americanToBritishSpelling), britishOnly, invertObject(americanToBritishTitles));
            default:
                break;
        }
    }

}

module.exports = Translator;