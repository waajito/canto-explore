import Image from "next/image";
import styles from "./cards.module.scss";
import Gap from "../gap";
import { CardProps } from "./highlightCard";
import { motion } from "framer-motion";
import Link from "next/link";

const ItemCard = (props: CardProps) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      className={`${styles.highlightCard} ${styles.itemCard}`}
    >
      <Image src={props.image} alt={props.title} width={100} height={100} />

      <section className={styles.container}>
        <div className={styles.links}>
          <Link href={props.links.site}>{props.category}</Link>
          {props.links.twitter && (
            <Link href={props.links.twitter}>Twitter</Link>
          )}
          {props.links.github && <Link href={props.links.github}>Github</Link>}
        </div>
        <Gap height={8} />
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
      </section>
    </motion.article>
  );
};

export default ItemCard;
