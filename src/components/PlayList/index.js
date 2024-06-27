import {AiOutlineDelete} from 'react-icons/ai'

import {
  ListContainer,
  ListContainer1,
  Image,
  ContentContainer,
  Content1,
  Content2,
  ListContainer2,
  Time,
  DeleteButton,
} from './styledComponents'

const PlayList = props => {
  const {eachTrack, getSongId} = props
  const {id, imageUrl, name, genre, duration} = eachTrack
  const onCLickChangeId = () => getSongId(id)
  return (
    <ListContainer>
      <ListContainer1>
        <Image src={imageUrl} alt="track" />
        <ContentContainer>
          <Content1>{name}</Content1>
          <Content2>{genre}</Content2>
        </ContentContainer>
      </ListContainer1>
      <ListContainer2>
        <Time>{duration}</Time>
        <DeleteButton data-testid="delete" onClick={onCLickChangeId}>
          <AiOutlineDelete />
        </DeleteButton>
      </ListContainer2>
    </ListContainer>
  )
}
export default PlayList
