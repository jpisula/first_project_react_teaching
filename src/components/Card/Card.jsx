import styles from './Card.module.scss';

const Card = (props) => {
  const { name, price, rarity, set, src_png, tcgplayer, type } = props.card;

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <img src={src_png} alt='' />
        <h2>{name}</h2>
      </header>
      <main className={styles.articleBody}>
        <ul className={styles.cardAttributes}>
          <li>
            <p>Rarity</p>
            <span>{rarity}</span>
          </li>
          <li>
            <p>Type</p>
            <span>{type}</span>
          </li>
          <li>
            <p>Set</p>
            <span>{set}</span>
          </li>
        </ul>
      </main>
      <footer className={styles.cardFooter}>
        <a href={tcgplayer}>Click to buy</a>
        <p>price: {price}$</p>
      </footer>
    </article>
  );
};

export default Card;
