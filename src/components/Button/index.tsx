import * as S from './styles'

export type ButtonProps = {
  fullWidth?: boolean
  icon?: JSX.Element
  children?: React.ReactNode
}

const Button = ({ fullWidth = false, icon, children }: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
