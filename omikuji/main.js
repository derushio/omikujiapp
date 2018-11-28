(function() {
  var btn = document.getElementById("btn");
  var output = document.getElementById("output");
  var overlay = document.getElementById("overlay");

  btn.addEventListener("click", function() {
    result();
    overlay.classList.add("fadein");
    output.classList.add("fadein");
  });

  overlay.addEventListener("click", function() {
    output.classList.remove("fadein");
    overlay.classList.remove("fadein");
  });

  //＊おみくじ結果
  function result() {
    var omikekka = document.getElementById("omikekka");
    var index = Math.floor(Math.random() * 111);

    if (0 <= index && index <= 9) {
      omikekka.innerHTML =
        '<img src="dev_img/omikuji_daikichi.png" class="omikuji" />';
    } else if (10 <= index && index <= 29) {
      omikekka.innerHTML =
        '<img src="dev_img/omikuji_kichi.png" class="omikuji" />';
    } else if (30 <= index && index <= 49) {
      omikekka.innerHTML =
        '<img src="dev_img/omikuji_chukichi.png" class="omikuji" />';
    } else if (50 <= index && index <= 69) {
      omikekka.innerHTML =
        '<img src="dev_img/omikuji_syoukichi.png" class="omikuji" />';
    } else if (70 <= index && index <= 89) {
      omikekka.innerHTML =
        '<img src="dev_img/omikuji_suekichi.png" class="omikuji" />';
    } else if (90 <= index && index <= 109) {
      omikekka.innerHTML =
        '<img src="dev_img/omikuji_kyou.png" class="omikuji" />';
    } else if (110 <= index) {
      omikekka.innerHTML =
        '<img src="dev_img/omikuji_daikyou.png" class="omikuji" />';
    }

    //＊ラッキーカラー
    var color = document.getElementById("color");
    var colornum = new Array(
      "勿忘草色",
      "真珠色",
      "浅葱色",
      "まつざきしげるいろ",
      "潤朱",
      "甕覗",
      "紫紺",
      "萌葱色"
    );
    var num = Math.floor(Math.random() * colornum.length);
    console.log(num);
    color.innerHTML = "ラッキーカラー:" + colornum[num];

    //＊ラッキースポット
    var spot = document.getElementById("spot");
    var spotnum = new Array(
      "思い思いの場所",
      "例の場所",
      "一度行ってみたかったところ",
      "壱番魔晄炉",
      "天空闘技場",
      "暗黒武術会",
      "東京タワー"
    );
    var num = Math.floor(Math.random() * spotnum.length);
    spot.innerHTML = "ラッキースポット:" + spotnum[num];

    //＊ひとこと
    var hitokoto = document.getElementById("hitokoto");
    var hitokotonum = new Array(
      "なんか良いことあるって！",
      "意外となんとかなるんでない？",
      "気にすんなって！",
      "やるっきゃない！",
      "そんな無理することかい？",
      "みなぎっている！",
      "あふれてるね！"
    );
    var num = Math.floor(Math.random() * hitokotonum.length);
    hitokoto.innerHTML = "今日のひとこと:" + hitokotonum[num];
  }
})();
