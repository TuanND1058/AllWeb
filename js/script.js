const gradientColors = [
  'linear-gradient(45deg, #ff9a9e, #fad0c4)',
  'linear-gradient(45deg, #a18cd1, #fbc2eb)',
  'linear-gradient(45deg, #fbc2eb, #a6c1ee)',
  'linear-gradient(45deg, #fddb92, #d1fdff)',
  'linear-gradient(45deg, #a1c4fd, #c2e9fb)',
  'linear-gradient(45deg, #667eea, #764ba2)',
  'linear-gradient(45deg, #89f7fe, #66a6ff)',
  'linear-gradient(45deg, #ffecd2, #fcb69f)',
  'linear-gradient(45deg, #ffdde1, #ee9ca7)',
  'linear-gradient(45deg, #c1dfc4, #deecdd)',
  'linear-gradient(45deg, #f6d365, #fda085)',
  'linear-gradient(45deg, #a1ffce, #faffd1)',
  'linear-gradient(45deg, #fbc2eb, #fcd6e6)',
  'linear-gradient(45deg, #fda085, #f6d365)',
  'linear-gradient(45deg, #ffecd2, #fcb69f)',
  'linear-gradient(45deg, #d299c2, #fef9d7)',
  'linear-gradient(45deg, #e0c3fc, #8ec5fc)',
  'linear-gradient(45deg, #c2e9fb, #a1c4fd)',
  'linear-gradient(45deg, #f093fb, #f5576c)',
  'linear-gradient(45deg, #4facfe, #00f2fe)',
  'linear-gradient(45deg, #43e97b, #38f9d7)',
  'linear-gradient(45deg, #ff9a9e, #fecfef)',
  'linear-gradient(45deg, #30cfd0, #330867)',
  'linear-gradient(45deg, #a18cd1, #d5d4d0)',
];

fetch('pages.json')
  .then((response) => response.json())
  .then((pages) => {
    const container = document.getElementById('menu');
    pages.forEach((page, index) => {
      const button = document.createElement('a');
      button.href = `pages/${page.file}`;
      button.className = 'menu-button';
      button.style.background = gradientColors[index % gradientColors.length];
      button.textContent = page.title;
      container.appendChild(button);
    });
  })
  .catch((error) => {
    console.error('Failed to load pages.json', error);
  });
