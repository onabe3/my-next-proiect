import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIST } from "./_constants";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIST,
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーで世界を変える</h1>
          <p className={styles.description}>テックカンパニー</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.News}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
