const string_to_arr = (input) => {
  return String(input)
    .split("")
    .map((el) => {
      return Number(el);
    });
};

const swap = (index1, index2, arr) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const next_bigger = (num) => {
  let num_arr = string_to_arr(num);

  let i = -1;
  for (i = num_arr.length - 1; i > -1; i--) {
    if (num_arr[i] > num_arr[i - 1]) {
      break;
    }
  }

  if (i === -1) {
    return -1;
  }
  i--;

  let j = -1;
  for (j = num_arr.length - 1; j > i; i--) {
    if (num_arr[i] < num_arr[j]) {
      break;
    }
  }
  swap(i, j, num_arr);

  num_arr = num_arr
    .slice(0, i + 1)
    .concat(num_arr.slice(i + 1, num_arr.length).reverse());

  return num_arr.join("");
};

console.log(`12 => ${next_bigger(12)}`);
console.log(`513 => ${next_bigger(513)}`);
console.log(`2017 => ${next_bigger(2017)}`);
console.log(`2071 => ${next_bigger(2071)}`);
console.log(`9 => ${next_bigger(9)}`);
console.log(`111 => ${next_bigger(111)}`);
console.log(`531 => ${next_bigger(531)}`);
