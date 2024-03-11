import Link from "next/link"
import styles from "@/style/notfound.module.css"

const NotFound = () => {
    return (
        <div className={`${styles.container} ${styles.containertar}`}>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starFirst}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={styles.starSecond}></div>
            <div className={`${styles.container} ${styles.containerBird}`}>
                <div className={`${styles.bird} ${styles.birdAnim}`}>
                    <div className={styles.birdContainer}>
                        <div className={`${styles.wing} ${styles.wingLeft}`}>
                            <div className={styles.wingLeftTop}></div>
                        </div>
                        <div className={`${styles.wing} ${styles.wingRight}`}>
                            <div className={styles.wingRightTop}></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bird} ${styles.birdAnim}`}>
                    <div className={styles.birdContainer}>
                        <div className={`${styles.wing} ${styles.wingLeft}`}>
                            <div className={styles.wingLeftTop}></div>
                        </div>
                        <div className={`${styles.wing} ${styles.wingRight}`}>
                            <div className={styles.wingRightTop}></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bird} ${styles.birdAnim}`}>
                    <div className={styles.birdContainer}>
                        <div className={`${styles.wing} ${styles.wingLeft}`}>
                            <div className={styles.wingLeftTop}></div>
                        </div>
                        <div className={`${styles.wing} ${styles.wingRight}`}>
                            <div className={styles.wingRightTop}></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bird} ${styles.birdAnim}`}>
                    <div className={styles.birdContainer}>
                        <div className={`${styles.wing} ${styles.wingLeft}`}>
                            <div className={styles.wingLeftTop}></div>
                        </div>
                        <div className={`${styles.wing} ${styles.wingRight}`}>
                            <div className={styles.wingRightTop}></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bird} ${styles.birdAnim}`}>
                    <div className={styles.birdContainer}>
                        <div className={`${styles.wing} ${styles.wingLeft}`}>
                            <div className={styles.wingLeftTop}></div>
                        </div>
                        <div className={`${styles.wing} ${styles.wingRight}`}>
                            <div className={styles.wingRightTop}></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bird} ${styles.birdAnim}`}>
                    <div className={styles.birdContainer}>
                        <div className={`${styles.wing} ${styles.wingLeft}`}>
                            <div className={styles.wingLeftTop}></div>
                        </div>
                        <div className={`${styles.wing} ${styles.wingRight}`}>
                            <div className={styles.wingRightTop}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.containerTitle}>
                    <div className={styles.title}>
                        <div className={styles.number}>4</div>
                        <div className={styles.moon}>
                            <div className={styles.face}>
                                <div className={styles.mouth}></div>
                                <div className={styles.eyes}>
                                    <div className={styles.eyeLeft}></div>
                                    <div className={styles.eyeRight}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.number}>4</div>
                    </div>
                    <div className={styles.subtitle}>Ooop. Looks Like you took a wrong turn.</div>
                    <Link className={styles.backBtn} href={"/"}>Return Home</Link>
                </div>
            </div>
        </div>

    )
}

export default NotFound