import { useState } from 'react'
import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'

import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {

  const [likeComment, setLikeComment] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeComment((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/maykbrito.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong className={styles.name}>Gabriel Moura</strong>

              <time className={styles.time} title="11 de maio às 08:30h " dateTime="2022-05-11 08:14">Publicado há 1h </time>
            </div>

            <button onClick={handleDeleteComment} className={styles.trashButton} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}