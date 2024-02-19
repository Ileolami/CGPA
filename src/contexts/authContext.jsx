import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const token = localStorage.setItem('CGPASecret', data.token); // Assuming the token is stored in local storage
      console.log(token);
      const response = await fetch('/loginstudent', {
        headers: {
          'x-auth-token': token
        }
      });
      const data = await response.json();

      if (response.ok) {
        setStudent(data.student);
      } else {
        console.error(data.message);
      }
    };

    fetchStudent();
  }, []);

  return (
    <AuthContext.Provider value={{ student }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;