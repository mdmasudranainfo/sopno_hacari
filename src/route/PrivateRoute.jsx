"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [User, SetUser] = useState({});

  console.log(User?._id);

  useState(() => {
    setLoading(true);
    try {
      fetch("http://localhost:3000/api/user")
        .then((res) => res.json())
        .then((data) => {
          SetUser(data?.data);
        });
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <div>hello</div>;
  }
  if (User?._id) {
    return children;
  } else {
    router.push("/login");
  }
};

export default PrivateRoute;
