import { useState } from 'react'
import * as S from './styles'

export type ImageBoxProps = {
  images: string[]
}

//LEMBRAR DE ARRUMAR ESSA GAMBIARRA PARA SELECIONAR UMA IMAGEM

const ImageBox = ({ images }: ImageBoxProps) => {
  const [select0, setSelect0] = useState(true)
  const [select1, setSelect1] = useState(false)
  const [select2, setSelect2] = useState(false)
  const [select3, setSelect3] = useState(false)
  const [img, setImg] = useState(0)
  return (
    <S.Wrapper>
      <S.MainImage src={images[img]} role="img" aria-label="mainImage" />
      <S.ImageList>
        <S.Image
          select={select0}
          src={images[0]}
          onClick={() => {
            setImg(0)
            setSelect0(true)
            setSelect1(false)
            setSelect2(false)
            setSelect3(false)
          }}
        >
          <S.Film></S.Film>
        </S.Image>

        <S.Image
          select={select1}
          src={images[1]}
          onClick={() => {
            setImg(1)
            setSelect0(false)
            setSelect1(true)
            setSelect2(false)
            setSelect3(false)
          }}
        />
        <S.Image
          select={select2}
          src={images[2]}
          onClick={() => {
            setImg(2)
            setSelect0(false)
            setSelect1(false)
            setSelect2(true)
            setSelect3(false)
          }}
        />
        <S.Image
          select={select3}
          src={images[3]}
          onClick={() => {
            setImg(3)
            setSelect0(false)
            setSelect1(false)
            setSelect2(false)
            setSelect3(true)
          }}
        />
      </S.ImageList>
    </S.Wrapper>
  )
}

export default ImageBox
