export const CTA='気になるあの子の給与明細、詳しく見てみる！';
export const demo={month:'2026年9月',name:'ミオ',age:26,friend:'ユイ',friendAge:25,total:900000,rows:[{label:'本業',schedule:'週5勤務',value:180000},{label:'副業',schedule:'月12日',value:720000}]};
export const yen=n=>new Intl.NumberFormat('ja-JP').format(n)+'円';
export const man=n=>Number((n/10000).toFixed(1)).toString();
export const clampGuess=n=>Math.min(1200000,Math.max(200000,Math.round(Number(n)/10000)*10000));
export function guessReaction(n){const gap=n-demo.total;return {gap,absolute:Math.abs(gap),text:gap===0?'ぴったり。見えてた？':gap<0?'思ってたより、もらってる。':'予想、ちょっと上だった。'};}
export const stories=[
 {photo:0,caption:'週末、ちょっと遠くへ。',reply:'また旅行？\nこの前も行ってなかった？',note:'MIO’S STORY',next:'そのバッグも…？',alt:'青い海の見える場所で、本人が持つアイスコーヒー。架空の旅行投稿用画像。'},
 {photo:1,caption:'やっと届いた。',reply:'待って。\nそのバッグも買ったの？',note:'ANOTHER STORY',next:'仕事の話も、ちょっとだけ',alt:'カフェの椅子の上に届いたばかりの茶色いバッグ。ブランドのない架空の商品。'},
 {photo:2,caption:'今日は家で作業。',reply:'え、副業も\nしてたの？',note:'A LITTLE CONTEXT',next:'で、今月いくら？',alt:'ノートパソコンとノートのある自宅のデスク。架空の勤務風景。'}
];
export const panels=[
 {id:0,alt:'成人女性のユイが、カフェで友人ミオの見せるスマートフォンをのぞきこむ。'},
 {id:1,alt:'ミオが自分の旅行写真をスマートフォンで見せる手元。'},
 {id:2,alt:'ミオがアイスドリンクをかき混ぜながら、普段どおりの顔で答える。'},
 {id:3,alt:'金額を聞いたユイが目を見開き、一瞬言葉を失う。'},
 {id:4,alt:'ミオが自分のスマートフォンと明細の紙をテーブルに置く。'},
 {id:5,alt:'ユイが身を乗り出し、半信半疑の表情で小声でたずねる。'},
 {id:6,alt:'ミオが指を一本立て、本業と副業の内訳を笑って話す。'},
 {id:7,alt:'ふたりで同じスマートフォンを見ながら、興味深そうに笑う。'}
];
