import { useParams } from "react-router-dom";

//Example 1:

// function User() {
//   const { id } = useParams();
//   return <h2>User ID: {id}</h2>;
// }

// export default User;


//to get output our brwser will look as :
//http://localhost:5173/user/14
//on window it will fetch the data passed in url and show output as:
//User ID: 14

//as user ID changes , output changes:
//http://localhost:5173/user/100
//User ID: 100

//Example 2:

function User() {
  const { username } = useParams(); // access dynamic route param

  return (
    <div>
      <h2>Hello, {username}!</h2>
    </div>
  );
}

export default User;
