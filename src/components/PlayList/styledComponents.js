import styled from 'styled-components'

export const ListContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  list-style-type: none;
`
export const ListContainer1 = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  height: 150px;
  width: 200px;
  margin-right: 30px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Content1 = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
`
export const Content2 = styled(Content1)`
  color: #3b82f6;
  margin-top: 0px;
`

export const ListContainer2 = styled.div`
  display: flex;
  align-items: center;
`

export const Time = styled(Content1)`
  color: #ffffff;
  margin-right: 30px;
`
export const DeleteButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 25px;

  color: #ffffff;
  margin-right: 30px;
`
