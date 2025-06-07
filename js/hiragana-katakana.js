const dataHK = [
  { keyH: 'あ', keyK: 'ア', value: 'a' },
  { keyH: 'い', keyK: 'イ', value: 'i' },
  { keyH: 'う', keyK: 'ウ', value: 'u' },
  { keyH: 'え', keyK: 'エ', value: 'e' },
  { keyH: 'お', keyK: 'オ', value: 'o' },
  { keyH: 'か', keyK: 'カ', value: 'ka' },
  { keyH: 'き', keyK: 'キ', value: 'ki' },
  { keyH: 'く', keyK: 'ク', value: 'ku' },
  { keyH: 'け', keyK: 'ケ', value: 'ke' },
  { keyH: 'こ', keyK: 'コ', value: 'ko' },
  { keyH: 'さ', keyK: 'サ', value: 'sa' },
  { keyH: 'し', keyK: 'シ', value: 'shi' },
  { keyH: 'す', keyK: 'ス', value: 'su' },
  { keyH: 'せ', keyK: 'セ', value: 'se' },
  { keyH: 'そ', keyK: 'ソ', value: 'so' },
  { keyH: 'た', keyK: 'タ', value: 'ta' },
  { keyH: 'ち', keyK: 'チ', value: 'chi' },
  { keyH: 'つ', keyK: 'ツ', value: 'tsu' },
  { keyH: 'て', keyK: 'テ', value: 'te' },
  { keyH: 'と', keyK: 'ト', value: 'to' },
  { keyH: 'な', keyK: 'ナ', value: 'na' },
  { keyH: 'に', keyK: 'ニ', value: 'ni' },
  { keyH: 'ぬ', keyK: 'ヌ', value: 'nu' },
  { keyH: 'ね', keyK: 'ネ', value: 'ne' },
  { keyH: 'の', keyK: 'ノ', value: 'no' },
  { keyH: 'は', keyK: 'ハ', value: 'ha' },
  { keyH: 'ひ', keyK: 'ヒ', value: 'hi' },
  { keyH: 'ふ', keyK: 'フ', value: 'fu' },
  { keyH: 'へ', keyK: 'ヘ', value: 'he' },
  { keyH: 'ほ', keyK: 'ホ', value: 'ho' },
  { keyH: 'ま', keyK: 'マ', value: 'ma' },
  { keyH: 'み', keyK: 'ミ', value: 'mi' },
  { keyH: 'む', keyK: 'ム', value: 'mu' },
  { keyH: 'め', keyK: 'メ', value: 'me' },
  { keyH: 'も', keyK: 'モ', value: 'mo' },
  { keyH: 'や', keyK: 'ヤ', value: 'ya' },
  { keyH: 'ゆ', keyK: 'ユ', value: 'yu' },
  { keyH: 'よ', keyK: 'ヨ', value: 'yo' },
  { keyH: 'ら', keyK: 'ラ', value: 'ra' },
  { keyH: 'り', keyK: 'リ', value: 'ri' },
  { keyH: 'る', keyK: 'ル', value: 'ru' },
  { keyH: 'れ', keyK: 'レ', value: 're' },
  { keyH: 'ろ', keyK: 'ロ', value: 'ro' },
  { keyH: 'わ', keyK: 'ワ', value: 'wa' },
  { keyH: 'を', keyK: 'ヲ', value: 'wo' },
  { keyH: 'ん', keyK: 'ン', value: 'n' },
];

