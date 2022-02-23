import { useAuth } from "../Context/AuthContext";
import Main from "./main";
import LoggedIN from "../pages/LoggedIN";
import Link from "next/link";
export default function Home() {
  const { currentUser } = useAuth();
  return (
  <Main/>
  )
}
