import { UserProvider } from "./context/UserContext";

const AuthenticationWrapper = (props) => {
  return <UserProvider>{props.children}</UserProvider>;
};

export default AuthenticationWrapper;