const dataHK_D = [
  { keyH: 'が', keyK: 'ガ', value: 'ga' },
  { keyH: 'ぎ', keyK: 'ギ', value: 'gi' },
  { keyH: 'ぐ', keyK: 'グ', value: 'gu' },
  { keyH: 'げ', keyK: 'ゲ', value: 'ge' },
  { keyH: 'ご', keyK: 'ゴ', value: 'go' },
  { keyH: 'ざ', keyK: 'ザ', value: 'za' },
  { keyH: 'じ', keyK: 'ジ', value: 'ji' },
  { keyH: 'ず', keyK: 'ズ', value: 'zu' },
  { keyH: 'ぜ', keyK: 'ゼ', value: 'ze' },
  { keyH: 'ぞ', keyK: 'ゾ', value: 'zo' },
  { keyH: 'だ', keyK: 'ダ', value: 'da' },
  { keyH: 'ぢ', keyK: 'ヂ', value: 'ji' },
  { keyH: 'づ', keyK: 'ヅ', value: 'zu' },
  { keyH: 'で', keyK: 'デ', value: 'de' },
  { keyH: 'ど', keyK: 'ド', value: 'do' },
  { keyH: 'ば', keyK: 'バ', value: 'ba' },
  { keyH: 'び', keyK: 'ビ', value: 'bi' },
  { keyH: 'ぶ', keyK: 'ブ', value: 'bu' },
  { keyH: 'べ', keyK: 'ベ', value: 'be' },
  { keyH: 'ぼ', keyK: 'ボ', value: 'bo' },
  { keyH: 'ぱ', keyK: 'パ', value: 'pa' },
  { keyH: 'ぴ', keyK: 'ピ', value: 'pi' },
  { keyH: 'ぷ', keyK: 'プ', value: 'pu' },
  { keyH: 'ぺ', keyK: 'ペ', value: 'pe' },
  { keyH: 'ぽ', keyK: 'ポ', value: 'po' },
];

const dataHK_G = [
  { keyH: 'きゃ', keyK: 'キャ', value: 'kya' },
  { keyH: 'きゅ', keyK: 'キュ', value: 'kyu' },
  { keyH: 'きょ', keyK: 'キョ', value: 'kyo' },
  { keyH: 'しゃ', keyK: 'シャ', value: 'sha' },
  { keyH: 'しゅ', keyK: 'シュ', value: 'shu' },
  { keyH: 'しょ', keyK: 'ショ', value: 'sho' },
  { keyH: 'ちゃ', keyK: 'チャ', value: 'cha' },
  { keyH: 'ちゅ', keyK: 'チュ', value: 'chu' },
  { keyH: 'ちょ', keyK: 'チョ', value: 'cho' },
  { keyH: 'にゃ', keyK: 'ニャ', value: 'nya' },
  { keyH: 'にゅ', keyK: 'ニュ', value: 'nyu' },
  { keyH: 'にょ', keyK: 'ニョ', value: 'nyo' },
  { keyH: 'ひゃ', keyK: 'ヒャ', value: 'hya' },
  { keyH: 'ひゅ', keyK: 'ヒュ', value: 'hyu' },
  { keyH: 'ひょ', keyK: 'ヒョ', value: 'hyo' },
  { keyH: 'みゃ', keyK: 'ミャ', value: 'mya' },
  { keyH: 'みゅ', keyK: 'ミュ', value: 'myu' },
  { keyH: 'みょ', keyK: 'ミョ', value: 'myo' },
  { keyH: 'りゃ', keyK: 'リャ', value: 'rya' },
  { keyH: 'りゅ', keyK: 'リュ', value: 'ryu' },
  { keyH: 'りょ', keyK: 'リョ', value: 'ryo' },
  { keyH: 'ぎゃ', keyK: 'ギャ', value: 'gya' },
  { keyH: 'ぎゅ', keyK: 'ギュ', value: 'gyu' },
  { keyH: 'ぎょ', keyK: 'ギョ', value: 'gyo' },
  { keyH: 'じゃ', keyK: 'ジャ', value: 'ja' },
  { keyH: 'じゅ', keyK: 'ジュ', value: 'ju' },
  { keyH: 'じょ', keyK: 'ジョ', value: 'jo' },
  { keyH: 'びゃ', keyK: 'ビャ', value: 'bya' },
  { keyH: 'びゅ', keyK: 'ビュ', value: 'byu' },
  { keyH: 'びょ', keyK: 'ビョ', value: 'byo' },
  { keyH: 'ぴゃ', keyK: 'ピャ', value: 'pya' },
  { keyH: 'ぴゅ', keyK: 'ピュ', value: 'pyu' },
  { keyH: 'ぴょ', keyK: 'ピョ', value: 'pyo' },
];

