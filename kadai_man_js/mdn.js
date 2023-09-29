// 2023年1月1日　形式の日付表示関数
const today_Jp_Format = () => {
  //日付情報の取得
  const today = new Date();
  //”年”を取得
  const this_Year = today.getFullYear();
  //”月”を取得
  const this_Month = today.getMonth() + 1;
  //”日”を取得
  const this_Date = today.getDate(); 
  console.log(this_Year + '年' + this_Month + '月' + this_Date + '日');
} 

today_Jp_Format();