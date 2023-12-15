// tab
let tabList = document.querySelector('.list');
let tabBtn = document.querySelectorAll('.tab-button');
let tabCont = document.querySelectorAll('.tab-content');

// for
// for (let i = 0; i < tabBtn.length; i++) {
//   tabBtn[i].addEventListener('click', () => {
//     tab(i);
//   });
// }

// for function
// function tab(num) {
//   for (let j = 0; j < tabBtn.length; j++) {
//     tabBtn[j].classList.remove('orange');
//     tabCont[j].classList.remove('show');
//   }
//   tabBtn[num].classList.add('orange');
//   tabCont[num].classList.add('show');
// }

// for each
// tabBtn.forEach((tab, idx) => {
//   tab.addEventListener('click', function () {
//     tabCont.forEach((cont) => {
//       cont.classList.remove('show');
//     });
//     tabBtn.forEach((btn) => {
//       btn.classList.remove('orange');
//     });
//     tabBtn[idx].classList.add('orange');
//     tabCont[idx].classList.add('show');
//   });
// });

// less eventListener
// tabList.addEventListener('click', (e) => {
//   for (let i = 0; i < tabBtn.length; i++) {
//     tabBtn[i].classList.remove('orange');
//     tabCont[i].classList.remove('show');
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[0]) {
//     tabBtn[0].classList.add('orange');
//     tabCont[0].classList.add('show');
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[1]) {
//     tabBtn[1].classList.add('orange');
//     tabCont[1].classList.add('show');
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[2]) {
//     tabBtn[2].classList.add('orange');
//     tabCont[2].classList.add('show');
//   }
// });

// use dataset
tabList.addEventListener('click', (e) => {
  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].classList.remove('orange');
    tabCont[i].classList.remove('show');
  }
  tabBtn[e.target.dataset.id].classList.add('orange');
  tabCont[e.target.dataset.id].classList.add('show');
});
