const content ="그 후로 굿을 하며 기도를 하며. 산으로. 바다로 다니며. 여러곳을 거쳐갔고.`인생사 누구하나 쉬운 사람이 없고, 누구하나 가슴 아픈 사연 없는 사람이 없으며.``인간은 고고하고 어리석으며 그만큼 가치가 있다는 것을 알게 된다.`나조차도 같은 인간인 것을 깨닳아야 하며. 같으면서도 다르다는 것을 인정 해야했다.`그럼에도 제자로써, 몸주로써 살아가는 건 쉽지 않은 것을 알게 되기도 한다.``무당이라는 직업이 천한 직업이라고 생각하는 이들이 많다.`하지만 정말 알아줬으면 하는 부분이 있다.``우리네들도 원해서 이렇게 된 것이 아니란 것을.``참 아이러니한 말이지만 나라가 흉하면 무당이 많이 생겨난다고 한다.`누구 하나 할 것 없이 전부 내가 진짜 무당이다 라고 하는 만신들이 많다.``무당이라는 말은 사실 직책이다.`그걸 모르고 떠들어대는 만신들은 넘쳐난다. ``하지만 나라고 진짜 무속인이라고 할 수 있을까?``아직 갈 길이 멀다. 언젠가는 알게 되지 않을까. 내가 왜 선택을 받게 되었으며.`내가 또 다시 어떤 길로 가야할지, 무엇을 해야 할지를 알게 되지 않을까.``죽기 전까지도 깨닳음을 얻지 못하고 가는 경우도 있지만 나는 아니라고 생각하고 싶다.``어쨌거나 나는 신내림을 받고 20여년간 괴로웠던 생활을 청산하게 되었고`하루하루 고꾸라져 넘어지지만 그래도 다시 일어나서 나갈 힘은 생겼다.``아픈것은 그때뿐이다를 다짐하고 다시금 꿋꿋이 견뎌내야 할 것이다.`그리고 또 다시 넘어졌을때 ``내가 순수 만든 이 짤막한 나의 인생 자서전을 보고 다시금 다짐을 해야할 것이다." 
    
const text = document.getElementById('text');

let i = 0;

function typing() {
  
  if( i < content.length) {
  let txt = content.charAt(i);
  text.innerHTML += txt === "`"?"<br/>" : txt; i++;
  }
  
}
setInterval(typing, 1);

text.addEventListener('click', function () {
  let page = './toy-project-story-10-movie.html';
  location.href = page;
});