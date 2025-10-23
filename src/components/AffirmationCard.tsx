import type { Affirmation } from '../types'
import './AffirmationCard.css'

type Props = {
    affirmation: Affirmation
    entering?: boolean
    style?: React.CSSProperties
}

export function AffirmationCard({ affirmation, entering = false, style }: Props) {
    const { text, author, tags } = affirmation
    const tagList = (tags || []).slice(0, 2)

    return (
        <article className={`card ${entering ? 'card-enter' : ''}`} style={style} aria-live="polite">
            <p className="text">{text}</p>
            <footer className="meta">
                {author && <span className="author">— {author}</span>}
                {(!author && tagList.length) ? (
                    <em className="tags" aria-label="tags">
                        <span className="tag-label">tag{tagList.length > 1 ? 's' : ''}: </span>
                        {tagList.join(' · ')}
                    </em>
                ) : null}
            </footer>
        </article>
    )
}

export default AffirmationCard
