const content = "1. 태어나다.```정묘년 정미월 무인일 을묘시.`1987년 양력 7월 28일.음력 6월 3일.오전 6시 30분.``그분들만 안다면 아시는 참으로 얄궂은 날에`나는 대전 인동의 한 산부인과에서 태어났다.`들은 바로는 어머니라는 사람도` 나도 참 고생하면서 태어났다고 한다.``그래서 그런것일까.``어릴때 고생하면 말년에 잘된다는 얘기를 `그리 썩 좋아하지 않는다.``어릴 적 기억을 떠올려 보려 해도 `도무지 기억이 나질 않는다.``누군가가 찍어준 사진들로 모여진`앨범을 지긋이 쳐다봐도 저 때의 해맑았던 나는`전혀 생각이 나질 않는다.``기억에 새겨진 시기는 7살부터이다.`그 전은 아무리 생각해도 기억이 나질 않는다.``애초부터 존재하지 않았던 듯이.``"

const text = document.getElementById('text');
const text1 = document.getElementById('text1');

let i = 0;

function typing() {

  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt === "`" ? "<br/>" : txt;
    i++;
  }

}
setInterval(typing, 35);

text.addEventListener('click', function () {
  let page = './toy-project-story-1.html';
  location.href = page;
});