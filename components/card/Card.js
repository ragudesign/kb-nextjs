import Link from 'next/link'
import { sanitiseExcerpt } from '../../lib/sanitise'
import cardStyles from './Card.module.scss'

const Card = (props) => {

    return (
        <Link href={props.link} key={props.id}>
        <a className={cardStyles.card}>
          <h2>{props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitiseExcerpt(props.excerpt) }} />
        </a>
      </Link>
    )

}

export default Card