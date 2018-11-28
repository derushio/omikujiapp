/**
 * おみくじを実行
 */
function execOmikuji() {
    // ADV: データっぽいものはファイルにまとめましょう
    // グローバル変数のおみくじデータを受け取る
    // ./resources/json/omikujiData.js
    const omikujiData = window.omikujiData;

    // 本当ににやりたかったの以下の数行
    document.getElementById('fortune').src
        = randSelectByList(omikujiData.fortuneList);

    document.getElementById('color').innerText
        = randSelectByList(omikujiData.colorList);

    document.getElementById('location').innerText
        = randSelectByList(omikujiData.locationList);

    document.getElementById('message').innerText
        = randSelectByList(omikujiData.messageList);

    // 表示
    document.getElementById('omikuji').classList.add('resolved');
}

/**
 * リストの要素数から乱数を発生し決定した乱数値の内容を返す
 */
function randSelectByList(list) {
    return list[rand(list.length)]
}

/**
 * 乱数を発生
 * ADV: 何度も使う処理は関数にしよう
 * ADV: 111をmaxとするとわけわからないので対応する数字を出すようにしよう
 */
function rand(max) {
    return Math.floor(Math.random() * max);
}
