const FormValidation = () => {
    const isEmail = email => {
        return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
    }

    const isPhone = phone => {
        return (/^\d+$/).test(phone)
    }

    return {
        isEmail,
        isPhone
    }
}

export default FormValidation