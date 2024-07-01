const FormValidation = () => {
    const isEmail = email => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    }

    const isPhone = phone => {
        return phone.match(/^[1-9]\d{2}\s\d{3}\s\d{4}/)
    }

    return {
        isEmail,
        isPhone
    }
}

export default FormValidation