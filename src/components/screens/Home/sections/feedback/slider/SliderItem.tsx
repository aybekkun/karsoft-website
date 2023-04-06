//@ts-ignore
import ReactStars from "react-rating-stars-component"

import Rating from "./Rating"

type SliderItemProps = {
  name: string
  rate: number
  job: string
  text: string
}

const SliderItem = ({ name, rate, job, text }: SliderItemProps) => {
  return (
    <div className="sliderTop">
      <div className="sliderItem">
        <p className="text">{text}</p>
        <Rating rating={rate} />
        <h4 className="name">{name}</h4>
        <p className="job"> {job}</p>
      </div>
    </div>
  )
}
export default SliderItem
