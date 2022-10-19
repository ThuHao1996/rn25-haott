// import { sortAndDeduplicateDiagnostics } from "typescript";
import React, { useState } from 'react'
import { start } from 'repl';

function Baitap2() {
    const [isLike, setIsLike] = useState(false);

    const handleClick = () => {
        console.log('Clicked');
        setIsLike(!isLike);
    };

  return (
<>
<button onClick={handleClick}>{isLike === true ? "UnLike" : "Like"}</button>
<p>{isLike === true ? 1 : 0}</p>
</>
    )
}

export default Baitap2

// lam bai session2, session3, session5
// in ra 5 ngoi sao
// 1 state star -> danh gia may sao
// click 1 ngoi sao -> setStar = indexedDB(ngoi sao)
// render ngoi sao vang/ trang: index ngoi sao < star -> 1 >< 0
// for(let i=1; i<=start; i++) {
// inso1: <span onClick={()=>setState(i)}>1</span>
// }
// for (let 1 = 1; i<=star; i++): in ra so 1 -> 1 2 3 ->onClick(setState(i))
// for (let 1 = star+1; i<=5; i++): in ra so 0 -> 4 5

