import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const DOMAIN = "https://jsonplaceholder.typicode.com";

type User = {
  id: number;
  addres: any;
  name: string;
  company: any;
  email: string;
  phone: number;
  website: string;
  username: string;
};

type TODO = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const UsersAndTODOList = () => {
  const [users, setUsers] = useState<Array<User>>();
  const [readMoreId, setReadMoreId] = useState<number>();
  const [userSelectedId, setUserSelectedId] = useState<number>(1);
  const [TODOList, setTODOList] = useState<Array<TODO> | undefined>();

  useEffect(() => {
    const makeGet = (domain: string) => async (path: string) => {
      const users = await fetch(`${domain}${path}`).then((response) =>
        response.json()
      );
      setUsers(users);
    };

    makeGet(DOMAIN)("/users");
  }, []);

  useEffect(() => {
    const makeGet = (domain: string) => async (path: string) => {
      const TODOs = await fetch(`${domain}${path}`).then((response) =>
        response.json()
      );
      setTODOList(TODOs);
    };

    makeGet(DOMAIN)(`/todos/?userId=${userSelectedId}`);
  }, [userSelectedId]);

  return (
    <div className="grid w-full grid-cols-2">
      <div>
        {users?.map((u) => (
          <>
            <div
              onClick={() => {
                setUserSelectedId(u.id);
              }}
            >
              <li>{u.name}</li>
            </div>

            {readMoreId === u.id ? (
              <div>
                <li>{u.email}</li>
                <li>{u.phone}</li>
              </div>
            ) : (
              <Button onClick={() => setReadMoreId(u.id)}>Read More</Button>
            )}
          </>
        ))}
      </div>

      <div>
        {TODOList?.map((todo) => (
          <>
            <div>
              <li>{todo.title}</li>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UsersAndTODOList;
