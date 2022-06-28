import { Link } from "react-router-dom";
import UsernameValue from "./Components/App/UsernameValue";

function App() {
  return (
    <>
      <div className="container col-6 mt-5">
      <UsernameValue/>
      </div>
      <Link to=':username'></Link>
      <Link to='most-popular'></Link>
    </>
  );
}
export default App