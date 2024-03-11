import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isOpen } = useSelector((store) => {
    return store.modal;
  });
  return (
    <main>
      {isOpen ? <Modal></Modal> : ""}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}
export default App;
