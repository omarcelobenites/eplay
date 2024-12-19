import Section from '../Section'
import type { GalleryItem } from '../../pages/Home'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'

const mock: GalleryItem[] = [
  { type: 'image', url: zelda },
  { type: 'image', url: spiderman },
  { type: 'video', url: 'https://www.youtube.com/embed/TuK5vta0G-0' }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      {modal.isVisible && (
        <Modal className="visivel">
          <ModalContent className="container">
            <header>
              <h4>{name}</h4>
              <img
                src={fechar}
                alt="Fechar modal"
                onClick={() => {
                  closeModal()
                }}
              />
            </header>
            {modal.type === 'image' ? (
              <img src={modal.url} alt="Jogo Spider-Man" />
            ) : (
              <iframe frameBorder={0} src={modal.url} />
            )}
          </ModalContent>
          <div className="overlay" onClick={() => closeModal()}></div>
        </Modal>
      )}
    </>
  )
}

export default Gallery
