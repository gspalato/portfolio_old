import { HTMLMotionProps, motion } from "framer-motion";

import Styles from './page.module.sass';

interface IPageProps extends HTMLMotionProps<'div'> {
    className?: string;
}

const Page: React.FC<IPageProps> = (props) => {
    const {
        children,
        className,
    } = props;

    const classNames = [Styles.contentWrapper, className].join(' ');

    return (
        <motion.div
            className={classNames}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}

export default Page;