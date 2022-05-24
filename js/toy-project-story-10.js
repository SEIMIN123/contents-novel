const con = document.getElementById('con');
const con1 = document.getElementById('con');
const clickBtn1 = document.getElementById('btn1');
const clickBtn2 = document.getElementById('btn2');
const video = document.getElementById('video');
const video1 = document.getElementById('video1');

let data = true;
let data1 = true;

clickBtn1.addEventListener('click', () => {

      if (data === true) {

        data = false;

        video.style.display = "none";

      } else {

        data = true;
        video.style.display = "block";
      }
  });

      clickBtn2.addEventListener('click', () => {

        if (data1 === true) {

          data1 = false;

          video1.style.display = "none";

        } else {
          data1 = true;

          video1.style.display = "block";
        }
  });