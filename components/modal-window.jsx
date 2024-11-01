import { setModal } from "@/redux_toolkit/features/modal-window/modalSlice.tsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModalWindow() {
  const dispatch = useDispatch();
  const { modalType, modalText } = useSelector((state) => state.modal);
  const [modal, setModalState] = useState({ type: "Hidden", text: "" });

  useEffect(() => {
    setModalState({ type: modalType, text: modalText });
  }, [modalType, modalText]);

  useEffect(() => {
    const modalContent = document.querySelector(".modal-content");
    const modalWindow = document.querySelector(".modal-window");
    const findClass = (clas, clasArr) => {
      return [...clasArr].filter((str) => str.includes(clas))[0];
    };

    switch (modal.type) {
      case "Success":
        modalContent.classList.remove(findClass("bg-", modalContent.classList));
        modalContent.classList.add("bg-lime-600");
        modalWindow.style.top = `${window.scrollY}px`;
        modalWindow.style.display = `flex`;
        document.body.style = "overflow: hidden";
        break;
      case "Warning":
        modalContent.classList.remove(findClass("bg-", modalContent.classList));
        modalContent.classList.add("bg-amber-500");
        modalWindow.style.top = `${window.scrollY}px`;
        modalWindow.style.display = `flex`;
        document.body.style = "overflow: hidden";
        break;
      case "Error":
        modalContent.classList.remove(findClass("bg-", modalContent.classList));
        modalContent.classList.add("bg-red-600");
        modalWindow.style.top = `${window.scrollY}px`;
        modalWindow.style.display = `flex`;
        document.body.style = "overflow: hidden";
        break;
      case "Hidden":
        modalWindow.style.display = `none`;
        document.body.style = "overflow: scroll";
        break;
    }
  }, [modal]);

  const hidden = () => {
    dispatch(
      setModal({
        type: "Hidden",
        text: "",
      })
    );
  };

  return (
    <div
      className="modal-window w-screen h-screen absolute z-20 bg-[#2b2a3096] content-center justify-center items-center"
      style={{ display: "none" }}
    >
      <div className="modal-content w-64 3sm:w-96 2sm:w-[32rem] h-52 3sm:h-60 2sm:h-80 rounded-lg relative">
        {/* Header */}
        <div className="p-2 3sm:p-4 shadow-lg flex justify-between bg-my-white rounded-t-lg">
          <div className="flex gap-2 content-center flex-wrap">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-amber-500"></div>
            <div className="w-4 h-4 rounded-full bg-lime-500"></div>
          </div>
          <button
            className="close-modal border-0 text-xl font-semibold text-my-black hover:rotate-45"
            onClick={() => hidden()}
          >
            x
          </button>
        </div>
        {/* Body */}
        <div className="px-4 py-3 text-my-white">
          <h2 className="mb-1 3sm:mb-2 text-xl 3sm:text-3xl font-semibold">
            {modal.type}
          </h2>
          <p className="text-sm 3sm:text-base">{modal.text}</p>
        </div>
        <button
          className="absolute left-2/4 translate-x-[-50%] block bottom-0 w-fit h-fit mb-4 2sm:mb-8 mx-auto px-10 3sm:px-8 2sm:px-16 py-1 2sm:py-2 border-2 3sm:border-4 border-my-white rounded-full close-modal border-0 text-my-white text-sm 3sm:text-xl font-semibold text-my-black hover:rotate-180"
          onClick={() => hidden()}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
