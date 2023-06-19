import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const inputRef = useRef();
  const nav = useNavigate();

  const hundleClick = () => {
    nav("/about", { state: { text: `${inputRef.current.value}` } });
    // console.log(inputRef.current.value);
  };
  return (
    <div className="container">
      <h1>Home</h1>
      <input ref={inputRef} type="text" />
      <button onClick={hundleClick}>To About</button>
    </div>
  );
};

export default Home;
