const content ="그 말을 듣자마자 닫혀있던 모든 오감에 소름이 돋으면서 달려나갔다.`지금에와 생각해보면 나는 생에 미련이 없는 상태였고 `언제 죽어도 이상하지 않은 상태였다.``그런데 그 말이 왜그리 무서웠는지 모르겠다.``여지까지 겪어봤던 것들 중에는 다 외롭다. 가기싫다. 억울하다. `라는 푸념들만 늘어놓는 것들 뿐이였는데 ``그것은 뭔가가 다른 존재였다.``그게 무엇인지는 몰라도 푸념하고 장난치는 그것들과는 달랐다.`확실히 다른 존재였다.``그리고 기억이 끊겼다.``소주 한병밖에 마시지 않았고 패닉이였다고는 하나 `이렇게 기억이 통째로 날아가나 싶었다.``그리고 나는 어마어마하게 큰 나무앞에서 멍하니 서 있었고`나는 내 그 모습에 무서움과 허탈함을 동시에 느꼈다.``그리곤 한없이 울었다.울고 또 울었다. 왜 이런일만 겪는 건지.`그것들의 장난 인건지. 아니면 내가 정말로 미친건지.``서럽고 서러워서 누구에게도 말하지 못하고 `그저 혼자 감내해야 한다는게 너무 힘들었고 다 포기하고 싶었다.``그렇게 또 한번 무너져 내렸다."

    
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
  let page = './toy-project-story-6.html';
  location.href = page;
});