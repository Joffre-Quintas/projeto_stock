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
            'any.required': 'O campo nome completo é obrigatório',
            'string.empty': 'O campo nome completo não pode ficar vazio', 
            'string.base': 'O campo nome completo deve ser escrito no formato de string',
        }),

        hireDate: joi.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/).messages({
            'string.pattern.base': 'O campo data de contratação está com o formato inválido, ele deve seguir o padrão ISO 8601: "YYYY-MM-DDTHH:MM:SSZ"',
            'any.required': 'O campo data de contratação é obrigatório',
            'string.empty': 'O campo data de contratação não pode ficar vazio', 
            'string.base': 'O campo data de contratação deve ser escrito no formato de string',
        }),

        office: joi.string().messages({
            'any.required': 'O campo função de trabalho é obrigatório',
            'string.empty': 'O campo função de trabalho não pode ficar vazio',
            'string.base': 'O campo função de trabalho deve ser escrito no formato de string', 
        }),
    })

    static employee = joi.object({
        fullName: joi.string().messages({
            'any.required': 'O campo nome completo é obrigatório',
            'string.empty': 'O campo nome completo não pode ficar vazio', 
            'string.base': 'O campo nome completo deve ser escrito no formato de string',
        }),

        hireDate: joi.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/).messages({
            'string.pattern.base': 'O campo data de contratação está com o formato inválido, ele deve seguir o padrão ISO 8601: "YYYY-MM-DDTHH:MM:SSZ"',
            'any.required': 'O campo data de contratação é obrigatório',
            'string.empty': 'O campo data de contratação não pode ficar vazio', 
            'string.base': 'O campo data de contratação deve ser escrito no formato de string',
        }),

        office: joi.string().messages({
            'any.required': 'O campo função de trabalho é obrigatório',
            'string.empty': 'O campo função de trabalho não pode ficar vazio',
            'string.base': 'O campo função de trabalho deve ser escrito no formato de string', 
        }),
    })

    static id = joi.object({
        id: joi.number().positive().integer().required().messages({
            'number.base': 'Informe um id numérico válido',
            'number.positive': 'Informe um id positivo válido',
            'number.integer': 'O campo id precisa ser um número inteiro',
        })
    })

    static product = joi.object({
        name: joi.string().messages({
            'any.required': 'O campo nome é obrigatório',
            'string.empty': 'O campo nome não pode ficar vazio', 
            'string.base': 'O campo nome deve ser escrito no formato de string',
        }),

        quantity: joi.number().positive().integer().required().messages({
            'any.required': 'O campo quantidade é obrigatório', 
            'number.base': 'Informe um quantidade numérico válido',
            'number.positive': 'Informe um quantidade positivo válido',
            'number.integer': 'O campo quantidade precisa ser um número inteiro',
        }),

        price: joi.number().positive().integer().required().messages({
            'any.required': 'O campo preço é obrigatório', 
            'number.base': 'Informe um preço numérico válido',
            'number.positive': 'Informe um preço positivo válido',
            'number.integer': 'O campo preço precisa ser um número inteiro',
        }),

        unit: joi.number().positive().integer().required().messages({
            'any.required': 'O campo unidade é obrigatório', 
            'number.base': 'Informe um unidade numérico válido',
            'number.positive': 'Informe um unidade positivo válido',
            'number.integer': 'O campo unidade precisa ser um número inteiro',
        }),
    })
}

export default schema;
