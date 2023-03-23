import { useState } from 'react'

import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }) {
  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState([])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", { locale: ptBR },)
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })


  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }


  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Escreva algum comentário (obrigatório)')
  }

  function deleteComment(commentDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => { return comment !== commentDelete })

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText === ''

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow} </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return <p key={line.content}> <a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          name="comment"
          placeholder="Escreva um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            hidden={isNewCommentEmpty}
          > Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>


    </article>
  )
}