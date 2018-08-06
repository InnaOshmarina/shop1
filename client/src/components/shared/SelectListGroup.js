import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SelectListGroup = ({
    name,
    valueLabel,
    valueItem,
    value,
    error,
    info,
    onChange,
    options
}) => {
    const selectOptions = options.map((option, optionIndex) => (
        <option key={optionIndex} value={option[valueItem]}>
            {option[valueLabel]}
        </option>
    ));
    return (
        <div className="form-group">
            <select
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                name={name}
                value={value}
                onChange={onChange}>

                  {selectOptions}

            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
SelectListGroup.defaultProps = {
    valueLabel: 'title',
    valueItem:'_id'
};

SelectListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

export default SelectListGroup;
