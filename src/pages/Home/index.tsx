import { useEffect, useState } from 'react'
import Banner from '../../componentes/Banner'
import ProductsList from '../../componentes/ProductsList'

// import residente from '../../assets/images/resident.png'
// import zelda from '../../assets/images/zelda.png'
// import star_wars from '../../assets/images/star_wars.png'
// import Fifa23 from '../../assets/images/Fifa23.png'
// import street_fighter6 from '../../assets/images/street_fighter6.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

export const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setemBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setemBreve(res))
  }, [])
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}
