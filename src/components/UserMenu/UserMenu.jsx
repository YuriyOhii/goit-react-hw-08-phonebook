import { FaUser } from 'react-icons/fa';
import { Wrap } from './UserMenu.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/selectors';
import { logoutUser } from 'redux/auth/operations';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <p>
        Hello! <FaUser /> {email}
      </p>
      <Button onClick={() => dispatch(logoutUser())}>LogOut</Button>
    </Wrap>
  );
};
