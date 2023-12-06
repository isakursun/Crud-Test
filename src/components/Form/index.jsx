import { useRef } from "react";

const Form = ({ addUser }) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());

    addUser(user);

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div>
        <label htmlFor="name">İsim</label>
        <input
          ref={nameInputRef}
          className="form-control"
          placeholder="Ör: İsa"
          id="name"
          type="text"
          name="name"
        />
      </div>

      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          ref={emailInputRef}
          className="form-control"
          placeholder="Ör: kursunisa8@gmail.com"
          id="email"
          type="email"
          name="email"
        />
      </div>

      <div>
        <label htmlFor="age">Yaş</label>
        <input
          ref={ageInputRef}
          className="form-control"
          placeholder="Ör: 24"
          id="age"
          type="number"
          name="age"
        />
      </div>

      <div className="d-flex justify-content-end my-4">
        <button type="submit" className="btn btn-primary">
          Ekle
        </button>
      </div>
    </form>
  );
};

export default Form;
