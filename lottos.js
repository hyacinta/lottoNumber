let lottos = [
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
];

let recent5 = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
];

let recent10 = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
];

let noneUse = [];
let notOut = [];
let cameOut1 = [];
let cameOut2 = [];
let cameOut3 = [];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 6; j++) {
    switch (lottos[i].numbers[j]) {
      case 1:
        recent5[1] = recent5[1] + 1;
        break;
      case 2:
        recent5[2] = recent5[2] + 1;
        break;
      case 3:
        recent5[3] = recent5[3] + 1;
        break;
      case 4:
        recent5[4] = recent5[4] + 1;
        break;
      case 5:
        recent5[5] = recent5[5] + 1;
        break;
      case 6:
        recent5[6] = recent5[6] + 1;
        break;
      case 7:
        recent5[7] = recent5[7] + 1;
        break;
      case 8:
        recent5[8] = recent5[8] + 1;
        break;
      case 9:
        recent5[9] = recent5[9] + 1;
        break;
      case 10:
        recent5[10] = recent5[10] + 1;
        break;
      case 11:
        recent5[11] = recent5[11] + 1;
        break;
      case 12:
        recent5[12] = recent5[12] + 1;
        break;
      case 13:
        recent5[13] = recent5[13] + 1;
        break;
      case 14:
        recent5[14] = recent5[14] + 1;
        break;
      case 15:
        recent5[15] = recent5[15] + 1;
        break;
      case 16:
        recent5[16] = recent5[16] + 1;
        break;
      case 17:
        recent5[17] = recent5[17] + 1;
        break;
      case 18:
        recent5[18] = recent5[18] + 1;
        break;
      case 19:
        recent5[19] = recent5[19] + 1;
        break;
      case 20:
        recent5[20] = recent5[20] + 1;
        break;
      case 21:
        recent5[21] = recent5[21] + 1;
        break;
      case 22:
        recent5[22] = recent5[22] + 1;
        break;
      case 23:
        recent5[23] = recent5[23] + 1;
        break;
      case 24:
        recent5[24] = recent5[24] + 1;
        break;
      case 25:
        recent5[25] = recent5[25] + 1;
        break;
      case 26:
        recent5[26] = recent5[26] + 1;
        break;
      case 27:
        recent5[27] = recent5[27] + 1;
        break;
      case 28:
        recent5[28] = recent5[28] + 1;
        break;
      case 29:
        recent5[29] = recent5[29] + 1;
        break;
      case 30:
        recent5[30] = recent5[30] + 1;
        break;
      case 31:
        recent5[31] = recent5[31] + 1;
        break;
      case 32:
        recent5[32] = recent5[32] + 1;
        break;
      case 33:
        recent5[33] = recent5[33] + 1;
        break;
      case 34:
        recent5[34] = recent5[34] + 1;
        break;
      case 35:
        recent5[35] = recent5[35] + 1;
        break;
      case 36:
        recent5[36] = recent5[36] + 1;
        break;
      case 37:
        recent5[37] = recent5[37] + 1;
        break;
      case 38:
        recent5[38] = recent5[38] + 1;
        break;
      case 39:
        recent5[39] = recent5[39] + 1;
        break;
      case 40:
        recent5[40] = recent5[40] + 1;
        break;
      case 41:
        recent5[41] = recent5[41] + 1;
        break;
      case 42:
        recent5[42] = recent5[42] + 1;
        break;
      case 43:
        recent5[43] = recent5[43] + 1;
        break;
      case 44:
        recent5[44] = recent5[44] + 1;
        break;
      case 45:
        recent5[45] = recent5[45] + 1;
        break;
      default:
        break;
    }
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 6; j++) {
    switch (lottos[i].numbers[j]) {
      case 1:
        recent10[1] = recent10[1] + 1;
        break;
      case 2:
        recent10[2] = recent10[2] + 1;
        break;
      case 3:
        recent10[3] = recent10[3] + 1;
        break;
      case 4:
        recent10[4] = recent10[4] + 1;
        break;
      case 5:
        recent10[5] = recent10[5] + 1;
        break;
      case 6:
        recent10[6] = recent10[6] + 1;
        break;
      case 7:
        recent10[7] = recent10[7] + 1;
        break;
      case 8:
        recent10[8] = recent10[8] + 1;
        break;
      case 9:
        recent10[9] = recent10[9] + 1;
        break;
      case 10:
        recent10[10] = recent10[10] + 1;
        break;
      case 11:
        recent10[11] = recent10[11] + 1;
        break;
      case 12:
        recent10[12] = recent10[12] + 1;
        break;
      case 13:
        recent10[13] = recent10[13] + 1;
        break;
      case 14:
        recent10[14] = recent10[14] + 1;
        break;
      case 15:
        recent10[15] = recent10[15] + 1;
        break;
      case 16:
        recent10[16] = recent10[16] + 1;
        break;
      case 17:
        recent10[17] = recent10[17] + 1;
        break;
      case 18:
        recent10[18] = recent10[18] + 1;
        break;
      case 19:
        recent10[19] = recent10[19] + 1;
        break;
      case 20:
        recent10[20] = recent10[20] + 1;
        break;
      case 21:
        recent10[21] = recent10[21] + 1;
        break;
      case 22:
        recent10[22] = recent10[22] + 1;
        break;
      case 23:
        recent10[23] = recent10[23] + 1;
        break;
      case 24:
        recent10[24] = recent10[24] + 1;
        break;
      case 25:
        recent10[25] = recent10[25] + 1;
        break;
      case 26:
        recent10[26] = recent10[26] + 1;
        break;
      case 27:
        recent10[27] = recent10[27] + 1;
        break;
      case 28:
        recent10[28] = recent10[28] + 1;
        break;
      case 29:
        recent10[29] = recent10[29] + 1;
        break;
      case 30:
        recent10[30] = recent10[30] + 1;
        break;
      case 31:
        recent10[31] = recent10[31] + 1;
        break;
      case 32:
        recent10[32] = recent10[32] + 1;
        break;
      case 33:
        recent10[33] = recent10[33] + 1;
        break;
      case 34:
        recent10[34] = recent10[34] + 1;
        break;
      case 35:
        recent10[35] = recent10[35] + 1;
        break;
      case 36:
        recent10[36] = recent10[36] + 1;
        break;
      case 37:
        recent10[37] = recent10[37] + 1;
        break;
      case 38:
        recent10[38] = recent10[38] + 1;
        break;
      case 39:
        recent10[39] = recent10[39] + 1;
        break;
      case 40:
        recent10[40] = recent10[40] + 1;
        break;
      case 41:
        recent10[41] = recent10[41] + 1;
        break;
      case 42:
        recent10[42] = recent10[42] + 1;
        break;
      case 43:
        recent10[43] = recent10[43] + 1;
        break;
      case 44:
        recent10[44] = recent10[44] + 1;
        break;
      case 45:
        recent10[45] = recent10[45] + 1;
        break;
      default:
        break;
    }
  }
}

