(() => {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.right = '0';
  container.style.zIndex = '9999';
  container.style.margin = '1rem';
  container.style.padding = '1rem';
  container.style.paddingTop = '1.5rem'; // For clearance of the close button
  container.style.backgroundColor = 'white';
  container.style.borderRadius = '15px';
  container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignContent = 'space-between';
  container.style.justifyContent = 'space-between';
  container.style.alignItems = 'center';
  container.style.gap = '0.5rem';

  const close = document.createElement('button');
  close.textContent = '×';
  close.style.cursor = 'pointer';
  close.style.position = 'absolute';
  close.style.top = '0';
  close.style.left = '0';
  close.style.backgroundColor = 'transparent';
  close.style.border = 'none';
  close.style.paddingLeft = '0.5rem';
  close.style.fontSize = '1.5rem';
  close.addEventListener('click', () => document.body.removeChild(container));

  container.appendChild(close);

  const button = document.createElement('button');
  button.style.backgroundColor = '#0d6efd';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.padding = '0.5rem 1rem';
  button.style.margin = '0.5rem';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.2)';
  
  button.textContent = 'Open';
  button.addEventListener('click', () => {
    const tab = window.open('about:blank', '_blank');
    tab.document.write(
      '<pre style="font-size: 1.5rem; font-family: monospace;">' +
        JSON.stringify({
          title: document.title,
          language: document?.documentElement?.lang,
          charset: document?.characterSet,
          doctype: document?.doctype?.name
        }, null, 2).replaceAll('"', '').replaceAll(',', '').slice(1, -1) +
      '</pre>'
    );
    tab.document.close();
  });

  container.appendChild(document.createTextNode('View data:'));
  container.appendChild(button);

  document.body.appendChild(container);
})();