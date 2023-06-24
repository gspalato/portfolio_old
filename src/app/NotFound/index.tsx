import Page from "@/components/Page";

import Styles from "./notfound.module.sass";

const Component = () => {
    return (
        <Page>
            <section className={Styles.page}>
                <h1 style={{ fontFamily: "Space Grotesk", fontSize: "10rem" }}>404</h1>
            </section>
        </Page>
    );
}

export default Component;