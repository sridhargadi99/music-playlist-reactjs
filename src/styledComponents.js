import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #152850;
  min-height: 100vh;
  width: 100vw;
`
export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 400px;
  padding-left: 40px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
`
export const SingerName = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
`
export const Profession = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 0px;
`
export const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Heading = styled(SingerName)`
  font-size: 27px;
`
export const SearchContainer = styled.div`
  display: flex;
`

export const InputElement = styled.input`
  height: 40px;
  width: 300px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: #3b82f6;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid #cbd5e1;
  background-color: transparent;
  padding-left: 10px;
  border-right: 0px;
`
export const SearchButton = styled.button`
  background-color: transparent;
  font-size: 18px;
  color: #ffffff;
  border: 1px solid #cbd5e1;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-left: none;
  height: 40px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Container2 = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const NoSongFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
`
export const NoSongHeading = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
`
