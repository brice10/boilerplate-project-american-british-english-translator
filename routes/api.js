'use strict';

const Translator = require('../components/translator.js');
const { Locales } = require('../utils/translator-utils.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { locale, text } = req.body;

      if (text === '') {
        return res.json({
          error: 'No text to translate'
        });
      }

      if (!locale || !text) {
        return res.json({
          error: 'Required field(s) missing'
        });
      }

      if (locale !== Locales.A_to_B && locale !== Locales.B_to_A) {
        return res.json({
          error: 'Invalid value for locale field'
        });
      }

      const result = translator.translate(locale, text);

      if (result.translation === text) {
        result.translation = 'Everything looks good to me!';
      }

      return res.json(result);
    });
};
