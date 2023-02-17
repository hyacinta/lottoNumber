const allNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45,
];

$(".confirmBtn").on("click", function () {
  // 입력 값 가져오기

  // 제외수 : 타겟 번호에서 무조건 빠짐
  const exceptNumber = textToArr("#except");

  // 전멸수 가로 : 타겟 번호에서 무조건 빠짐
  const jumpNumberCol = textToArr("#jumpCol");

  // 전멸수 세로 : 타겟 번호에서 무조건 빠짐
  const jumpNumberRow = textToArr("#jumpRow");

  // 전멸수 : 타겟 번호에서 무조건 빠짐
  const jumpNumbers = makeJumpArr(Number($("#jump").val()));

  // 통계수 : 타겟 번호에 무조건 들어감
  const statisticsNumber = textToArr("#statistics");

  // 이월수 : 최종 번호에 무조건 들어감
  const mustNumber = textToArr("#must");

  const hopeLottos = pickedNumbers(6, makeTargetNumber(), mustNumber);

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
  function textToArr(input) {
    return $(input)
      .val()
      .split(" ")
      .map((i) => i * 1);
  }

  function makeJumpArr(jumpNum) {
    if (jumpNum === 0) return [0];
    const tempArr = [];
    while (tempArr.length < 10) {
      tempArr.push(jumpNum);
      jumpNum++;
    }

    return tempArr;
  }

  function makeTargetNumber() {
    return allNumber
      .filter(
        (i) =>
          ![
            ...exceptNumber,
            ...jumpNumberCol,
            ...jumpNumberRow,
            ...jumpNumbers,
          ].includes(i)
      )
      .concat(statisticsNumber)
      .filter((i) => i !== 0)
      .sort((a, b) => a - b);
  }

  function pickedNumbers(length, arr, must) {
    let tempArr = must[0] === 0 ? [] : [...must];
    while (tempArr.length < length) {
      const randomNum = Math.floor(Math.random() * 45 + 1);
      let hopeNum = arr.filter((item) => item === randomNum);
      if (tempArr.includes(...hopeNum)) continue;
      tempArr.push(...hopeNum);
    }

    return tempArr.sort((a, b) => a - b);
  }
});
