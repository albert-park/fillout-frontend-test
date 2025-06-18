import styles from "./page.module.css";
import HandWave from "@/components/svg/hand-wave";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <HandWave height={100} width={100} />
          <h1>Hi, I'm Albert</h1>
        </div>
        <ol>
          <li>Thanks for sending over this test. I had fun building it!</li>
          <li>Feel free to get in touch using the link below</li>
        </ol>

        <div className={styles.ctas}>
          <a
            href="https://linkedin.com/in/albertpark1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            See my LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
