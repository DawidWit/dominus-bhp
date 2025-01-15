import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Imię jest wymagane"),
  email: yup
    .string()
    .email("Wprowadź poprawny adres e-mail")
    .required("E-mail jest wymagany"),
  subject: yup.string().required("Temat jest wymagany"),
  message: yup
    .string()
    .min(10, "Wiadomość musi mieć przynajmniej 10 znaków")
    .required("Wiadomość jest wymagana"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data : any) => {
    console.log("Dane formularza:", data);
    alert("Formularz został wysłany!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Formularz kontaktowy</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Imię:</label>
          <input
            id="name"
            {...register("name")}
            placeholder="Wprowadź swoje imię"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Wprowadź swój e-mail"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="subject">Temat:</label>
          <input
            id="subject"
            {...register("subject")}
            placeholder="Wprowadź temat"
          />
          {errors.subject && (
            <p style={{ color: "red" }}>{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Wprowadź treść wiadomości"
          />
          {errors.message && (
            <p style={{ color: "red" }}>{errors.message.message}</p>
          )}
        </div>

        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default ContactForm;
