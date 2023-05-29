import React, { useEffect, useState } from "react";
import API from "../../../../api";
import { validator } from "../../../utils/validator";
import TextField from "../../common/forms/textField";
import SelectField from "../../common/forms/selectField";
import TextAreaField from "../../common/forms/textAreaField";
import CheckBoxField from "../../common/forms/checkBoxField";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "../../../store/users";
import { createArticle } from "../../../store/articles";
import { useHistory } from "react-router-dom";
// import { nanoid } from "nanoid";

const ArticleCreatePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUserId = useSelector(getCurrentUserId());
    const [categories, setCategories] = useState();
    useEffect(() => {
        API.categories.fetchAll().then((data) => {
            setCategories(data);
        });
    }, []);

    const [inputData, setInputData] = useState({
        // _id: "",
        name: "", // валидация min/max
        author: "", // currentUserId
        date: "", // автоматически Date.now()
        img: "", // валидация по типу ссылки
        category: "", // select field
        content: "",
        rate: 0, // значение по умолчанию
        licence: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
    // const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Введите название статьи"
            },
            min: {
                message: "Название должно состоять минимум из 5 символов",
                value: 5
            },
            max: {
                message: "Название не должно превышать 100 символов",
                value: 100
            }
        },
        img: {
            isUrl: {
                message: "Данные введены не корректно"
            }
        },
        category: {
            isRequired: {
                message: "Выьерете тематику статьи"
            }
        },
        content: {
            isRequired: {
                message: "Добавьте текст статьи"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Материал может быть опубликован только при условии согласия с лицензионным соглашением"
            }
        }
    };

    const validate = () => {
        const errors = validator(inputData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [inputData]);

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const outputData = {
            ...inputData,
            date: Date.now(),
            author: currentUserId
        };
        dispatch(createArticle(outputData));
        history.replace("/articles");
    };

    if (categories) {
        // в дальнейшем проверку нужно убрать, а ковертацию данных перенести выше
        const categoriesList = categories.map(item => ({
            value: item._id,
            label: item.name
        }));
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 shadow p-4">
                        <h1 className="text-start">Добро пожаловать в редактор статей</h1>
                        <p>Здесь ты можешь добавлять материалы на сайт и публиковать их.</p>
                        <p>Заполни поля и отправь данные на модерацию.</p>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Название статьи"
                                type="name"
                                name="name"
                                value={inputData.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Ссылка на изображение"
                                type="img"
                                name="img"
                                value={inputData.img}
                                onChange={handleChange}
                                error={errors.img}
                            />
                            <SelectField
                                label="Тематика статьи"
                                defaultOption="Выбрать из списка..."
                                options={categoriesList}
                                name="category"
                                onChange={handleChange}
                                value={inputData.category}
                                error={errors.category}
                            />
                            <TextAreaField
                                label="Текст статьи"
                                name="content"
                                value={inputData.content || ""}
                                onChange={handleChange}
                                error={errors.content}
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
                                disabled={!isValid}
                            >
                                Сохранить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default ArticleCreatePage;
