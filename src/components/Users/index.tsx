import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store'; 
import { fetchUsers } from '../../store/slices/users';

import {HtmlPage} from './page'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

   if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;


  return <HtmlPage users={users}/>;
};

export default Home;