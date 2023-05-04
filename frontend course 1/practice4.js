//4-1 打印數字1~10000
for (let i = 1; i<=10000; i++){
	console.log(i);
};

let j = 1;
while (j <= 10000){
	console.log(j);
	j++;
};



//4-2 打印1~100間的偶數
for (let a = 2; a <= 100; a+=2){
	console.log(a);
};

let b = 2;
while(b <= 100){
	console.log(b);
	b+=2;
};



//4-3 打印1~100間的奇數
for (let c = 1; c <= 100; c+=2){
	console.log(c);
};

let e = 1;
while(e <= 100){
	console.log(e);
	e+=2;
};



//4-4 打印1~100間的質數
for (let f = 2; f <= 100; f++) {
	let primeNum = true;
	for (let g = 2; g <= Math.sqrt(f); g++) {
	  if (f % g === 0) {
		primeNum = false;
		break;
	  }
	}
	if (primeNum) {
	  console.log(f);
	}
};


let k = 2;
while (k <= 100) {
let m = 2;
while (m <= k) {
	if (k === m) {
	console.log(k);
	break;
	} else if (k % m === 0) {
	break;
	}
	m++;
}
k++;
};



// 4-5 打印出三角形
let size = 5;
for (let n = 1; n <= size; n++) {
  let result = '';
  for (let p = 1; p <= n; p++) {
    result += size;
  }
  console.log(result);
};


let size2 = 11;
let r = 1;

while (r <= size2) {
  let result2 = '';
  let q = 1;
  
  while (q <= r) {
    result2 += size2;
    q++;
  }
  
  console.log(result2);
  r++;
};



// 4-6 打印99乘法表
for (let one = 1; one <= 9; one++){
    let showResult = '';
    for (let nine = 1; nine <= 9; nine++){
        showResult += `【${one}x${nine}=${one*nine}】 `;
    }
    console.log(showResult);
    };
    
    
let s = 1;
while (s <= 9){
    let z = 1;
    while (z <= 9){
        console.log(`【${s}x${z}=${s*z}】`);
        z++;
    }
    s++;
};