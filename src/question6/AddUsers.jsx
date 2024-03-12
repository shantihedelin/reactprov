import { addUser } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function AddUsers() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  function handleAdd() {
    dispatch(addUser({ id: Date.now(), text }));
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter username"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add username</button>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddUsers;
