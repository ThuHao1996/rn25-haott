import React from "react";

type Props = {};

function Baitap1({}: Props) {
  // Bt: Nhập vào 1 dãy số, in ra dãy số gấp đôi
  var input = [1, 2, 3, 4, 5];
  var output = input.map((item) => {
    return item * 2;
  });
  console.log(output);

  // Bt: Nhập vào 1 số nguyên x, in ra màn hình số gấp đôi
  var x = 10;
  var result = x * 2;
  console.log(result);

  return <></>;
}

export default Baitap1;
