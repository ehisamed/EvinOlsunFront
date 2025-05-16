import React from 'react'
import './style.scss'
import RecomendationList from './components/RecomendationList/RecomendationList'

const Recommendations: React.FC = () => {
  return (
    <div className='recomendations'>
        <h2 className='recomendations--title'>Tövsiyə olunanlar</h2>
        <RecomendationList />
    </div>
  )
}

export default Recommendations