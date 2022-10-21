import React, {useState} from "react";
import styles from "./Form3.module.css";
import "./Form3.name";
import "./Form3.password";


type Props = {};

function Form(props: Props) {
const [text] = useState("");

const handleSigIn = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(text);  
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSigIn}>
        <button className={styles.name3}>SIG IN</button>
      </form>
    </>
  );
}

export default Form;
