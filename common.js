const allNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45,
];

$(".confirmBtn").on("click", function () {
  // data
  let hopeLottos = [];
  let targetNumber = [];

  // 입력 값 가져오기
  const statisticsNumber = $("#statistics")
    .val()
    .split(" ")
    .map((i) => i * 1); // 통계수
  const exceptNumber = $("#except")
    .val()
    .split(" ")
    .map((i) => i * 1); // 제외수
  const mustNumber = $("#must")
    .val()
    .split(" ")
    .map((i) => i * 1); // 이월수
  const jumpNumberCol = $("#jumpCol")
    .val()
    .split(", ")
    .map((i) => i * 1); // 전멸수 가로
  const jumpNumberRow = $("#jumpRow")
    .val()
    .split(", ")
    .map((i) => i * 1); // 전멸수 세로

  console.log(jumpNumberCol);
  console.log(jumpNumberRow);
  console.log(makeTargetNumber(), "타겟넘버");

  targetNumber = [...new Set(makeTargetNumber(jumpNumberCol, jumpNumberRow))];
  pickedNumber(6, targetNumber);
  hopeLottos.sort((a, b) => a - b);

  // ui 생성
  $(".numberList").html(
    hopeLottos
      .map((i) => {
        let tempClass = "";
        if (1 <= i && i <= 10) {
          tempClass = "yellow";
        } else if (11 <= i && i <= 20) {
          tempClass = "blue";
        } else if (21 <= i && i <= 30) {
          tempClass = "red";
        } else if (31 <= i && i <= 40) {
          tempClass = "gray";
        } else if (41 <= i && i <= 45) {
          tempClass = "green";
        }
        return `<li class="${tempClass}"><span>${i}</span></li>`;
      })
      .join(" ")
  );

  // 기능 함수
  function makeTargetNumber() {
    return allNumber
      .filter((i) => !exceptNumber.includes(i))
      .filter((i) => !jumpNumberCol.includes(i))
      .filter((i) => !jumpNumberRow.includes(i))
      .concat(statisticsNumber)
      .filter((i) => i !== 0)
      .sort((a, b) => a - b);
  }

  function pickedNumber(length, arr) {
    hopeLottos = mustNumber[0] !== 0 ? mustNumber : [];
    while (hopeLottos.length < length) {
      const randomNumber = Math.floor(Math.random() * 45 + 1);
      let hopeNumber = arr.filter((item) => item === randomNumber);
      !hopeLottos.includes(...hopeNumber)
        ? [hopeLottos.push(...hopeNumber)]
        : undefined;
    }
  }
});
