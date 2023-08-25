import { Container, AvatarWrapper } from './styles';

interface IUsers {
  username: string;
  bio: string;
  last_name: string;
  date_joined: string;
  is_active: boolean;
  profile_picture: string;
}

const UserCard = (props: IUsers) => {

  return (
    <Container>
        <AvatarWrapper>
            <img src={props.profile_picture} alt={props.username} />
        </AvatarWrapper>
        <div>
            {
                props.is_active ? (
                    <span style={{ color: '#23a14f' }}>Active</span>
                ) : (
                    <span style={{ color: '#782125' }}>Not Active</span>
                )
            }
            <h1>{props.username}</h1>
            <h2>{props.last_name}</h2>
            <p>{props.date_joined}</p>
            <h3>{props.bio}</h3>
        </div>
    </Container>
  )
}

export default UserCard