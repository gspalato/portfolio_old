import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Styles from './default.module.sass';

interface IDefaultButtonProps extends React.PropsWithChildren {
    className?: string;
    fill?: boolean;
    link?: string;
    onClick?: () => void;
    text: string;
    transparent?: boolean;
    [key: string]: any;
}

const DefaultButtonComponent: React.FC<IDefaultButtonProps> = (props) => {
    const {
        children,
        className,
        fill,
        link,
        onClick,
        text,
        transparent,
        ...moreProps
    } = props;

    const classNames = [Styles.button, className].join(' ');

    return (
        <motion.button
            initial={{
                backgroundColor: fill ? '#000' : 'transparent',
            }}
            whileHover={{
                scale: 1,
                border: '1px solid #fff',
                color: '#fff',
            }}
            whileTap={{
                scale: 0.975,
                color: '#fff'
            }}
            transition={{
                duration: 0.2,
                ease: [.53, -0.01, .44, 1.02]
            }}

            className={classNames}
            onClick={(() => onClick?.())}
            {...moreProps}
        >
            {text}{children}
        </motion.button>
    );
}

const DefaultButtonWithLinkComponent: React.FC<IDefaultButtonProps> = ({ children, link, ...props }) => {
    return link ? (
        <Link to={link}>
            <DefaultButtonComponent {...props}>
                {children}
            </DefaultButtonComponent>
        </Link>
    ) : (
        <DefaultButtonComponent {...props}>
            {children}
        </DefaultButtonComponent>
    );
}

export default DefaultButtonWithLinkComponent;