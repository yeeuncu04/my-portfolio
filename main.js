// 캐러셀 요소 가져오기
const carousel = document.getElementById("carousel");

// 버튼 요소 가져오기
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 한 번에 넘어갈 카드 너비 계산
const cardWidth = 350; // 카드 + 여백 예상값(필요하면 조절)

// ▶ 오른쪽 버튼 눌렀을 때
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: cardWidth,
    behavior: "smooth"
  });
});

// ◀ 왼쪽 버튼 눌렀을 때
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -cardWidth,
    behavior: "smooth"
  });
});
