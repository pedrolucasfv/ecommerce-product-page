import { useState } from 'react'
import * as S from './styles'

export type ImageBoxProps = {
  image: string[]
}

//LEMBRAR DE ARRUMAR ESSA GAMBIARRA PARA SELECIONAR UMA IMAGEM

const ImageBox = ({ image }: ImageBoxProps) => {
  const [select0, setSelect0] = useState(true)
  const [select1, setSelect1] = useState(false)
  const [select2, setSelect2] = useState(false)
  const [select3, setSelect3] = useState(false)
  const [img, setImg] = useState(0)
  return (
    <S.Wrapper>
      <S.MainImage src={image[img]} />
      <S.ImageList>
        <S.Image
          select={select0}
          src={image[0]}
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
          src={image[1]}
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
          src={image[2]}
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
          src={image[3]}
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
