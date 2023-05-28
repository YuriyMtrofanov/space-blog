import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
// import { nanoid } from "nanoid";
import TextField from "../common/forms/textField";
import RadioField from "../common/forms/radioField";
import TextAreaField from "../common/forms/textAreaField";
import CheckBoxField from "../common/forms/checkBoxField";
import DateField from "../common/forms/dateField";
// import AddLinksForm from "./addLinkForm";
// import { socialNetworksList } from "../../../references/socialNetworksList";
// import SelectField from "../common/forms/selectField";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        country: "",
        sex: "male", // задано значение по умолчанию
        img: "http://...",
        birthDate: "", // Date.parse("1987-02-17"), new Date(540518400000).toLocaleString() = 17/02/1987
        about: "",
        // socialNetworks: [],
        // selectedArticlesList: [],
        accountType: "reader", // задается по умолчанию, вручную изменю в БД на "admin"
        // rate: 0,
        licence: false
    });
    // const [socialNetworks, setSocialNetworks] = useState([]);
    const [errors, setErrors] = useState({});
    const validatorConfig = {
        firstName: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        lastName: {
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
        city: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            }
        },
        country: {
            isRequired: {
                message: "Поле обязательно для заполнения"
            }
        },
        img: {
            isUrl: {
                message: "Дабавь ссылку на фотографию профиля"
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

    useEffect(() => {
        validate();
    }, [inputData]);

    const validate = () => {
        const errors = validator(inputData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isAbled = Object.keys(errors).length === 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const outputData = {
            ...inputData,
            // _id: nanoid(),
            socialNetworks: [],
            selectedArticlesList: [],
            rate: 0
        };
        console.log("register data", outputData);
        dispatch(signUp(outputData));
    };

    return (
        <>
            <p>Дорогой посетитель, внимательно заполни все поля и отправь данные.</p>
            <form onSubmit={handleSubmit}>
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
                <div className="row">
                    <div className="col-6">
                        <TextField
                            label="Ваше имя"
                            type="firstName"
                            name="firstName"
                            value={inputData.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            label="Ваша фамилия"
                            type="lastName"
                            name="lastName"
                            value={inputData.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <TextField
                            label="Город"
                            type="city"
                            name="city"
                            value={inputData.city}
                            onChange={handleChange}
                            error={errors.city}
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            label="Страна"
                            type="country"
                            name="country"
                            value={inputData.country}
                            onChange={handleChange}
                            error={errors.country}
                        />
                    </div>
                </div>
                <RadioField
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "female" },
                        { name: "Other", value: "other" }
                    ]}
                    value={inputData.sex}
                    name="sex"
                    onChange={handleChange}
                    label="Выберите ваш пол"
                />
                <TextField
                    label="Фото профиля"
                    type="img"
                    name="img"
                    value={inputData.img}
                    onChange={handleChange}
                    error={errors.img}
                />
                <TextAreaField
                    value={inputData.about || ""}
                    onChange={handleChange}
                    name="about"
                    label="Пару слов о себе"
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
                {/* <p>Социальные сети</p>
                <AddLinksForm changeLink={handleChangeLink} /> */}
                <DateField
                    label="Дата рождения"
                    type="text"
                    name="birthDate"
                    // value={birthDate}
                    value={inputData.birthDate}
                    onChange={handleChange}
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
        </>
    );
};

export default RegisterForm;
