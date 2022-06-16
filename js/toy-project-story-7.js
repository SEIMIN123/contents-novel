const content ="그 후로 힘든 나날을 보내오다 자신이 무속인이라는 사람의 소개로 `자신의 선생님을 소개해주겠다며 그 길로 가게 만든 장본인을 만나게 된다.``내가 미친건지 아니면 진짜 신제자인지를 확인하는 테스트를 거쳤고`생전 처음 겪어보는 느낌에 대체 이게 뭔지.``나를 괴롭히던 존재는 무엇인지를 알고 싶었던 나는 `대체 이게 무어냐며 울고 소리치며`나한테 왜이러냐며 가득했던 불만과 설움을 터뜨렸다.``선생님은 이런 상태로 어떻게 20년을 버텼냐며`목숨을 끊어도 12번은 더 끊었다며`어찌 버티고 살았냐며 불쌍하다 우시고` 나는 내 팔자가 서러워서 울었다.``처음으로 들었다.``너는 미치지 않았다. 너를 괴롭히던 것은 신이였으며. 나를 봐달라던 조상이다.``모르는 사람들은 모를 것이다.`넘들은 이해조차 못한다. 그런데 우리네들은 그것을 안다.``정작 본인인 나조차 아직도 모른다.``신이 무엇이고 무당은 무엇이며 나는 무엇인지.``하지만 확실한 건 내가 제자가 되고 나서야 나에게 벌어졌던 일들이 이해가 되었다." 
    
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
  let page = './toy-project-story-8.html';
  location.href = page;
});