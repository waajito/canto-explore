import Image from "next/image";
import styles from "./cards.module.scss";
import Gap from "../gap";
import Link from "next/link";
import Analytics from "@/provider/analytics";

export interface CardProps {
  title: string;
  description: string;
  image: string;
  BGColor?: string;
  category: string;
  links: {
    site: string;
    twitter?: string;
    github?: string;
  };
  active?: boolean;
  style?: React.CSSProperties;
}
const HighlightCard = (props: CardProps) => {
  return (
    <article className={styles.highlightCard} style={props.style}>
      {props.active && (
        <Link
          href={props.links.site}
          className={styles["fill-link"]}
          target="_blank"
          onClick={() =>
            Analytics.actions.events.externalLinkClicked({ Website: props.title })
          }
        />
      )}
      <Image
        src={props.image}
        alt={props.title}
        style={{
          backgroundColor: props.BGColor,
        }}
        width={600}
        height={400}
      />

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
    </article>
  );
};

export default HighlightCard;
