import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Styles from './bare.module.sass';

interface IButtonProps extends React.PropsWithChildren {
    className?: string;
    text: string;
    link?: string;
    onClick?: () => void;
    transparent?: boolean;
    [key: string]: any;
}

const ButtonComponent: React.FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        text,
        link,
        onClick,
        transparent,
        ...moreProps
    } = props;

    const classNames = [Styles.button, className].join(' ');

    return (
        <motion.button
            whileHover={{
                scale: 1.125,
            }}
            whileTap={{
                scale: 0.975
            }}
            transition={{
                duration: 0.2
            }}

            className={classNames}
            onClick={(() => onClick?.())}
            {...moreProps}
        >
            {text}{children}
        </motion.button>
    );
}

const ButtonWithLinkComponent: React.FC<IButtonProps> = ({ children, link, ...props }) => {
    return link ? (
        <Link to={link}>
            <ButtonComponent {...props}>
                {children}
            </ButtonComponent>
        </Link>
    ) : (
        <ButtonComponent {...props}>
            {children}
        </ButtonComponent>
    );
}

export default ButtonWithLinkComponent;