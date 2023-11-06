import { NextFunction, Request, Response } from 'express';

interface IValidationRule {
  regex: RegExp;
  message: string;
}

interface IObjKeyProps {
  [key: string]: IValidationRule;
}

const comparsion: IObjKeyProps = {
  id: {
    regex: /\d/,
    message: 'ID deve conter apenas números'
  },
  cep: {
    regex: /\d{8}/,
    message: 'Cep deve conter apenas números e possuir 8 dígitos'
  },
  state: {
    regex: /[A-Z]{2}$/,
    message: 'Estado é representado em sigla e letra maiúscula.'
  },
  number: {
    regex: /\d/,
    message: 'Informe o número ou, se não possuir deixar vazio.'
  }
};

export default function validationFields(req: Request, res: Response, next: NextFunction) {
  const props: string[] = Object.getOwnPropertyNames(req.body);

  for (let prop of props) {
    if (comparsion[prop]) {
      const { regex, message } = comparsion[prop];
      const propValue = req.body[prop];

      if (!regex.test(propValue)) {
        return res.status(400).json({ message: message });
      }
    }
  }
  next();
}
