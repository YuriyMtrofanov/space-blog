import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/forms/textField";
import SelectField from "../../common/forms/selectField";
import TextAreaField from "../../common/forms/textAreaField";
import { editArticleInfo, getArticById } from "../../../store/articles";
// import api from "../../../../api";
import { getCategories } from "../../../store/categories";

const ArticleEditPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { articleId } = useParams();
    const article = useSelector(getArticById(articleId));

    // затычка покачто:
    const categories = useSelector(getCategories());
    // const categories = api.categories.categories;
    const categoriesList = categories.map(item => ({
        value: item._id,
        label: item.name
    }));

    const [inputData, setInputData] = useState({
        name: article.name,
        img: article.img,
        category: article.category,
        content: article.content
    });

    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
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
        }
    };

    const validate = () => {
        const errors = validator(inputData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
    }, [inputData]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const outputData = {
            ...article,
            name: inputData.name,
            img: inputData.img,
            category: inputData.category,
            content: inputData.content
        };
        dispatch(editArticleInfo(articleId, outputData));
        history.replace("/articles");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 shadow p-4">
                    <h1 className="text-start">Добро пожаловать в редактор статей</h1>
                    <p>Здесь ты можешь материал своей публикации</p>
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

export default ArticleEditPage;
