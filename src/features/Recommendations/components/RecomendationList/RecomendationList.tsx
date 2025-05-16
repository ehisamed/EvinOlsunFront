import React, { memo } from 'react'
import './recomendationList.scss'
import RecomendationCard from '../RecomendationCard/RecomendationCard'

type IRecomendationCard = {
    id: number,
    url: string
    img: string
    price: string,
    room: string,
    area: string,
    floor: string,
    address: string
}

const mockData: IRecomendationCard[] = [
    {
        id: 1,
        url: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        img: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        price: "4500000",
        room: "Studiya",
        area: "28,8",
        floor: "5/9",
        address: "Nizami küçəsi, 45"
    },
    {
        id: 2,
        url: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        img: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        price: "5500000",
        room: "1-otaqlı.",
        area: "35,5",
        floor: "3/9",
        address: "Qara Qarayev küçəsi, 13"
    },
    {
        id: 3,
        url: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        img: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        price: "7000000",
        room: "2-otaqlı.",
        area: "50,0",
        floor: "2/9",
        address: "Füzuli küçəsi, 22"
    },
    {
        id: 4,
        url: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        img: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        price: "9000000",
        room: "3-otaqlı.",
        area: "75,1",
        floor: "4/9",
        address: "Səməd Vurgun küçəsi, 19"
    },
    {
        id: 5,
        url: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        img: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        price: "11000000",
        room: "4-otaqlı.",
        area: "90,0",
        floor: "1/9",
        address: "Həsən bəy Zardabi küçəsi, 3"
    },
    {
        id: 6,
        url: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        img: "https://img.dmclk.ru/c960x640q80/vitrina/aa/a8/aaa812921947af82960e381a54b3f702a0b06256.webp",
        price: "13000000",
        room: "5+ otaqlı.",
        area: "120,0",
        floor: "6/9",
        address: "Azadlıq prospekti, 88"
    }
];

const RecomendationList = () => {
    return (
        <div className='recomendation-list'>
            {mockData.map(item => (
                <RecomendationCard key={item.id} {...item} />
            ))}
        </div>
    )
}

export default memo(RecomendationList)