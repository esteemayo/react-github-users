import { useState, useEffect } from "react";

import { getUsers } from "./../services/userService";
import Loading from "./Loading";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <h3>Github Users</h3>
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </>
  );
};

export default Users;
