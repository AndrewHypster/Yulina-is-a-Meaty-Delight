import axios from "axios";

export default function ChangeTgAdmin() {
  const send = (btn) => {
    const id = btn.target.previousSibling.value;
    console.log(id);
    axios
      .post("/api/change-tg-admin", { id: id })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <input type="text" placeholder="tg id" />
      <button type="button" onClick={send}>
        надіслати
      </button>
    </>
  );
}
