import Swal from "sweetalert2";


const ContactForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", ".................");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Poszło!",
            text: "Twoja wiadomość została wysłana!",
            icon: "success"
        }).then(() => {
            e.target.reset();
        });
    }
};

  return (
    <div
      
      className="w-full pt-6 pb-20 text-lg"
    >
      <section>
      <form
          onSubmit={onSubmit}
          className="flex flex-col gap-10 justify-between items-center text-slate-100 font-light"
        >
          <h1 className="text-3xl font-serif text-amber-600">Napisz do nas</h1>
          <div className="flex flex-col gap-4 text-center">
            <label className="text-xl">Twoje imię</label>
            <input
              type="text"
              name="name"
              required
              className="p-4 rounded-lg h-12 w-80 md:w-96 text-black"
              aria-label="your name"
            />
          </div>
          <div className="flex flex-col gap-4 text-center">
            <label className="text-xl ">Twój e-mail adres</label>
            <input
              
              type="email"
              name="email"
              required
              className="p-4 rounded-lg h-12 w-80 md:w-96 text-black"
              aria-label="your email"
            />
          </div>
          <div className="flex flex-col gap-4 text-center">
            <label className="text-xl ">Twoja wiadomość</label>
            <textarea
              type="text"
              name="message"
              required
              className="p-4 rounded-lg h-52 w-80 md:w-96 text-black"
              aria-label="your message"
            />
          </div>

          <button
            type="submit" 
            className="w-7/12 md:w-5/12 lg:w-3/12  h-8 bg-amber-400 saturate-50 rounded-lg text-black text-xl"
          >
            wyślij
          </button>
        </form>
      </section>
      
    </div>
  );
};

export default ContactForm;
