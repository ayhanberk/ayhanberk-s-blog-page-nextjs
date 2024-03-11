import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";
export default function Home() {
  return (
    <>


      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Blog Page with NextJs
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cumque laborum dolores aliquid hic, sunt doloribus asperiores harum placeat debitis magnam!
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brands}>
            <Link href={process.env.GIT_HUB_URL} target="_blank" className={styles.button}>
              <Image src={"/github.svg"} alt="brandsIMG" fill className={styles.brandImg} />
            </Link>
            <Link href={process.env.LINKEDIN_URL} target="_blank" className={styles.button}>
              <Image src={"/linkedin.svg"} alt="linkedin IMG" fill className={styles.brandImg} />
            </Link>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/main.gif"} alt="img-image" fill className={styles.mainImg} sizes="100%" />
        </div>
      </div>
    </>

  );
}
