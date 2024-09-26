import { useState, useRef } from "react";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";
import Chevron from "@/components/icons/Chevron"; // Componente de Chevron
import Check from "@/components/icons/Check"; // Componente de Palomita

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "message" && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChevronClick = (fieldId) => {
    document.getElementById(fieldId).focus();
    document.getElementById(fieldId).click();
  };

  const fields = [
    {
      id: "name",
      type: "text",
      required: true,
      placeholder: "Jane Smith",
      label: "Full Name*",
    },
    {
      id: "email",
      type: "email",
      required: true,
      placeholder: "jane@company.com",
      label: "Email*",
    },
    {
      id: "phone",
      type: "text",
      required: false,
      placeholder: "+1 800 123 4567",
      label: "Phone Number",
    },
    {
      id: "company",
      type: "text",
      required: false,
      placeholder: "Magis MKT",
      label: "Company Name",
    },
    {
      id: "services",
      type: "select",
      required: true,
      placeholder: "",
      label: "Services you are looking for*",
      options: [
        "Select a service",
        "Branding",
        "Web Design & Development",
        "Social Media",
        "The Full Package",
      ],
    },
    {
      id: "budget",
      type: "select",
      required: true,
      placeholder: "",
      label: "Budget*",
      options: [
        "Select a budget",
        "500 - 1K USD",
        "1K - 3K USD",
        "3K - 5K USD",
        "+10K USD",
      ],
    },
    {
      id: "message",
      type: "textarea",
      required: false,
      placeholder: "We want to redesign our brand...",
      label: "Tell us some details about your project",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "83730523-63a3-4bdc-beee-371b152d8a53",
        name: inputValues.name,
        email: inputValues.email,
        company: inputValues.company,
        services: selectedServices,
        budget: selectedBudget,
        message: inputValues.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
      }, 10000);
    }
  }

  if (formSubmitted) {
    return (
      <div
        className="p-5 text-2xl lg:text-5xl font-semibold -tracking-[2.5px] lg:-tracking-[5px]"
        role="alert"
      >
        Thank you for contacting us, We'll reply to your request as soon as
        possible!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        formSubmitted
          ? "hidden"
          : "flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-14 w-full"
      }
    >
      {fields.map((field, index) => (
        <div
          key={field.id}
          className={`flex flex-col gap-0 w-full text-lg font-clash ${
            field.type === "textarea" ? "col-span-2" : ""
          }`}
        >
          <label
            htmlFor={field.id}
            className={`flex gap-4 items-center transition-colors duration-500 font-ramillas text-xl tracking-tight italic ${
              (field.id === "services" && selectedServices) ||
              (field.id === "budget" && selectedBudget) ||
              (field.id !== "services" &&
                field.id !== "budget" &&
                inputValues[field.id])
                ? "dark:text-green text-blue"
                : "dark:text-white text-main"
            }`}
          >
            <span className="italic font-light font-sans text-base">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              ref={textareaRef}
              id={field.id}
              name={field.id}
              required={field.required}
              rows={1}
              placeholder={field.placeholder}
              className="appearance-none bg-transparent text-xl lg:text-2xl tracking-tight font-ramillas resize-none py-4 md:py-5 w-full dark:placeholder-white placeholder-main !placeholder-opacity-40 !outline-none"
              onChange={handleInputChange}
            ></textarea>
          ) : field.type === "select" ? (
            <div className="relative group cursor-pointer flex justify-end items-center">
              <select
                id={field.id}
                name={field.id}
                required={field.required}
                className={`mr-auto cursor-pointer text-xl lg:text-2xl tracking-tight bg-transparent py-4 md:py-5 appearance-none font-ramillas`}
                value={
                  field.id === "services"
                    ? selectedServices
                    : field.id === "budget"
                      ? selectedBudget
                      : ""
                }
                onChange={(e) =>
                  field.id === "services"
                    ? setSelectedServices(e.target.value)
                    : setSelectedBudget(e.target.value)
                }
              >
                {field.options.map((option) => (
                  <option
                    key={option}
                    value={
                      option === "Select a service" ||
                      option === "Select a budget"
                        ? ""
                        : option
                    }
                    disabled={
                      option === "Select a service" ||
                      option === "Select a budget"
                    }
                  >
                    {option}
                  </option>
                ))}
              </select>
              {/* Mostrar Chevron o Check según selección */}
              {field.id === "services" && !selectedServices && (
                <Chevron
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 dark:text-green text-pink"
                  onClick={() => handleChevronClick(field.id)}
                />
              )}
              {field.id === "budget" && !selectedBudget && (
                <Chevron
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 dark:text-green text-pink"
                  onClick={() => handleChevronClick(field.id)}
                />
              )}
              {field.id === "services" && selectedServices && (
                <Check
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 dark:text-green text-pink"
                  onClick={() => handleChevronClick(field.id)}
                />
              )}
              {field.id === "budget" && selectedBudget && (
                <Check
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 dark:text-green text-pink"
                  onClick={() => handleChevronClick(field.id)}
                />
              )}
            </div>
          ) : (
            <input
              id={field.id}
              type={field.type}
              name={field.id}
              required={field.required}
              placeholder={field.placeholder}
              className="appearance-none text-xl lg:text-2xl tracking-tight font-ramillas bg-transparent py-4 md:py-5 w-full dark:placeholder-white placeholder-main !placeholder-opacity-40 !outline-none"
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}
      <div className="flex items-center justify-end col-span-1">
        <Button
          text="Request a Quote"
          bgColor="dark:bg-main bg-light"
          textColor="dark:text-white text-main"
          hoverTextColor="dark:text-white text-main"
          iconBgColor="dark:bg-pink bg-pinkSecondary"
          rotate={-90}
          icon={Arrow}
          type="submit"
        />
      </div>
    </form>
  );
}

export default ContactForm;
