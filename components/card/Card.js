import Link from 'next/link';
import { sanitiseExcerpt } from '../../lib/sanitise.js';
import cardStyles from './Card.module.scss';

const Card = (props) => {
  return (
    <Link href={props.link} key={props.id}>
      <a className={cardStyles.card}>
        <h2>{props.title}</h2>
        {props.excerpt ? <div dangerouslySetInnerHTML={{ __html: sanitiseExcerpt(props.excerpt) }} /> : ''}
      </a>
    </Link>
  );
};

export default Card;
