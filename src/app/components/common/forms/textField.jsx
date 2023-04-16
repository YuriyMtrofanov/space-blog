import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({
    label, // Заголовок поля
    type,
    name,
    value,
    onChange,
    error,
    placeholder
}) => {
    const [showPassword, setShowPassword] = useState();

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const changeShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4">
            <label htmlFor={name}>{ label }</label>
            <div className="input-group has-validation">
                <input
                    type = {showPassword ? "text" : type}
                    id = {name}
                    name = {name}
                    value = {value}
                    onChange = {handleChange}
                    className = {getInputClasses()}
                    placeholder = {placeholder === "Search" ? "Search" : ""}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={changeShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
                {error &&
                    <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextField;
