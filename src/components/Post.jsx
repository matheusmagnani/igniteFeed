import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/2254731?v=4.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:30h " dateTime="2022-05-11 08:14">Publicado há 1h </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

        <p>👉{' '}  <a href="#">jane.design/doctorcare </a> </p>

        <p>
          <a href=""> #novoprojeto </a>{' '}
          <a href=""> #nlw </a>{' '}
          <a href=""> #rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          placeholder="Escreva um comentário"
        />

        <footer>
          <button type="submit"> Publicar</button>
        </footer>
      </form>


    </article>
  )
}