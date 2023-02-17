// import Auth from '../../utils/auth'
import Nav from "../../components/utils/nav";

function Logout() {
  return (
    <>
      {window.location.assign("/")}
      <Nav />
    </>
  );
}

export default Logout;
