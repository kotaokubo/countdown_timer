
// 東京オリンピックの日時を取得
var olympic = new Date(2020, 7 - 1, 23, 23, 59, 59);
var now = new Date();

// 日時が表示されるIDを取得
var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('min');
var second = document.getElementById('sec');

// オリンピックまでの時間を作成する関数
var timeToTheOlympic = function() {
    
    // 現在時刻を取得
    var now = new Date();
    
    // オリンピックまでの時間をセット
    day.textContent = Math.ceil((olympic - now)/86400000);
    hour.textContent = olympic.getHours() - now.getHours();
    minute.textContent = olympic.getMinutes() -  now.getMinutes();
    second.textContent = olympic.getSeconds() - now.getSeconds();

    // 1秒ごとに関数をあてるメソッド
    setTimeout(timeToTheOlympic, 100);
}
timeToTheOlympic();