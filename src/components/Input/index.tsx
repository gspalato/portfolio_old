import React from 'react';

import Styles from './input.module.sass';

interface IInputProps {
    className?: string;
    placeholder?: string;
    [key: string]: any;
}

const Input: React.FC<IInputProps> = (props) => {
    const {
        className,
        placeholder,
        ...moreProps
    } = props

    const classNames = [Styles.input, className].join(' ');

    return (
        <input className={classNames} placeholder={placeholder} {...moreProps} />
    );
}

export default Input;