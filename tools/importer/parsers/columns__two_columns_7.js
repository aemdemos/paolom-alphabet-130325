export default function parse(element, {document}) {
  const titleElement = element.querySelector('h2');
  const paragraphElement = element.querySelector('div.css-qyk0d0');
  const linkElement = element.querySelector('a[href]');
  const imageElement = element.querySelector('img');

  const headerRow = [document.createElement('strong')];
  headerRow[0].textContent = 'Columns block';

  const textCell = document.createElement('div');
  if (titleElement) textCell.appendChild(titleElement.cloneNode(true));
  if (paragraphElement) textCell.appendChild(paragraphElement.cloneNode(true));

  const linkCell = document.createElement('div');
  if (linkElement) linkCell.appendChild(linkElement.cloneNode(true));

  const imageCell = imageElement ? imageElement.cloneNode(true) : document.createElement('div');

  const cells = [
    headerRow,
    [textCell, imageCell]
  ];

  const table = WebImporter.DOMUtils.createTable(cells, document);

  element.replaceWith(table);
}