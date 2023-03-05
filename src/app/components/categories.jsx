// Компонент с темами статей для быстрой вильтрации контента по темам.
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Сategories = ({
    items,
    selectedItem,
    onItemSelect,
    valueProperty,
    contentProperty
}) => {
    if (_.isArray(items) === true) {
        return (
            <ul className="list-group">
                <h1>Группы статей</h1>
                {items.map(item => (
                    <li
                        key = { item[valueProperty] }
                        className = {"list-group-item " + (item[valueProperty] === selectedItem ? "active" : "")}
                        onClick = {() => onItemSelect(item[valueProperty])}
                        role = "button"
                    >
                        <h5>{ item[contentProperty] }</h5>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <ul className="list-group">
                {Object.keys(items).map(key => (
                    <li
                        key = { items[key][valueProperty] }
                        className = {"list-group-item " + (items[key][valueProperty] === selectedItem ? "list-group-item-dark" : "")}
                        onClick = {() => onItemSelect(items[key][valueProperty])}
                        role = "button"
                    >
                        <h5>{ items[key][contentProperty] }</h5>
                    </li>
                ))}
            </ul>
        );
    };
};

Сategories.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.string
};

export default Сategories;
