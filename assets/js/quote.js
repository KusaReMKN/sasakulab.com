let quotes = [
    {
        "text": "右コーナーで 差をつけろ",
        "artist": "西月拓",
        "title": "化南郡立化学物質不使用小学校"
    }, 
    {
        "text": "心配ごと 少し重い でもね きっと大丈夫",
        "artist": "水瀬いのり",
        "title": "春空"
    }, 
    {
        "text": "立ち止まっても 次のドアは きっと開くから",
        "artist": "内田真礼",
        "title": "金色の勇気"
    }, 
    {
        "text": "この愚かさが愛しくて 何かが起きた夕暮れ",
        "artist": "内田真礼",
        "title": "創傷イノセンス"
    }, 
    {
        "text": "恋の仕方を解いても 正解なんてないでしょ？",
        "artist": "水瀬いのり",
        "title": "アイマイモコ"
    }, 
    {
        "text": "これからもずっとキミと笑っていたい",
        "artist": "ЯeaL",
        "title": "未来コネクション"
    },
    {
        "text": "つまらない意地を張り続けてる",
        "artist": "石井竜也",
        "title": "RIVER"
    },
    {
        "text": "わかり合える人がいれば 戦う事出来るから",
        "artist": "TWO-MIX",
        "title": "JUST COMMUNICATION"
    },
    {
        "text": "空と地面は遠く 人と人は近く",
        "artist": "宮内れんげ(CV.小岩井ことり),一条蛍(CV.村川梨衣),越谷夏海(CV.佐倉綾音),越谷小鞠(CV.阿澄佳奈) ",
        "title": "のんのん日和"
    },
    {
        "text": "ずっと まっていたんだ ことしの なつやすみ",
        "artist": "ポケモンキッズ/ポケモンママさん (+ピカチュウ)",
        "title": "なつやすみファンクラブ"
    },
    {
        "text": "なんだってできそうな気分だね",
        "artist": "しぐれうい",
        "title": "シンカケイスケッチ"
    },
    {
        "text": "小さい頃に隠してた キミだけがくれた胸の音",
        "artist": "明日原ユウキ(桐谷華),黒木未知(遥そら),パトリシア・オブ・エンド(小鳥居夕花),夕莉シャチ(神代岬)",
        "title": "野良猫ハート"
    },
    {
        "text": "遠く離れてるほどに 近くに感じてる",
        "artist": "玉置成美",
        "title": "Reason"
    },
    {
        "text": "届くようになれ きらめきの鼓動",
        "artist": "水瀬いのり",
        "title": "僕らだけの鼓動"
    }
]

function quote() {
    let selected_word = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("text").innerHTML = selected_word.text;
    document.getElementById("artist_title").innerHTML = selected_word.artist + " / " + selected_word.title;
    document.getElementById("search").href = "https://google.com/search?q=" + selected_word.artist + "+" + selected_word.title
}

quote()

document.getElementById('text').addEventListener('mouseover', function() {
    document.getElementById('text').style.display = "none";
    document.getElementById('artist_title').style.display = "block"
})

document.getElementById('artist_title').addEventListener('mouseout', function() {
    document.getElementById('text').style.display = "block";
    document.getElementById('artist_title').style.display = "none"
})