import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/forms/textField";
import CheckBoxField from "../common/forms/checkBoxField";
import { useDispatch } from "react-redux";
import { login } from "../../store/users";
// import { useHistory } from "react-router-dom";
// import customHistory from "../../utils/history";

const loginForm = () => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);
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
        setEnterError(null);
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
        // const redirect = customHistory.location.state
        //     ? customHistory.location.state.from.pathname
        //     : "/";
        dispatch(login({
            payload: inputData
            // redirect
        }));
        // history.replace("/users");
        // console.log("login", { payload: inputData, redirect });
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
            {enterError && <p className="text-danger">{enterError}</p>}
            <button
                className="btn btn-dark w-100 mx-auto"
                type="submit"
                disabled={!isAbled || enterError}
            >
                Submit
            </button>
        </form>
    );
};

export default loginForm;
