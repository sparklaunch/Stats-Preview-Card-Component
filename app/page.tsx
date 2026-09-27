import Image from "next/image";
import styles from "./Home.module.css";
import desktopHeader from "./assets/images/desktop-header.jpg";

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.left}>
				<h1 className={styles.header}>
					Get <span className={styles.insights}>insights</span> that
					help your business grow.
				</h1>
				<p className={styles.content}>
					Discover the benefits of data analytics and make better
					decisions regarding revenue, customer experience, and
					overall efficiency.
				</p>
				<div className={styles.indices}>
					<div className={styles.indexWrapper}>
						<h2 className={styles.index}>10k+</h2>
						<p className={styles.indexTitle}>COMPANIES</p>
					</div>
					<div className={styles.indexWrapper}>
						<h2 className={styles.index}>314</h2>
						<p className={styles.indexTitle}>TEMPLATES</p>
					</div>
					<div className={styles.indexWrapper}>
						<h2 className={styles.index}>12M+</h2>
						<p className={styles.indexTitle}>QUERIES</p>
					</div>
				</div>
			</section>
			<section className={styles.right}>
				<Image
					src={desktopHeader}
					alt=""
					className={styles.desktopHeader}
				/>
				<div className={styles.filter} />
			</section>
		</main>
	);
}
