import { setState } from "@/redux_toolkit/features/user/userSlice";
import { useDispatch } from "react-redux";

export default function Sign({ id, title }) {
  const dispatch = useDispatch();

  return (
    <div
      id={id}
      className="fixed top-0 left-0 w-screen h-screen z-20 bg-[#2b2a3096] flex-wrap content-center justify-center hidden target:flex"
    >
      <form className="w-64 3sm:w-96 2sm:w-[32rem] h-fit bg-red-500">
        <h1>{title}</h1>
        <a href="#"><button type="button" onClick={() => {alert('Ви успішно ввійшли\nТепер можете зайти в свій кабінет'); dispatch(setState(true))}} className='px-10 py-6 mx-auto rounded-full bg-green-500 block'>Ввійти</button></a>
      </form>
    </div>
  );
}
