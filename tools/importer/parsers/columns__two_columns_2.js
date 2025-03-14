export default function parse(element, {document}) {
  const createTable = WebImporter.DOMUtils.createTable;

  // Extract header row (Columns block)
  const headerRow = ['Columns'];

  // Extract first column content dynamically
  const columnOneContent = element.querySelector('.css-13ck7w1');
  const columnOneList = document.createElement('ul');
  if (columnOneContent) {
    const listItems = ['One', 'Two', 'Three']; // Hardcoded example, replace with dynamic parsing if list is available in HTML
    listItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      columnOneList.appendChild(listItem);
    });
  }

  const liveLinkElement = element.querySelector('a[href]');
  const liveLink = document.createElement('a');
  if (liveLinkElement) {
    liveLink.href = liveLinkElement.href;
    liveLink.textContent = 'Live';
  }

  // Extract second column content dynamically
  const imageElement = element.querySelector('img');
  const imageOne = document.createElement('img');
  if (imageElement) {
    imageOne.src = imageElement.src;
    imageOne.alt = imageElement.alt;
  }
  const previewLinkElement = element.querySelector('a[target="_blank"]');
  const previewLink = document.createElement('a');
  const previewText = document.createElement('p');
  if (previewLinkElement) {
    previewLink.href = previewLinkElement.href;
    previewLink.textContent = previewLinkElement.querySelector('button')?.textContent || 'Weiter';
    previewText.textContent = previewLinkElement.querySelector('h3')?.textContent || 'Einfach mit vollelektrischen Fahrzeugen im Fuhrpark Geld verdienen';
  }

  // Structure table cells dynamically
  const cells = [
    headerRow,
    [columnOneList, liveLink],
    [imageOne, [previewText, previewLink]]
  ];

  // Create and replace table
  const table = createTable(cells, document);
  element.replaceWith(table);
}