// data loading
const modeDefault = document.getElementById('modeDefault');
const modeD = document.getElementById('modeD');
const modeG = document.getElementById('modeG');
const toggleMode = document.getElementById('toggleMode');
const textInput = document.getElementById('textInput');
const mainNote = document.getElementById('mainNote');
const character = document.getElementById('character');
const note = document.getElementById('note');
const square = document.getElementById('square');
const radioButton1 = document.getElementById('radioButton1');
const radioButton2 = document.getElementById('radioButton2');
const overlay = document.getElementById('overlay');
const resetCanvas = document.getElementById('resetCanvas');
const drawingCanvas = document.getElementById('drawingCanvas');
const drawing = document.getElementById('drawing');
const ctx = drawingCanvas.getContext('2d');
const toggleTable = document.getElementById('toggleTable');
const squareTable = document.getElementById('squareTable');
// end of data loading

let touchTimer;
let overlayTimer;
let checkTimer;

let drawingFl = false;

drawingCanvas.width = drawingCanvas.offsetWidth;
drawingCanvas.height = drawingCanvas.offsetHeight;

// events
document.addEventListener('click', function (event) {
  if (event.target !== textInput) {
    textInput.focus();
  }
});

function loadEvents() {
  modeDefault.addEventListener('click', checkMode);
  modeD.addEventListener('click', changeMode);
  modeG.addEventListener('click', changeMode);
  toggleMode.addEventListener('click', checkMode);
  textInput.addEventListener('input', checkText);
  textInput.addEventListener('keydown', clickEnter);
  radioButton1.addEventListener('click', changeLoadData);
  radioButton2.addEventListener('click', changeLoadData);
  square.addEventListener('dblclick', toggleNote);
  square.addEventListener('touchstart', handleTouch);
  resetCanvas.addEventListener('click', fnResetCanvas);
  drawingCanvas.addEventListener('mousedown', startDrawing);
  drawingCanvas.addEventListener('mouseup', stopDrawing);
  drawingCanvas.addEventListener('mousemove', draw);
  drawingCanvas.addEventListener('touchstart', startDrawing);
  drawingCanvas.addEventListener('touchend', stopDrawing);
  drawingCanvas.addEventListener('touchmove', draw);
  toggleTable.addEventListener('click', showTable);
}

function changeMode() {
  if (modeD.checked || modeG.checked) {
    modeDefault.disabled = false;
  }
  if (!modeD.checked && !modeG.checked) {
    modeDefault.checked = true;
    modeDefault.disabled = true;
  }
  loadData();
}

function checkMode() {
  loadData();
}

function changeLoadData() {
  loadDataTable();
  loadData();
}

function showTable() {
  squareTable.style.visibility = toggleTable.checked ? 'visible' : 'hidden';
}

function checkText() {
  textInput.value = textInput.value.toLowerCase();
  textInput.value = textInput.value.replace(/[^a-z]/g, '');

  if (textInput.value.includes('hiragana')) {
    radioButton1.checked = true;
    loadData();
    textInput.value = '';
    textInput.focus();
    return;
  }

  if (textInput.value.includes('katakana')) {
    radioButton2.checked = true;
    loadData();
    textInput.value = '';
    textInput.focus();
    return;
  }

  if (textInput.value.includes('modet')) {
    toggleMode.checked = !toggleMode.checked;
    changeMode();
    textInput.value = '';
    textInput.focus();
    return;
  }

  if (textInput.value.includes('modeq')) {
    if (modeD.checked || modeG.checked) {
      modeDefault.checked = !modeDefault.checked;
      changeMode();
    }
    textInput.value = '';
    textInput.focus();
    return;
  }

  if (textInput.value.includes('moded')) {
    modeD.checked = !modeD.checked;
    changeMode();
    textInput.value = '';
    textInput.focus();
    return;
  }

  if (textInput.value.includes('modeg')) {
    modeG.checked = !modeG.checked;
    changeMode();
    textInput.value = '';
    textInput.focus();
    return;
  }

  if (textInput.value.includes('show')) {
    toggleTable.checked = !toggleTable.checked;
    showTable();
    textInput.value = '';
    textInput.focus();
    return;
  }

  if (textInput.value.includes('next') || textInput.value.includes('nm')) {
    loadData();
    return;
  }

  clearTimeout(checkTimer);
  if (textInput.value === note.textContent) {
    checkTimer = setTimeout(() => {
      loadData();
      square.classList.remove('correct');
    }, 500);
    square.classList.remove('incorrect');
    square.classList.add('correct');
    note.style.visibility = 'visible';
    fnOverlay();
    textInput.value = '';
    textInput.focus();
  }
}

function clickEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    checkInput();
  }
  if (event.key === ' ') {
    if (toggleMode.checked) {
      toggleNote();
    } else {
      event.preventDefault();
      checkInput();
      toggleNote();
    }
  }
}

function handleTouch() {
  if (touchTimer) {
    clearTimeout(touchTimer);
    toggleNote();
    touchTimer = null;
  } else {
    touchTimer = setTimeout(() => {
      touchTimer = null;
    }, 300);
  }
  textInput.focus();
}

function toggleNote() {
  note.style.visibility = note.style.visibility === 'visible' ? 'hidden' : 'visible';
  textInput.value = '';
  textInput.focus();
}

function startDrawing(event) {
  drawingFl = true;
  ctx.beginPath();
}

function stopDrawing() {
  drawingFl = false;
}

function draw(event) {
  if (!drawingFl) return;

  event.preventDefault();
  const rect = drawingCanvas.getBoundingClientRect();
  const x = (event.clientX || event.touches[0].clientX) - rect.left;
  const y = (event.clientY || event.touches[0].clientY) - rect.top;

  ctx.lineWidth = Math.random() * 8 + 5;
  ctx.strokeStyle = 'black';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowBlur = 1;
  ctx.shadowColor = 'black';

  ctx.lineTo(x, y);
  ctx.stroke();
}
// end of event

// load data fist
function loadData() {
  let data;
  const datasets = [];

  if (modeDefault.checked) datasets.push(dataHK);
  if (modeD.checked) datasets.push(dataHK_D);
  if (modeG.checked) datasets.push(dataHK_G);

  if (datasets.length > 0) {
    const selectedSet = datasets[Math.floor(Math.random() * datasets.length)];
    const ram = Math.floor(Math.random() * selectedSet.length);
    data = selectedSet[ram];
  }

  if (toggleMode.checked) {
    character.textContent = data.value;
    mainNote.textContent = '';
    if (radioButton1.checked) {
      if (data.keyH.length > 1) {
        note.innerHTML = `<span>${data.keyH.charAt(0)}</span><span class="small">${data.keyH.charAt(1)}</span>`;
      } else {
        note.textContent = data.keyH;
      }
    }
    if (radioButton2.checked) {
      if (data.keyK.length > 1) {
        note.innerHTML = `<span>${data.keyK.charAt(0)}</span><span class="small">${data.keyK.charAt(1)}</span>`;
      } else {
        note.textContent = data.keyK;
      }
    }
  } else {
    if (radioButton1.checked) {
      if (data.keyH.length > 1) {
        character.innerHTML = `<span>${data.keyH.charAt(0)}</span><span class="small">${data.keyH.charAt(1)}</span>`;
        mainNote.innerHTML = `<span>${data.keyK.charAt(0)}</span><span class="small">${data.keyK.charAt(1)}</span>`;
      } else {
        character.textContent = data.keyH;
        mainNote.textContent = data.keyK;
      }
    }
    if (radioButton2.checked) {
      if (data.keyK.length > 1) {
        character.innerHTML = `<span>${data.keyK.charAt(0)}</span><span class="small">${data.keyK.charAt(1)}</span>`;
        mainNote.innerHTML = `<span>${data.keyH.charAt(0)}</span><span class="small">${data.keyH.charAt(1)}</span>`;
      } else {
        character.textContent = data.keyK;
        mainNote.textContent = data.keyH;
      }
    }
    note.textContent = data.value;
  }
  note.style.visibility = 'hidden';
  textInput.value = '';
  textInput.focus();
  fnResetCanvas();
}
// end of load data fist

