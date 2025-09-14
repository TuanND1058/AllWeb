const data = [...data1, ...data2];
const searchInput = document.getElementById('searchInput');
const qaList = document.getElementById('qaList');
const pageTitle = document.getElementById('pageTitle');
const counter = document.getElementById('counter');

function renderList(filteredData) {
  qaList.innerHTML = '';
  filteredData.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.id}</span><div class="question">${item.question}</div><div class="answer">${item.answer}</div>`;
    qaList.appendChild(li);
  });
  counter.textContent = `(${filteredData.length})`;
}

function filterData() {
  const keyword = searchInput.value.toLowerCase();
  const filtered = data.filter((item) => item.question.toLowerCase().includes(keyword));
  renderList(filtered.length > 0 || keyword ? filtered : data);
}

searchInput.addEventListener('input', filterData);

pageTitle.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  renderList(data);
});

renderList(data);
