const { celebrate, Joi, Segments } = require('celebrate');
const validatePrime = celebrate({
  [Segments.PARAMS]: {
    numb: Joi.number()
      .integer()
      .greater(2)
      .required(),
  },
});
module.exports = validatePrime;