// load data table
function loadDataTable() {
  dataHK.forEach((x) => {
    const cell = document.getElementById(`cell_${x.value}`);
    if (cell) {
      let mainNote;
      let mainChar;
      if (radioButton1.checked) {
        mainNote = x.keyK;
        mainChar = x.keyH;
      }
      if (radioButton2.checked) {
        mainNote = x.keyH;
        mainChar = x.keyK;
      }
      cell.querySelectorAll('span').forEach((span) => {
        if (span.classList.contains('cell-main-note')) {
          span.textContent = mainNote;
        } else if (span.classList.contains('cell-main-character')) {
          span.textContent = mainChar;
        } else if (span.classList.contains('cell-note')) {
          span.textContent = x.value;
        }
      });
    }
  });
  let count = 0;
  dataHK_D.forEach((x) => {
    const suffix = (x.value === 'ji' || x.value === 'zu') && count > 1 ? '2' : '';
    const cell = document.getElementById(`cell_${x.value}${suffix}`);
    if (x.value === 'ji' || x.value === 'zu') {
      count++;
    }
    if (cell) {
      let mainNote;
      let mainChar;
      if (radioButton1.checked) {
        mainNote = x.keyK;
        mainChar = x.keyH;
      }
      if (radioButton2.checked) {
        mainNote = x.keyH;
        mainChar = x.keyK;
      }
      cell.querySelectorAll('span').forEach((span) => {
        if (span.classList.contains('cell-main-note')) {
          span.textContent = mainNote;
        } else if (span.classList.contains('cell-main-character')) {
          span.textContent = mainChar;
        } else if (span.classList.contains('cell-note')) {
          span.textContent = x.value;
        }
      });
    }
  });
  dataHK_G.forEach((x) => {
    const cell = document.getElementById(`cell_${x.value}`);
    if (cell) {
      let mainNote;
      let mainChar;
      if (radioButton1.checked) {
        mainNote = x.keyK;
        mainChar = x.keyH;
      }
      if (radioButton2.checked) {
        mainNote = x.keyH;
        mainChar = x.keyK;
      }
      cell.querySelectorAll('span').forEach((span) => {
        if (span.classList.contains('cell-main-note')) {
          span.innerHTML = `<span>${mainNote.charAt(0)}</span><span class="small">${mainNote.charAt(1)}</span>`;
        } else if (span.classList.contains('cell-main-character')) {
          span.innerHTML = `<span>${mainChar.charAt(0)}</span><span class="small">${mainChar.charAt(1)}</span>`;
        } else if (span.classList.contains('cell-note')) {
          span.textContent = x.value;
        }
      });
    }
  });
}
// end of load data table

// reset canvas
function fnResetCanvas() {
  ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
}
// end of reset canvas

// overlay
function fnOverlay() {
  overlay.style.display = 'block';
  clearTimeout(overlayTimer);
  overlayTimer = setTimeout(() => {
    overlay.style.display = 'none';
  }, 700);
}
// end of overlay

// check input
function checkInput() {
  clearTimeout(checkTimer);
  if (textInput.value === note.textContent) {
    checkTimer = setTimeout(() => {
      loadData();
      square.classList.remove('correct');
    }, 500);
    square.classList.remove('incorrect');
    square.classList.add('correct');
    note.style.visibility = 'visible';
    fnOverlay();
  } else {
    checkTimer = setTimeout(() => {
      square.classList.remove('incorrect');
    }, 500);
    square.classList.add('incorrect');
  }
  textInput.value = '';
  textInput.focus();
}
// end of check input

// run function
loadEvents();
loadDataTable();
loadData();
