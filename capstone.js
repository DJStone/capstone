const COHORT_NAME = "2302-ACC-CT-WEB-PT-B";
const apiURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export const registerUser = async (username, password) => {
    try {
      const response = await fetch(`${apiURL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  
  export const login = async (username, password) => {
    try {
      const response = await fetch(`${apiURL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };