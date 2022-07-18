import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/usersAction';
import CardComponent from './CardComponent';

const UsersComponent = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, error } = useSelector((state) => state.users);
  console.log('allUsers->', allUsers);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: 'John Doe',
          company: {
            name: 'BlackRock',
            catchPhrase: 'Multi-layered Client-server neural-net',
          },
        },
      ])
    );
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {allUsers.length > 0 &&
        allUsers.map((userData) => (
          <CardComponent userData={userData} key={userData.id} />
        ))}
      {allUsers.length === 0 && !isLoading && <p>No users available!</p>}
      {error && !isLoading && <p>{error}</p>}
    </>
  );
};

export default UsersComponent;
