import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={32}
            height={32}
            alt="style"
            className={styles.image}
          />
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={32}
            height={32}
            alt="style"
            className={styles.image}
          />{" "}
          Coding
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={32}
            height={32}
            alt="style"
            className={styles.image}
          />{" "}
          Culture
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={32}
            height={32}
            alt="style"
            className={styles.image}
          />
          Travel
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
