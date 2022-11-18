import { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/heroicons-solid/Menu'
import { AddShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/AddShoppingCart'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import MediaMatch from 'components/MediaMatch'
import Button from 'components/Button'
import * as S from './styles'
import Logo from 'components/Logo'
import Cart, { CartProps } from 'components/Cart'

export type MenuProps = {
  username?: string
  photo?: string
  cart?: CartProps
}

const Menu = ({ username, photo, cart }: MenuProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpenMenu(true)}>
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
        <S.IconCart
          onClick={() => {
            !isOpenCart ? setIsOpenCart(true) : setIsOpenCart(false)
          }}
        >
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconCart>
        {!username ? <Button>Sign in</Button> : <S.Photo photo={photo} />}
      </S.MenuGroup>

      {isOpenMenu && <S.Sombra> </S.Sombra>}
      <S.MenuToggle aria-hidden={!isOpenMenu} isOpenMenu={isOpenMenu}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsOpenMenu(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Colletions</S.MenuLink>
          <S.MenuLink href="#">Men</S.MenuLink>
          <S.MenuLink href="#">Women</S.MenuLink>
          <S.MenuLink href="#">About</S.MenuLink>
          <S.MenuLink href="#">Contact</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>

      {isOpenCart && (
        <S.Cart>
          <Cart {...cart} />
        </S.Cart>
      )}
    </S.Wrapper>
  )
}
export default Menu
