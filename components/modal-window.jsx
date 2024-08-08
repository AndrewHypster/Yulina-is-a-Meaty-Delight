import { useEffect } from "react";

export default function ModalWindow({ type = "", text = "", scroll = window.scrollY }) {
  useEffect(() => {
    const modalContent = document.querySelector(".modal-content");
    
    switch (type) {
      case "Success":
        modalContent.classList.remove("bg-amber-500");
        modalContent.classList.remove("bg-red-600");
        modalContent.classList.remove("bg-my-white");
        modalContent.classList.add("bg-lime-600");
        break;
      case "Warning":
        modalContent.classList.remove("bg-lime-600");
        modalContent.classList.remove("bg-red-600");
        modalContent.classList.remove("bg-my-white");
        modalContent.classList.add("bg-amber-500");
        break;
      case "Error":
        modalContent.classList.remove("bg-amber-500");
        modalContent.classList.remove("bg-lime-600");
        modalContent.classList.remove("bg-my-white");
        modalContent.classList.add("bg-red-600");
        break;

      default:
        modalContent.classList.remove("bg-amber-500");
        modalContent.classList.remove("bg-lime-600");
        modalContent.classList.remove("bg-red-600");
        modalContent.classList.add("bg-my-white");
        break;
    }
  });

  const hidden = () => {
    document.querySelector(".modal-window").style = `display: none; top: ${window.scrollY}`;
    document.body.style = "overflow: scroll";
  };

  return (
    <div
      className="modal-window w-screen h-screen absolute z-20 bg-[#2b2a3096] content-center justify-center"
      style={{ top: scroll, display: "none" }}
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
        <div className="px-4 py-3 text-my-white">
          <h2 className="mb-1 3sm:mb-2 text-xl 3sm:text-3xl font-semibold">{type}</h2>
          <p className="text-sm 3sm:text-base">{text}</p>
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
