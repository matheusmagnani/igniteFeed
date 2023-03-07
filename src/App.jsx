import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post author={"Matheus Magnani"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nihil aperiam cupiditate, quia ullam modi libero delectus dignissimos officia repellendus, praesentium unde non porro numquam a at quos blanditiis aspernatur?"}
      />

      <Post author={"Gabriel Fernandes"} content={"Muito legal isso!"}
      />
    </div>
  )
}
