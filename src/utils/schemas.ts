import joi from "joi";

class schema {
    static employeeUpdate = joi.object({
        id: joi.number().positive().integer().required().messages({
            'any.required': 'O campo id é obrigatório', 
            'number.base': 'Informe um id numérico válido',
            'number.positive': 'Informe um id positivo válido',
            'number.integer': 'O campo id precisa ser um número inteiro',
        }),

        fullName: joi.string().messages({
            'any.required': 'O campo fullName é obrigatório',
            'string.empty': 'O campo fullName não pode ficar vazio', 
            'string.base': 'O campo fullName deve ser escrito no formato de string',
        }),

        hireDate: joi.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/).messages({
            'string.pattern.base': 'O campo hireDate está com o formato inválido, ele deve seguir o padrão ISO 8601: "YYYY-MM-DDTHH:MM:SSZ"',
            'any.required': 'O campo hireDate é obrigatório',
            'string.empty': 'O campo hireDate não pode ficar vazio', 
            'string.base': 'O campo hireDate deve ser escrito no formato de string',
        }),

        office: joi.string().messages({
            'any.required': 'O campo office é obrigatório',
            'string.empty': 'O campo office não pode ficar vazio',
            'string.base': 'O campo office deve ser escrito no formato de string', 
        }),
    })

    static employee = joi.object({
        id: joi.number().positive().integer().required().messages({
            'any.required': 'O campo id é obrigatório', 
            'number.base': 'Informe um id numérico válido',
            'number.positive': 'Informe um id positivo válido',
            'number.integer': 'O campo id precisa ser um número inteiro',
        }),

        fullName: joi.string().required().messages({
            'any.required': 'O campo fullName é obrigatório',
            'string.empty': 'O campo fullName não pode ficar vazio', 
            'string.base': 'O campo fullName deve ser escrito no formato de string',
        }),

        hireDate: joi.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/).required().messages({
            'string.pattern.base': 'O campo hireDate está com o formato inválido, ele deve seguir o padrão ISO 8601: "YYYY-MM-DDTHH:MM:SSZ"',
            'any.required': 'O campo hireDate é obrigatório',
            'string.empty': 'O campo hireDate não pode ficar vazio', 
            'string.base': 'O campo hireDate deve ser escrito no formato de string',
        }),

        office: joi.string().required().messages({
            'any.required': 'O campo office é obrigatório',
            'string.empty': 'O campo office não pode ficar vazio',
            'string.base': 'O campo office deve ser escrito no formato de string', 
        }),
    })

    static id = joi.object({
        id: joi.number().positive().integer().required().messages({
            'number.base': 'Informe um id numérico válido',
            'number.positive': 'Informe um id positivo válido',
            'number.integer': 'O campo id precisa ser um número inteiro',
        })
    })
}

export default schema;
