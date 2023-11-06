import joi from "joi";

class schema {

    static unit = joi.object({
        addressId: joi.number().positive().integer().required().messages({
            'number.base': 'Informe um id do endereço com valor numérico válido',
            'number.positive': 'Informe um id do endereço com valor positivo válido',
            'number.integer': 'O campo id do endereço precisa ser um número inteiro',
        }), 

        name: joi.string().messages({
            'any.required': 'O campo nome é obrigatório',
            'string.empty': 'O campo nome não pode ficar vazio', 
            'string.base': 'O campo nome deve ser escrito no formato de válido',
        })
    })

    static address = joi.object({
        cep: joi.string().min(8).max(8).regex(/\d{8}/).required().messages({
            'string.pattern.base': 'O formato deve ser numérico.', 
            'any.required': 'O campo CEP é obrigatório',
            'string.max': 'CEP de deve conter 8 dígitos. Apenas números.',
            'string.min': 'CEP de deve conter 8 dígitos. Apenas números.',
        }),

        state: joi.string().min(2).max(2).regex(/[A-Z]{2}/).required().messages({
            'string.pattern.base': 'O formato deve ser a sigla do estado.', 
            'any.required': 'O campo estado é obrigatório',
            'string.max': 'Estado de deve conter 2 dígitos. Apenas sigla.',
            'string.min': 'Estado de deve conter 2 dígitos. Apenas sigla.',
        }),

        city: joi.string().required().messages({
            'any.required': 'O campo cidade é obrigatório',
            'string.empty': 'O campo cidade não pode ficar vazio', 
            'string.base': 'Formato incorreto.',
        }),

        neighborhood: joi.string().required().messages({
            'any.required': 'O campo bairro é obrigatório',
            'string.empty': 'O campo bairro não pode ficar vazio', 
            'string.base': 'Formato incorreto.',
        }),

        street: joi.string().required().messages({
            'any.required': 'O campo da rua é obrigatório',
            'string.empty': 'O campo da rua não pode ficar vazio', 
            'string.base': 'Formato incorreto.',
        }),

        number: joi.string().messages({
            'string.base': 'Formato incorreto.',
        }),

        complement: joi.string().messages({
            'string.base': 'Formato incorreto.',
        }),
    })

    static addressUpdate = joi.object({
        cep: joi.string().min(8).max(8).regex(/\d{8}/).messages({
            'string.pattern.base': 'O formato deve ser numérico.', 
            'any.required': 'O campo CEP é obrigatório',
            'string.max': 'CEP de deve conter 8 dígitos. Apenas números.',
            'string.min': 'CEP de deve conter 8 dígitos. Apenas números.',
        }),

        state: joi.string().min(2).max(2).regex(/[A-Z]{2}/).messages({
            'string.pattern.base': 'O formato deve ser a sigla do estado.', 
            'any.required': 'O campo estado é obrigatório',
            'string.max': 'Estado de deve conter 2 dígitos. Apenas sigla.',
            'string.min': 'Estado de deve conter 2 dígitos. Apenas sigla.',
        }),

        city: joi.string().messages({
            'any.required': 'O campo cidade é obrigatório',
            'string.empty': 'O campo cidade não pode ficar vazio', 
            'string.base': 'Formato incorreto.',
        }),

        neighborhood: joi.string().messages({
            'any.required': 'O campo bairro é obrigatório',
            'string.empty': 'O campo bairro não pode ficar vazio', 
            'string.base': 'Formato incorreto.',
        }),

        street: joi.string().messages({
            'any.required': 'O campo da rua é obrigatório',
            'string.empty': 'O campo da rua não pode ficar vazio', 
            'string.base': 'Formato incorreto.',
        }),

        number: joi.string().messages({
            'string.base': 'Formato incorreto.',
        }),

        complement: joi.string().messages({
            'string.base': 'Formato incorreto.',
        }),
    })

    static employeeUpdate = joi.object({
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
        
        cpf: joi.string().min(11).max(11).regex(/\d{11}/).messages({
            'string.pattern.base': 'O formato deve ser numérico.', 
            'any.required': 'O campo função de trabalho é obrigatório',
            'string.max': 'CPF de deve conter 11 dígitos. Apenas números.',
            'string.min': 'CPF de deve conter 11 dígitos. Apenas números.',
        })
    })

