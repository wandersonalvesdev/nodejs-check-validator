'use strict';

let errors = [];

function CheckValidator(){
    errors = [];
}

CheckValidator.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

CheckValidator.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

CheckValidator.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

CheckValidator.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

CheckValidator.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

CheckValidator.prototype.errors = () => { 
    return errors; 
}

CheckValidator.prototype.clear = () => {
    errors = [];
}

CheckValidator.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = CheckValidator;