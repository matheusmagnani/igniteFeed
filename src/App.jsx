import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ', },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-03-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabrielmoura33.png',
      name: 'Gabriel Moura',
      role: 'Web Developer Senior',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal ', },
      { type: 'paragraph', content: 'Gostei muito dessa plataforma, bem interativa e legal 🚀 ', }
    ],
    publishedAt: new Date('2023-03-19 20:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>

    </div>
  )
}
