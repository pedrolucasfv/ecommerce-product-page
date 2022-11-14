import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'fullWidth'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.5rem;
      & + span {
        margin-left: 0.9rem;
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: hsl(26, 100%, 55%);
    color: hsl(0, 0%, 100%);
    border: 0;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.8rem;
    text-decoration: none;

    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon()};
  `}
`