import { useState } from 'react'

import * as S from './styles'
import { Plus } from '@styled-icons/heroicons-solid/Plus'
import { Subtract } from '@styled-icons/remix-fill/Subtract'

const UnitSelector = () => {
  const [unit, setUnit] = useState(0)
  return (
    <S.Wrapper>
      <S.SubtractButton
        role="button"
        onClick={() => {
          if (unit > 0) setUnit(unit - 1)
        }}
      >
        <Subtract />
      </S.SubtractButton>
      <S.Unit>{unit}</S.Unit>
      <S.PlusButton role="button" onClick={() => setUnit(unit + 1)}>
        <Plus />
      </S.PlusButton>
    </S.Wrapper>
  )
}
export default UnitSelector
