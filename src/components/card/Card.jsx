import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>18.02.2024</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, libero.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam
          quibusdam aliquam, velit voluptatum nisi tempora minima earum! Fuga id
          sit distinctio! Impedit similique dolorum facere animi soluta illo
          eligendi.
        </p>
        <Link href="/" className={styles.link}>
          {" "}
          Read More{" "}
        </Link>
      </div>
    </div>
  );
};

export default Card;
