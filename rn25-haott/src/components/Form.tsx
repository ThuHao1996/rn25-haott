import React, {useState} from "react";

type Props = {};

function Form({}: Props) {
const [text, setText] = useState("");
const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(text, isChecked);  //Lấy ra giá trị khi bấm submit
    e.preventDefault();
  };

  const handleOnChane = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleOnClick = (e : any) => {
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleOnChane} />
        <input type="password" />
        <input type="checkbox" checked={isChecked} onClick={handleOnClick}/>
        <input type="radio" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
