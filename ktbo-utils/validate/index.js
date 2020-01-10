const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
const DATE_REGEX = /[0-1]{1}[0-9]{1}[\/][0-9]{2}/
//const PASSWORD_REGEX = /^(?=.*[az])(?=.*[AZ])(?=.*[0-9])(?=.*[!@.#\$%\^&\*])(?=.{6})/

module.exports = {
    string(target, name, empty = true, values) {
        if (typeof target !== 'string') throw TypeError(`${name} with value ${target} is not a string`)
        if (empty && !target.trim()) throw new Error(`${name} is empty or blank`)
        if (values && !values.includes(target)) throw new Error(`${name} with value ${target} does not match one of the expected values: ${values.join(', ')}`)
    },

    email(target, name) {
        if (!EMAIL_REGEX.test(target)) throw new Error(`${name} with value ${target} is not a valid e-mail`)
    },

    securePassword(target) {
        if (target.length < 8) throw new Error(`The password must have 8 characters minimum`)
        let characterCount = 0
        let upperCaseCount = 0
        let lowerCaseCount = 0
        for (let i = 0; i < target.length; i++) {
            if(target[i] === "." || "/" || "@" || "!" || "¿" || "?" || "'" || "+" || "-" || "_" || "," || ":" || ";" || "¨" || "[" || "]" || "{" || "}" || "$" || "(" || ")")
                characterCount ++

            if(target[i] === target[i].toUpperCase()) 
                upperCaseCount ++

            if(target[i] === target[i].toLowerCase()) 
                lowerCaseCount ++
        }
        if (lowerCaseCount < 1) throw new Error(`The password must have 1 upper case character minimum`)
        if (upperCaseCount < 1) throw new Error(`The password must have 1 lower case character minimum`)
        if (characterCount < 1) throw new Error(`The password must have 1 special character minimum`)
    },

    function(target, name) {
        if (typeof target !== 'function') throw TypeError(`${name} with value ${target} is not a function`)
    },

    url(target, name) {
        if (!URL_REGEX.test(target)) throw new Error(`${name} with value ${target} is not a valid URL`)
    },

    number(target, name) {
        if (typeof target === 'string' && !target.trim()) throw new Error(`${name} is empty or blank`)
        if (typeof target !== 'number') throw TypeError(`${name} with value ${target} is not a number`)
    },

    date(target, name) {
        //if (!(target instanceof Date)) throw TypeError(`${name} with value ${target} is not a date`)
        if (typeof target === 'string' && !target.trim()) throw new Error(`${name} is empty or blank`)
        if (!DATE_REGEX.test(target)) throw new Error(`${name} with value ${target} is not a valid date`)
       
    },

    boolean(target, name) {
        if (typeof target === 'string' && !target.trim()) throw new Error(`${name} is empty or blank`)
        if (typeof target !== 'boolean') throw TypeError(`${name} with value ${target} is not a boolean`)
    },

    object(target, name) {
        if (typeof target !== 'object') throw TypeError(`${name} with value ${target} is not a object`)
    }
}