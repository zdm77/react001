import React from 'react';
import style from "../style/style";

const TextField = ({name, onChange, label}) => (
    <div style={style.inputGroup}>
        <label>
            {label}
            <input
                style={style.input}
                type="text"
                name={name}
                onChange={onChange}
            />
        </label>
    </div>
);
export default TextField;