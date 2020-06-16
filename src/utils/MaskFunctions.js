import { conformToMask } from 'react-text-mask';

export const dateFormatMask = (value) => {
    if (value.endsWith("/")) return value.substring(0, value.length - 1);

    const dateMask = [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /\d/, /\d/, /\d/];
    const date = conformToMask(value, dateMask, { guide: false })
    return date.conformedValue;
}

export const timeFormatMask = (value) => {
    const timeMask = [/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/];
    const time = conformToMask(value, timeMask, { guide: false })
    return time.conformedValue;
}

export const zipCodeFormatMask = (value) => {
    const zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    if (value.endsWith("-")) {
        return value.substring(0, value.length - 1);
    }
    const zipCode = conformToMask(value, zipCodeMask, { guide: false })
    return zipCode.conformedValue;
}

export const phoneFormatMask = (value) => {
    const phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    const phone = conformToMask(value, phoneMask, { guide: false })
    return phone.conformedValue;
}

export const cpfFormatMask = (value) => {
    if (value.endsWith("-") || value.endsWith(".")) {
        return value.substring(0, value.length - 1);
    }
    const cpfCodeMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    const cpf = conformToMask(value, cpfCodeMask, { guide: false })
    return cpf.conformedValue;
}

