import styles from "./about.module.css"
import Image from "next/image"

export const metadata = {
    title: "About",
    description: "Ayhan Berk's About Page with nextjs",
}

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Page</h2>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, harum?</h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla ex quaerat ullam nihil eius recusandae suscipit mollitia at totam,
                    magnam animi aperiam, corporis perspiciatis veritatis provident reiciendis fugit error eligendi rerum cum ratione corrupti placeat. Numquam hic libero porro quia adipisci,
                    harum vero nihil nisi reiciendis commodi ipsum deleniti sunt.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h2>Workin</h2>
                        <p>React</p>
                    </div>
                    <div className={styles.box}>
                        <h2>Newbie</h2>
                        <p>NextJs</p>
                    </div>
                    <div className={styles.box}>
                        <h2>Always</h2>
                        <p>Learning</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src={"/aboutpagebanner.png"}
                    alt="picture for about"
                    className={styles.img}
                    sizes="90%"
                    fill
                />
            </div>

        </div>
    )
}

export default AboutPage
