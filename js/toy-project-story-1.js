const content ="2. 보이다.```내 어릴적 앨범을 보면 유독 한가지 사진에 눈길이 가는것이 있다.`대략 5살, 6살인 것 같은데 파마머리를 하고 상복을 입고 ``그 어린것이 얼마나 울어댔는지`발개진 눈으로 카메라를 응시하는 사진이 하나 있다.`그런데 그 사진을 보면 그렇게 위화감이 들 수가 없다.``그 아이의 눈을 지그시 보고 있으면 내가 아닌 것 같았고`더 나아가서 사람의 눈이 아니었다.``이때 당시의 기억은 어렴풋이 있다.``나 이때 기억이 좀 있는데 그때 누가 돌아가셨던 거냐고. `나 이때 뭐 했었냐고.``하지만 어른들은 대답을 해주지 않았다.`물론 지금도 마찬가지다.``다들 이제 나이가 있어서 잃어버린것인지.`생각을 하기 싫은것인지`무시하는 것인지`일부러 대답을 안해주는 것인지."

const text = document.getElementById('text');
const text1= document.getElementById('text1');

let i = 0;

function typing() {
  
  if( i < content.length) {
  let txt = content.charAt(i);
  text.innerHTML += txt === "`"?"<br/>" : txt; i++;
  }
}
setInterval(typing, 35);

text.addEventListener('click', function () {
  let page = './toy-project-story-2.html';
  location.href = page;
});