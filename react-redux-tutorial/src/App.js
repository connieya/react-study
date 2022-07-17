import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Modal from "react-modal";
import CounterContainer from "./containers/CounterContainer";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <CounterContainer number={0} />
      <hr />
      <Todos />
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button onClick={closeModal}>close</button>
        <button>편집실</button>
        <button>나가기</button>
      </Modal>
    </>
  );
}

export default App;
