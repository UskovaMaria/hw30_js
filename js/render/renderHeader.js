export const renderHeader = (config, headerParts) => {
    const parent = document.querySelector('.container');
    const headerContent = config.parts.reduce((acc, item) => acc + headerParts[item], '');
    const headerEl = `<div class="header">${ headerContent }</div>`;
  
    parent.insertAdjacentHTML('afterbegin', headerEl);
}