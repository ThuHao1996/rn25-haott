import { kMaxLength } from "buffer";
import React from "react";

type Props = {};

function Baitap1({}: Props) {
  // Bt: Cho 1 mảng n số nguyên. Kiểm tra mảng có đối xứng không. Nếu đối xứng in ra true, nếu không in ra false

  var number = [4, 2, 4];
  var result = 0;
  var numberLength = number.length;
  for (var i = 0; i < numberLength; ++i) {
    if (number[i] != number[numberLength - i - 1]) {
      result = result + 1;
    }
  }

  if ((result = 0)) {
    console.log("true");
  } else {
    console.log("false");
  }
  return <></>;
}

export default Baitap1;
