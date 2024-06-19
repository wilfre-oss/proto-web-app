import { useParams } from "react-router-dom"
import { BigSpinner, SmallSpinner, Spinner } from "../components/ui/Spinners"

const Category = () => {
  let { category } = useParams()

  return (
    <h1>
      {category}
      <SmallSpinner />
      <Spinner />
      <BigSpinner />
    </h1>
  )
}

export default Category