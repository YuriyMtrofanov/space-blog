import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/forms/textField";
// import SelectField from "../common/forms/selectField";
import RadioField from "../common/forms/radioField";
import TextAreaField from "../common/forms/textAreaField";
// import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/forms/checkBoxField";
// import api from "../../../api";

const RegisterForm = () => {
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
        name: "",
        accountType: "reader",
        about: "",
        licence: false
    });
    const [errors, setErrors] = useState({});
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
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
        const errors = validator(inputData, validatorConfig);
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
        console.log("register data", inputData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Ваше имя"
                type="name"
                name="name"
                value={inputData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Электронная почта"
                name="email"
                value={inputData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={inputData.password}
                onChange={handleChange}
                error={errors.password}
            />
            <RadioField
                options={[
                    { name: "Читатель", value: "reader" },
                    { name: "Автор", value: "author" }
                ]}
                value={inputData.accountType}
                name="accountType"
                onChange={handleChange}
                label="Регистрируетесь как:"
            />
            <TextAreaField
                value={inputData.about || ""}
                onChange={handleChange}
                name="about"
                label="Пару слов о себе:"
            />
            <CheckBoxField
                value={inputData.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBoxField>
            <button
                className="btn btn-dark w-100 mx-auto"
                type="submit"
                disabled={!isAbled}
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
