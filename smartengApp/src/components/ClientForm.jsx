import "/src/index.css";
import Main from "./Main";
import { useState } from "react";
import Modal from "./Modal";
import ButtonComponent from "./ButtonComponent";
import InputField from "./InputField";
import Header from "./Header";
import { api } from "../services/api";

function ClientForm() {

  // form variables
  const [formData, setFormData] = useState({});

  const brazilianStates = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/clients/', formData)
      // console.log("handleSubmit");
      // console.log(formData);
      setFormData({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        email: "",
      });
      alert("Cliente cadastrado com sucesso!");
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar o cliente...\n" + error.message);
      console.log(error);
      console.log(formData);
    }
  };

  const classes =
    "rounded-xl py-3 text-lg dark:bg-indigo-100 focus:outline-violet-300 focus:outline-2 focus:outline-offset-2 dark:focus:outline-indigo-200 mb-4";

  return (
    <div className="w-full h-screen">
      {/* <Header />
      <Main
        className={`px-4 pt-4 pb-8 align-center ${isModalOpen ? "blur-md" : ""}`}
      > */}
      <div></div>

      <form
        className="animate-fade-in mx-auto bg-violet-50 dark:bg-indigo-900 px-3 md:px-8 lg:px-6 pt-6 pb-8 mb-4 max-w-prose rounded-xl shadow-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-3xl text-violet-950 dark:text-indigo-50 pb-4">
          Novo Cliente
        </h1>

        <InputField
          label="Nome"
          id="name"
          type="text"
          placeholder="Nome do cliente"
          className={classes}
          required
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label="Telefone"
          id="phone"
          type="number"
          placeholder="(00) 00000-0000"
          className={classes}
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="email@exemplo.com"
          className={classes}
          required
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Endereço"
          id="address"
          type="textarea"
          maxLength={100}
          placeholder="Endereço do cliente"
          className={classes}
          required
          value={formData.address}
          onChange={handleChange}
        />

        <InputField
          label="Cidade"
          id="city"
          type="text"
          placeholder="Cidade"
          className={classes}
          required
          value={formData.city}
          onChange={handleChange}
        />

        <InputField
          label="Estado"
          id="state"
          type="select"
          options={brazilianStates}
          placeholder="Selecione o estado"
          className={classes}
          required
          value={formData.state}
          onChange={handleChange}
        />

        <InputField
          label="CEP"
          id="zip_code"
          type="number"
          placeholder="CEP"
          className={classes}
          required
          value={formData.value}
          onChange={handleChange}
        />

        <div className="flex items-center justify-between pt-2">
          <ButtonComponent
            id="submit"
            type="submit"
            onClick={handleSubmit}
            className="bg-violet-600 rounded-lg px-4 py-2"
            content="Enviar"
          />
        </div>
      </form>
      <div></div>
      {/* </Main> */}
    </div>
  );
}

export default ClientForm;
