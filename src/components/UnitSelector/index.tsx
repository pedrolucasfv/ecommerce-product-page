import { useState, useEffect } from 'react'

import * as S from './styles'
import { Plus } from '@styled-icons/heroicons-solid/Plus'
import { Subtract } from '@styled-icons/remix-fill/Subtract'

export type UnitSelectorProps = {
  unitFunc: (unit: number) => void
}

const UnitSelector = ({ unitFunc }: UnitSelectorProps) => {
  const [unit, setUnit] = useState(0)

  const changeUnit = (op: string) => {
    if (op == 'add') setUnit(unit + 1)
    else if (op == 'sub') setUnit(unit - 1)
  }

  useEffect(() => {
    unitFunc(unit)
  }, [unit, unitFunc])

  return (
    <S.Wrapper>
      <S.SubtractButton
        role="button"
        onClick={() => {
          if (unit > 0) changeUnit('sub')
        }}
      >
        <Subtract />
      </S.SubtractButton>
      <S.Unit>{unit}</S.Unit>
      <S.PlusButton role="button" onClick={() => changeUnit('add')}>
        <Plus />
      </S.PlusButton>
    </S.Wrapper>
  )
}
export default UnitSelector
