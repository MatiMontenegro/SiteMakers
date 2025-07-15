beforeEach(() => {
  document.body.innerHTML = `
    <div class="panel active"></div>
    <div class="panel active"></div>
    <div class="panel"></div>
  `;
  jest.resetModules();
});

test('removeActiveClasses removes the active class from panels', () => {
  const { removeActiveClasses } = require('../js/app.js');
  removeActiveClasses();
  const activeElements = document.querySelectorAll('.panel.active');
  expect(activeElements.length).toBe(0);
});
