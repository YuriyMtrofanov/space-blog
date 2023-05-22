import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/forms/textField";
import CheckBoxField from "../common/forms/checkBoxField";

const loginForm = () => {
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const validationConfig = {
        email: {
            isRequired: {
                message: `Поле Email обязательно к заполнению`
            },
            isEmail: {
                message: `Email введен некорректно`
            }
        },
        password: {
            isRequired: {
                message: `Поле Password обязательно к заполнению`
            },
            isCapitalSymbol: {
                message: `Password должен содержать заглавные буквы`
            },
            isConteinDigit: {
                message: `Password должен содержать цифры`
            },
            min: {
                message: `Password должен содержать минимум из восьми символов`,
                value: 8
            }
        }
    };

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(inputData, validationConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isAbled = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
    }, [inputData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(inputData);
    };

    return (
        <form onSubmit = { handleSubmit }>
            <TextField
                title = "Email"
                type = "text"
                name = "email"
                value = {inputData.email}
                onChange = {handleChange}
                error = {errors.email}
            />
            <TextField
                title = "Password"
                type = "password"
                name = "password"
                value = {inputData.password}
                onChange = {handleChange}
                error = {errors.password}
            />
            <CheckBoxField
                name = "stayOn"
                value = {inputData.stayOn}
                onChange = {handleChange}
            >
                Оставаться в системе
            </CheckBoxField>
            <button
                type="submit"
                disabled = {!isAbled}
                className = "btn btn-dark w-100 mx-auto"
            >Submit</button>
        </form>
    );
};

export default loginForm;
