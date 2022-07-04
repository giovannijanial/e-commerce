import { useContext } from 'react';
import AuthContext from '../contexts/authProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
