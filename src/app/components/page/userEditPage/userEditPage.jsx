import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";
import TextField from "../../common/forms/textField";
import RadioField from "../../common/forms/radioField";
import TextAreaField from "../../common/forms/textAreaField";
import DateField from "../../common/forms/dateField";
import { useDispatch, useSelector } from "react-redux";
import { editUserInfo, getCurrentUserData } from "../../../store/users";
import { useHistory } from "react-router-dom";

const UserEditPage = ({ id }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());
    const [inputData, setInputData] = useState({
        email: currentUser.email,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        city: currentUser.city,
        country: currentUser.country,
        sex: currentUser.sex,
        img: currentUser.img,
        about: currentUser.about,
        birthDate: currentUser.birthDate
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (inputData && isLoading) {
            setIsLoading(false);
        }
    }, [inputData]);

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
        }
    };

    useEffect(() => {
        validate();
    }, [inputData]);

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

    const handleClich = () => {
        history.goBack();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const outputData = {
            ...currentUser,
            email: inputData.email,
            firstName: inputData.firstName,
            lastName: inputData.lastName,
            city: inputData.city,
            country: inputData.country,
            sex: inputData.sex,
            img: inputData.img,
            about: inputData.about,
            birthDate: inputData.birthDate
        };
        console.log(outputData);
        dispatch(editUserInfo(outputData));
        history.push(`/users/${id}`);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 shadow p-4">
                    <p>Дорогой посетитель, внимательно заполни все поля и отправь данные.</p>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={inputData.email}
                            onChange={handleChange}
                            error={errors.email}
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
                        <DateField
                            label="Дата рождения"
                            type="text"
                            name="birthDate"
                            // value={birthDate}
                            value={inputData.birthDate}
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-dark w-25 mx-2"
                            type="submit"
                            onClick={handleClich}
                        >
                            <i className="bi bi-caret-left"></i>Назад
                        </button>
                        <button
                            className="btn btn-dark w-25 mx-2"
                            type="submit"
                            disabled={!isAbled}
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

UserEditPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserEditPage;
