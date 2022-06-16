const content ="5. 신의 제자가 되다.```아직도 잊혀지지 않는 날짜.`2017년 1월 17일. 내가 신의 제자가 된 날이다.``아무에게도 말하지 못하고 혼자 가서 받았다.``누구라도 있었으면 좋았을텐데.`누구라도 내가 이 길로 갈때 같이 슬퍼해주거나 `같이 있었으면 좋았을텐데.``신의 길로 갈때마저 외롭게 가는구나 라는 생각이 들었을때.`한켠에서 소리가 올라왔다.```“아가.너는 혼자가 아니다.무서워마라.이끌어주마.” 라고.```지금은 얄궂게도 또 다시 혼자가 되었지만 별수 있으랴.`내가 택한 길인 것을.``수행이라고 해야할까. 공부라고 해야할까. 팔자라고 해야할까.``그 길이 너무 고독하고 외롭고 힘든 길인 것을 알게 되었고.`흘린 눈물만큼 쌓여야 나의 업보가 없어지는 것을 알았고.`타인을 도와줘야 하는 것이 이 길 인것을 알았고 ``마음이 들어가야 하는 것을 알았다. `마음이 없으면 안되는 길인 것을 뼈저리게 알게 되었다." 
    
const text = document.getElementById('text');

let i = 0;

function typing() {
  
  if( i < content.length) {
  let txt = content.charAt(i);
  text.innerHTML += txt === "`"?"<br/>" : txt; i++;
  }
  
}
setInterval(typing, 35);

text.addEventListener('click', function () {
  let page = './toy-project-story-9.html';
  location.href = page;
});