import { useParams } from "react-router-dom"

const Category = () => {
  let { category } = useParams()

  return (
    <h1>
      {category}
    </h1>
  )
}

export default Category