    static employee = joi.object({
        fullName: joi.string().required().messages({
            'any.required': 'O campo nome completo é obrigatório',
            'string.empty': 'O campo nome completo não pode ficar vazio', 
            'string.base': 'O campo nome completo deve ser escrito no formato de string',
        }),

        hireDate: joi.string().required().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/).messages({
            'string.pattern.base': 'O campo data de contratação está com o formato inválido, ele deve seguir o padrão ISO 8601: "YYYY-MM-DDTHH:MM:SSZ"',
            'any.required': 'O campo data de contratação é obrigatório',
            'string.empty': 'O campo data de contratação não pode ficar vazio', 
            'string.base': 'O campo data de contratação deve ser escrito no formato de string',
        }),

        office: joi.string().required().messages({
            'any.required': 'O campo função de trabalho é obrigatório',
            'string.empty': 'O campo função de trabalho não pode ficar vazio',
            'string.base': 'O campo função de trabalho deve ser escrito no formato de string', 
        }),
        cpf: joi.string().min(11).max(11).regex(/\d{11}/).required().messages({
            'string.pattern.base': 'O formato deve ser numérico.', 
            'any.required': 'O campo função de trabalho é obrigatório',
            'string.max': 'CPF de deve conter 11 dígitos. Apenas números.',
            'string.min': 'CPF de deve conter 11 dígitos. Apenas números.',
        })
    })

    static id = joi.object({
        id: joi.number().positive().integer().required().messages({
            'number.base': 'Informe um id numérico válido',
            'number.positive': 'Informe um id positivo válido',
            'number.integer': 'O campo id precisa ser um número inteiro',
        })
    })

    static product = joi.object({
        name: joi.string().required().messages({
            'any.required': 'O campo nome é obrigatório',
            'string.empty': 'O campo nome não pode ficar vazio', 
            'string.base': 'O campo nome deve ser escrito no formato de string',
        }),

        price: joi.number().positive().required().messages({
            'any.required': 'O campo preço é obrigatório', 
            'number.base': 'Informe um preço numérico válido',
            'number.positive': 'Informe um preço positivo válido',
            'number.integer': 'O campo preço precisa ser um número inteiro',
        }),
    })

    static productUpdate = joi.object({
        name: joi.string().messages({
            'any.required': 'O campo nome é obrigatório',
            'string.empty': 'O campo nome não pode ficar vazio', 
            'string.base': 'O campo nome deve ser escrito no formato de string',
        }),

        quantity: joi.number().positive().integer().messages({
            'any.required': 'O campo quantidade é obrigatório', 
            'number.base': 'Informe um quantidade numérico válido',
            'number.positive': 'Informe um quantidade positivo válido',
            'number.integer': 'O campo quantidade precisa ser um número inteiro',
        }),

        price: joi.number().positive().messages({
            'any.required': 'O campo preço é obrigatório', 
            'number.base': 'Informe um preço numérico válido',
            'number.positive': 'Informe um preço positivo válido',
            'number.integer': 'O campo preço precisa ser um número inteiro',
        }),

        unit: joi.number().positive().integer().messages({
            'any.required': 'O campo unidade é obrigatório', 
            'number.base': 'Informe um unidade numérico válido',
            'number.positive': 'Informe um unidade positivo válido',
            'number.integer': 'O campo unidade precisa ser um número inteiro',
        }),
    })

    static productUnit = joi.object({
        productId: joi.number().positive().integer().required().messages({
            'any.required': 'O campo id do produto é obrigatório',
            'number.base': 'Informe um id do produto numérico válido',
            'number.positive': 'Informe um id do produto positivo válido',
            'number.integer': 'O campo id do produto precisa ser um número inteiro',
        }),

        unitId: joi.number().positive().integer().required().messages({
            'any.required': 'O campo id do unidade é obrigatório',
            'number.base': 'Informe um id da unidade numérico válido',
            'number.positive': 'Informe um id da unidade positivo válido',
            'number.integer': 'O campo id da unidade precisa ser um número inteiro',
        }),

        quantity: joi.number().positive().integer().required().messages({
            'any.required': 'O campo id do quantidade é obrigatório',
            'number.base': 'Informe um quantidade numérico válido',
            'number.positive': 'Informe um quantidade positivo válido',
            'number.integer': 'O campo quantidade precisa ser um número inteiro',
        })
    })

    static productUnitUpdate = joi.object({
        productId: joi.number().positive().integer().messages({
            'any.required': 'O campo id do produto é obrigatório',
            'number.base': 'Informe um id do produto numérico válido',
            'number.positive': 'Informe um id do produto positivo válido',
            'number.integer': 'O campo id do produto precisa ser um número inteiro',
        }),

        unitId: joi.number().positive().integer().messages({
            'any.required': 'O campo id do unidade é obrigatório',
            'number.base': 'Informe um id da unidade numérico válido',
            'number.positive': 'Informe um id da unidade positivo válido',
            'number.integer': 'O campo id da unidade precisa ser um número inteiro',
        }),

        quantity: joi.number().positive().integer().messages({
            'any.required': 'O campo quantidade é obrigatório',
            'number.base': 'Informe um quantidade numérico válido',
            'number.positive': 'Informe um quantidade positivo válido',
            'number.integer': 'O campo quantidade precisa ser um número inteiro',
        })
    })
}

export default schema;
