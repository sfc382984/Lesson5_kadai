
/*【事前準備】
50までカウントをする。
10カウント毎に「今 [カウント] 回ループしました。」とコンソールに出力する。
💡 例）カウントが10の場合：今10回ループしました。
4で割れる数の場合は「4で割れる数です。[カウント]」とコンソールに出力する。
カウントが50になったらアラートで「50回カウントが終わりました。」と出力する。 */

//条件分岐を使用します。
//繰り返し文を使用します。
//四則演算を使用します。
//文字列演算子を使用します。

for(let number=1; number<=50; number++){
  console.log(number);
  if(number%10===0){
    console.log("今"+number+"回ループしました");
  }else{
    console.log(number);
  }
  if(number%4===0){
    console.log("4で割れる数です。"+number);
  }else{
    console.log(number);
  }
  if(number===50){
    alert("50回カウントが終わりました。")
  }
}