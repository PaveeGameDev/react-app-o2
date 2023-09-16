import { useEffect, useRef, useState } from "react";
import { ProductList } from "./ProductList";
import { Simulate } from "react-dom/test-utils";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import { useUsers } from "./hooks/useUsers";

export const BackEndConnectionMain = () => {
  // const ref = useRef<HTMLInputElement>(null);
  //
  // useEffect(() => {
  //   if (ref.current) ref.current.focus();
  // });
  //
  // useEffect(() => {
  //   document.title = "My App";
  // });

  // const [category, setCategory] = useState("");

  // const connect = () => console.log("Connecting");
  // const disconnect = () => console.log("Disconnecting");
  //
  // useEffect(() => {
  //   connect();
  //   return () => disconnect();
  // });

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users",
  //       );
  //       setUsers(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };
  //
  //   fetchUsers();
  // }, []);

  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {/*<input ref={ref} type="text" className="form-control" />*/}
      {/*<select*/}
      {/*  className="form-select"*/}
      {/*  onChange={(event) => setCategory(event.target.value)}*/}
      {/*>*/}
      {/*  <option value=""></option>*/}
      {/*  <option value="Clothing">Clothing</option>*/}
      {/*  <option value="Household">Household</option>*/}
      {/*</select>*/}
      {/*<ProductList category={category} />*/}
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
