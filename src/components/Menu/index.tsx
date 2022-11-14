//import { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/heroicons-solid/Menu'
import { AddShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/AddShoppingCart'
//import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import MediaMatch from 'components/MediaMatch'
import Button from 'components/Button'
import * as S from './styles'
import Logo from 'components/Logo'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => (
  <S.Wrapper>
    <MediaMatch lessThan="medium">
      <S.IconWrapper>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
    </MediaMatch>

    <S.LogoWrapper>
      <Logo />
    </S.LogoWrapper>

    <S.MenuGroup>
      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </S.IconWrapper>
      {!username ? (
        <MediaMatch lessThan="medium">
          <Button>Sign in</Button>
        </MediaMatch>
      ) : (
        <MediaMatch lessThan="medium">
          <Button></Button>
        </MediaMatch>
      )}
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
