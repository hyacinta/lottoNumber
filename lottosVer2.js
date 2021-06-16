// Dom

let $lists = document.querySelectorAll(".numberList li");
let $updateText = document.querySelector(".updateText");

$updateText.textContent += "2021.06.14";

// data

let lottos = [
  { id: 967, numbers: [1, 6, 13, 37, 38, 40] },
  { id: 966, numbers: [1, 21, 25, 29, 34, 37] },
  { id: 965, numbers: [2, 13, 25, 28, 29, 36] },
  { id: 964, numbers: [6, 21, 36, 38, 39, 43] },
  { id: 963, numbers: [6, 12, 19, 23, 34, 42] },
  { id: 962, numbers: [1, 18, 28, 31, 34, 43] },
  { id: 961, numbers: [11, 20, 29, 31, 33, 42] },
  { id: 960, numbers: [2, 18, 24, 30, 32, 45] },
  { id: 959, numbers: [1, 14, 15, 24, 40, 41] },
  { id: 958, numbers: [2, 9, 10, 16, 35, 37] },
  { id: 957, numbers: [4, 15, 24, 35, 36, 40] },
  { id: 956, numbers: [10, 11, 20, 21, 25, 41] },
  { id: 955, numbers: [4, 9, 23, 26, 29, 33] },
  { id: 954, numbers: [1, 9, 26, 28, 30, 41] },
  { id: 953, numbers: [7, 9, 22, 27, 37, 42] },
  { id: 952, numbers: [4, 12, 22, 24, 33, 41] },
  { id: 951, numbers: [2, 12, 30, 31, 39, 43] },
  { id: 950, numbers: [3, 4, 15, 22, 28, 40] },
  { id: 949, numbers: [14, 21, 35, 36, 40, 44] },
];

let totalLast5 = [];
let totalLast10 = [];

let latest10noneUse = [];
let latest5noneUse = [];

let candidate = [];
let hopeLottos = [];

let lottoNumbersCount = [0, 0, 0, 0, 0];

// 당첨횟수 구하기

const findNumberOfWins = (times) => {
  let arr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  for (let i = 0; i < times; i++) {
    lottos[i].numbers.forEach((number) => {
      switch (number) {
        case 1:
          arr[1] = arr[1] + 1;
          break;
        case 2:
          arr[2] = arr[2] + 1;
          break;
        case 3:
          arr[3] = arr[3] + 1;
          break;
        case 4:
          arr[4] = arr[4] + 1;
          break;
        case 5:
          arr[5] = arr[5] + 1;
          break;
        case 6:
          arr[6] = arr[6] + 1;
          break;
        case 7:
          arr[7] = arr[7] + 1;
          break;
        case 8:
          arr[8] = arr[8] + 1;
          break;
        case 9:
          arr[9] = arr[9] + 1;
          break;
        case 10:
          arr[10] = arr[10] + 1;
          break;
        case 11:
          arr[11] = arr[11] + 1;
          break;
        case 12:
          arr[12] = arr[12] + 1;
          break;
        case 13:
          arr[13] = arr[13] + 1;
          break;
        case 14:
          arr[14] = arr[14] + 1;
          break;
        case 15:
          arr[15] = arr[15] + 1;
          break;
        case 16:
          arr[16] = arr[16] + 1;
          break;
        case 17:
          arr[17] = arr[17] + 1;
          break;
        case 18:
          arr[18] = arr[18] + 1;
          break;
        case 19:
          arr[19] = arr[19] + 1;
          break;
        case 20:
          arr[20] = arr[20] + 1;
          break;
        case 21:
          arr[21] = arr[21] + 1;
          break;
        case 22:
          arr[22] = arr[22] + 1;
          break;
        case 23:
          arr[23] = arr[23] + 1;
          break;
        case 24:
          arr[24] = arr[24] + 1;
          break;
        case 25:
          arr[25] = arr[25] + 1;
          break;
        case 26:
          arr[26] = arr[26] + 1;
          break;
        case 27:
          arr[27] = arr[27] + 1;
          break;
        case 28:
          arr[28] = arr[28] + 1;
          break;
        case 29:
          arr[29] = arr[29] + 1;
          break;
        case 30:
          arr[30] = arr[30] + 1;
          break;
        case 31:
          arr[31] = arr[31] + 1;
          break;
        case 32:
          arr[32] = arr[32] + 1;
          break;
        case 33:
          arr[33] = arr[33] + 1;
          break;
        case 34:
          arr[34] = arr[34] + 1;
          break;
        case 35:
          arr[35] = arr[35] + 1;
          break;
        case 36:
          arr[36] = arr[36] + 1;
          break;
        case 37:
          arr[37] = arr[37] + 1;
          break;
        case 38:
          arr[38] = arr[38] + 1;
          break;
        case 39:
          arr[39] = arr[39] + 1;
          break;
        case 40:
          arr[40] = arr[40] + 1;
          break;
        case 41:
          arr[41] = arr[41] + 1;
          break;
        case 42:
          arr[42] = arr[42] + 1;
          break;
        case 43:
          arr[43] = arr[43] + 1;
          break;
        case 44:
          arr[44] = arr[44] + 1;
          break;
        case 45:
          arr[45] = arr[45] + 1;
          break;
        default:
          break;
      }
    });
  }
  return arr;
};

totalLast5 = findNumberOfWins(5);
totalLast10 = findNumberOfWins(15);

// 최근 5회차 당첨 안된 번호 & 당첨 번호
totalLast5.forEach((times, i) => {
  switch (times) {
    case 0:
      latest5noneUse = [...latest5noneUse, i];
      break;
    case 1:
      candidate = [...candidate, i];
      break;
    case 2:
      candidate = [...candidate, i];
      break;
    default:
      break;
  }
});

// 최근 10회차 당첨 안된 번호
totalLast10.forEach((times, i) => {
  !times ? (latest10noneUse = [...latest10noneUse, i]) : undefined;
});

Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

const setA = new Set([...latest10noneUse]);
const setB = new Set([...latest5noneUse]);

candidate = [...candidate, ...setB.difference(setA)];

// 번호 6개 추출하기

const pickedNumber = (length, arr, min, max) => {
  const returnArr = [];

  while (returnArr.length < length) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    let hopeNumber = arr.filter((item) => item === randomNumber);
    !returnArr.includes(...hopeNumber)
      ? [returnArr.push(...hopeNumber)]
      : undefined;
  }

  return returnArr;
};

hopeLottos = pickedNumber(1, candidate, 1, 9);
hopeLottos = [...hopeLottos, ...pickedNumber(1, candidate, 10, 19)];
hopeLottos = [...hopeLottos, ...pickedNumber(1, candidate, 20, 29)];
hopeLottos = [...hopeLottos, ...pickedNumber(3, candidate, 10, 45)];

hopeLottos.sort((a, b) => a - b);

hopeLottos.forEach((number, i) => {
  if (number >= 1 && number < 10) {
    $lists[i].className = "yellow";
  } else if (number >= 10 && number < 20) {
    $lists[i].className = "blue";
  } else if (number >= 20 && number < 30) {
    $lists[i].className = "red";
  } else if (number >= 30 && number < 40) {
    $lists[i].className = "gray";
  } else if (number >= 40 && number <= 45) {
    $lists[i].className = "green";
  }
  $lists[i].firstChild.textContent = number;
});
