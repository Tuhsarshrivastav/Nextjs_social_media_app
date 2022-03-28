import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "../components/Spinner";

const UserRoute = () => {
  const router = useRouter();
  const [ok, setOk] = useState(false);
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, [state && state.token]);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/currentuser`,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
    } catch (error) {
      router.push("/login");
    }
  };
  if (data.ok) setOk(true);

  return !ok ? <Spinner /> : <>{children}</>;
};

export default UserRoute;
