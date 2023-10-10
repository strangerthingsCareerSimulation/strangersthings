import Cookies from "js-cookie";

function Logout() {
  const signout = () => {
    Cookies.remove("login");
  };

  return (
    <>
      <div>
        <h1>Logout</h1>
        <button onClick={signout} className="btn" type="submit">
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
