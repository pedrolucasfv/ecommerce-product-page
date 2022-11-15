import styled from 'styled-components'

export const Wrapper = styled.article`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(223, 64%, 98%);
  padding: 2rem;
  border-radius: 1.5rem;
`

export const Unit = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

export const PlusButton = styled.div`
  > svg {
    height: 5rem;
    width: 5rem;
    color: hsl(26, 100%, 55%);
    cursor: pointer;
  }
`

export const SubtractButton = styled.div`
  > svg {
    height: 5rem;
    width: 5rem;
    color: hsl(26, 100%, 55%);
    cursor: pointer;
  }
`
