import Slider from "react-slick"

import "./Slider.scss"
import SliderItem from "./SliderItem"
import { data } from "./slider.data"

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      {data.map((item, i) => (
        <SliderItem key={i} name={item.name} rate={item.rate} job={item.job} text={item.text} />
      ))}
    </Slider>
  )
}
export default MySlider
