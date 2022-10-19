import React from 'react'

type Props = {}

function BaiTap({}: Props) {

//  Bt: Kiểm tra 1 số là số chẵn hay số lẻ
var n = 10;
if(n%2===0) {
    console.log('Số chẵn');
} else {
    console.log('Số lẻ');
}

// Bt: Kiểm tra 1 số có phải là số nguyên tố hay không
var n = 13;
if(n%1===0 && n%n===0) {
    console.log(n + ' ' + 'la so nguyen to');
}else {
    console.log(n + ' ' + 'khong phai la so nguyen to');
}


var input = [7, 1, 12];
var output = 0;
for (var i = 0; i < input.length; i++) {
output = input[i];
if(input[i]%1===0 && input[i]%input[i]===0) {
  console.log(input[i] + ' ' + 'la so nguyen to');
}else {
  console.log(input[i] + ' ' + 'khong phai la so nguyen to');
}
};



// Bt: Mua xăng
// N = 7
// 1L : 3
// 2L : 4
// Case1: b <= 2a -> b
// 3 2L : 1 1L : 15
// 3: phan nguyen 7/2 ?? parseInt(7/2) * b
// 1: 7 - (parseInt(7/2)*2) * a

// Case2: b > 2a -> mua a 
// N * a

// output: 3
// n=5
// 1L: 1 đồng
// 2L: 1 đồng


  return (
    <div>BaiTap</div>
  )
}

export default BaiTap