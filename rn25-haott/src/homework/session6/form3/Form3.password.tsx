import React, {useState} from "react";
import styles from "./Form3.module.css";


type Props = {};

function Form(props: Props) {
const [text, setText] = useState("");

const handleOnChane = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <form>
        <input type="password" value={text} onChange={handleOnChane} placeholder="Password" className={styles.input} />
      </form>
    </>
  );
}

export default Form;
