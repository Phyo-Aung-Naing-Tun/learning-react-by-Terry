import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [querry, setquerry] = useSearchParams();

  const hundleQuery = (e) => {
    e.preventDefault();
    setquerry({
      name: formRef.current[0].value,
      age: formRef.current[1].value,
    });
    // console.dir(formRef.current[0].value);
    // console.dir(formRef.current[1].value);\

    formRef.current[0].value = null;
    formRef.current[1].value = null;
  };
  const hundleGet = () => {
    console.log(querry.get("name"));
    console.log(querry.get("age"));
  };
  return (
    <div className="container">
      <h1>Contact</h1>
      <form ref={formRef}>
        <input type="text" />
        <input type="text" />
        <button onClick={hundleQuery}>click</button>
      </form>
      <button onClick={hundleGet}>Get</button>
    </div>
  );
};

export default Contact;
