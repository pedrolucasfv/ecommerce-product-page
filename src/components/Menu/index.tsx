import { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/heroicons-solid/Menu'
import { AddShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/AddShoppingCart'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import MediaMatch from 'components/MediaMatch'
import Button from 'components/Button'
import * as S from './styles'
import Logo from 'components/Logo'

export type MenuProps = {
  username?: string
  photo?: string
}

const Menu = ({ username, photo }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper color="white">
        <Logo />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Colletions</S.MenuLink>
          <S.MenuLink href="#">Men</S.MenuLink>
          <S.MenuLink href="#">Women</S.MenuLink>
          <S.MenuLink href="#">About</S.MenuLink>
          <S.MenuLink href="#">Contact</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!username ? (
          <Button>Sign in</Button>
        ) : (
          <S.Photo photo={photo}></S.Photo>
        )}
      </S.MenuGroup>

      {isOpen && <S.Sombra> </S.Sombra>}
      <S.MenuToggle aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Colletions</S.MenuLink>
          <S.MenuLink href="#">Men</S.MenuLink>
          <S.MenuLink href="#">Women</S.MenuLink>
          <S.MenuLink href="#">About</S.MenuLink>
          <S.MenuLink href="#">Contact</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  )
}
export default Menu
