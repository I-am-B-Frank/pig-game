const p0 = document.querySelector('.player-0');
const p1 = document.querySelector('.player-1');
const s0 = document.querySelector('#score-0');
const s1 = document.getElementById('score-1');
const c0 = document.getElementById('current-0');
const c1 = document.getElementById('current-1');
const d = document.querySelector('.dice');
const bn = document.querySelector('.btn-new');
const br = document.querySelector('.btn-roll');
const bh = document.querySelector('.btn-hold');

s0.textContent = 0;
s1.textContent = 0;
d.classList.add('hidden');
const s = [0, 0];
let cs = 0;
let ap = 0;
let play = true;

const sp = () => {
  document.getElementById(`current-${ap}`).textContent = 0;
  cs = 0;
  ap = ap === 0 ? 1 : 0;
  p0.classList.toggle('player-active');
  p1.classList.toggle('player-active');
};

br.addEventListener('click', () => {
  if (play) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    d.classList.remove('hidden');
    d.src = `dice-${dice}.png`;

    if (dice !== 1) {
      cs += dice;
      document.getElementById(`current-${ap}`).textContent = cs;
    } else {
      sp();
    }
  }
});

bh.addEventListener('click', () => {
  if (play) {
    s[ap] += cs;
    document.getElementById(`score-${ap}`).textContent = s[ap];
    if (s[ap] >= 100) {
      play = false;
      document.querySelector(`.player-${ap}`).classList.add('player-winner');
      document.querySelector(`.player-${ap}`).classList.remove('player-active');
      document.querySelector('.player-winner .name').append('\nWinner!');
      d.classList.add('hidden');
    } else {
      sp();
    }
  }
});

bn.addEventListener('click', () => {
  window.location.reload();
});