for (let i = 0; i < recent10.length; i++) {
  if (!recent10[i]) noneUse = [...noneUse, i];
}

for (let i = 0; i < recent5.length; i++) {
  switch (recent5[i]) {
    case 0:
      notOut = [...notOut, i];
      break;
    case 1:
      cameOut1 = [...cameOut1, i];
      break;
    case 2:
      cameOut2 = [...cameOut2, i];
      break;
    case 3:
      cameOut3 = [...cameOut3, i];
      break;
    default:
      break;
  }
}

let cameOutResult = [...cameOut1, ...cameOut2];
Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

const setA = new Set([...noneUse]);
const setB = new Set([...notOut]);

let notOutResult = setB.difference(setA);
notOutResult = [...notOutResult];

let hopeLottos = [];
while (hopeLottos.length < 3) {
  let randomNumber = Math.floor(Math.random() * 45 + 1);
  let hopeNumber = cameOutResult.filter((item) => item === randomNumber);
  !hopeLottos.includes(...hopeNumber)
    ? hopeLottos.push(...hopeNumber)
    : undefined;
}

while (hopeLottos.length < 6) {
  let randomNumber = Math.floor(Math.random() * 45 + 1);
  let hopeNumber = notOutResult.filter((item) => item === randomNumber);
  !hopeLottos.includes(...hopeNumber)
    ? hopeLottos.push(...hopeNumber)
    : undefined;
}

hopeLottos.sort((a, b) => a - b);
console.log(hopeLottos);
