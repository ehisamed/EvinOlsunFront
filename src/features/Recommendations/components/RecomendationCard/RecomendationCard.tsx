import React, { memo } from 'react'
import './recomendationCard.scss'


type Props = {
  url: string
  img: string
  price: string,
  room: string,
  area: string,
  floor?: string,
  address: string
}

const RecomendationCard: React.FC<Props> = ({
  url,
  img,
  price,
  room,
  area,
  floor,
  address
}) => {


  const priceFormat = (price: string) => {
    const priceNumber = parseFloat(price);
    return priceNumber.toLocaleString('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

  return (
    <div className='recomendation-card'>
      <a href={url} className="recomendation-card--inner">
        <div className="recomendation-card--imgWrapper">
          <img src={img} alt="" className="recomendation-card--img" />
        </div>
        <div className="recomendation-card--price">{priceFormat(price)} ₼</div>
        <div className="recomendation-card--info">
          <div className="recomendation-card--room">{room}</div>
          <div className="recomendation-card--area">{area}м²</div>
          <div className="recomendation-card--floor">{floor}</div>
        </div>
        <div className="address">{address}</div>
      </a>
    </div>
  )
}

export default memo(RecomendationCard)