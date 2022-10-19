import React, {useState, useEffect} from 'react'

function Baitap1() {

    const [count, setCount] = useState(-1);
    const [count1, setCount1] = useState(-1);
    const handleClick = () => {
        if(count >= 10) {
            console.log('Khong tang');
        }else {
            console.log('Clicked');
            setCount(count + 1);
        }
    }

    useEffect(()=>{
       console.log('componentDidMount');
       return () => {
        console.log('componentWillUnmount');
       }
    }, []);

    useEffect(()=>{
        console.log('componentDidUpDate');
    });

    useEffect(()=>{
        console.log('componentDidUpDateCount1');
    }, [count1]);

  return (
<>
<p>{count}</p>
<button onClick={handleClick} disabled={count >= 10 ? true : false}>CLICK</button>

</>
    )
}

export default Baitap1