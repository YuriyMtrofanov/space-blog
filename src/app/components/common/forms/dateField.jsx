import React from "react";
import PropTypes from "prop-types";

const DateField = ({
    label, // Заголовок поля
    type,
    name,
    value,
    onChange,
    error,
    placeholder
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
        // console.log(target.name, target.value);
    };

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4">
            <label htmlFor="inputDate">{ label }</label>
            <div className="input-group date has-validation">
                <input
                    type = "date"
                    id = {name}
                    name = {name}
                    value = {value}
                    onChange = {handleChange}
                    className = {getInputClasses()}
                />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
                {error &&
                    <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

DateField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default DateField;
