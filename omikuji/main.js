const btn = document.getElementById("btn");
const output = document.getElementById("output");
const overlay = document.getElementById("overlay");
btn.addEventListener("click", () => {
  result();
  overlay.classList.add("fadein");
  output.classList.add("fadein");
});
overlay,
  addEventListener("click", () => {
    output.classList.remove("fadein");
    overlay.classList.remove("fadein");
  });
//＊おみくじ結果
const result = () => {
  const omikekka = document.getElementById("omikekka");
  const index = Math.floor(Math.random() * 111);
  if (0 <= index && index <= 9) {
    omikekka.innerHTML =
      '<img src ="dev_img/omikuji_daikichi.png"class="omikujikekka"/>';
  } else if (10 <= index && index <= 29) {
    omikekka.innerHTML =
      '<img src ="dev_img/omikuji_kichi.png"class="omikujikekka"/>';
  } else if (30 <= index && index <= 49) {
    omikekka.innerHTML =
      '<img src ="dev_img/omikuji_chukichi.png"class="omikujikekka"/>';
  } else if (50 <= index && index <= 69) {
    omikekka.innerHTML =
      '<img src ="dev_img/omikuji_syoukichi.png"class="omikujikekka"/>';
  } else if (70 <= index && index <= 89) {
    omikekka.innerHTML =
      '<img src ="dev_img/omikuji_suekichi.png"class="omikujikekka"/>';
  } else if (90 <= index && index <= 109) {
    omikekka.innerHTML =
      '<img src ="dev_img/omikuji_kyou.png"class="omikujikekka"/>';
  } else if (110 <= index) {
    omikekka.innerHTML =
      '<img src ="dev_img/omikuji_daikyou.png"class="omikujikekka"/>';
  }
  //＊ラッキーカラー
  const color = document.getElementById("color");
  const colorNames = new Array(
    "勿忘草色",
    "真珠色",
    "浅葱色",
    "まつざきしげるいろ",
    "潤朱",
    "甕覗",
    "紫紺",
    "萌葱色"
  );
  const colorRandomNum = Math.floor(Math.random() * colorNames.length);
  console.log("colorRandomNum", colorRandomNum);
  color.innerHTML = "ラッキーカラー:" + colorNames[colorRandomNum];
  //＊ラッキースポット
  const spot = document.getElementById("spot");
  const spotNames = new Array(
    "思い思いの場所",
    "例の場所",
    "一度行ってみたかったところ",
    "壱番魔晄炉",
    "天空闘技場",
    "暗黒武術会",
    "東京タワー"
  );
  const spotRandomNum = Math.floor(Math.random() * spotNames.length);
  spot.innerHTML = "ラッキースポット:" + spotNames[spotRandomNum];
  //＊ひとこと
  const hitokoto = document.getElementById("hitokoto");
  const hitokotoNames = new Array(
    "なんか良いことあるって！",
    "意外となんとかなるんでない？",
    "気にすんなって！",
    "やるっきゃない！",
    "そんな無理することかい？",
    "みなぎっている！",
    "あふれてるね！"
  );
  const hitokotoRamdomNum = Math.floor(Math.random() * hitokotoNames.length);
  hitokoto.innerHTML = "今日の一言:" + hitokotoNames[hitokotoRamdomNum];
};
