import joi from 'joi';

const palpitesSchema = joi.object({
    palpiteCasa: joi.number().required(),
    palpiteFora: joi.number().required(),
    jogoId: joi.number().required(),
    userId: joi.number().required(),
});


export {palpitesSchema};