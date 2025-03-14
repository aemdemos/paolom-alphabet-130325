export default function parse(element, {document}) {
  // Import helper function for table creation
  const { createTable } = WebImporter.DOMUtils;

  // Define the block type header
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Columns';
  const headerRow = [headerCell];

  // Extract content from the first column (text)
  const heading = element.querySelector('h2');
  const description = element.querySelector('div.css-qyk0d0');
  const link = element.querySelector('a[href]');

  const column1Content = [];

  if (heading) {
    const headerElement = document.createElement('p');
    headerElement.textContent = heading.textContent;
    column1Content.push(headerElement);
  }

  if (description) {
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description.textContent;
    column1Content.push(descriptionElement);
  }

  if (link && link.textContent.trim()) {
    const linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.textContent = link.textContent.trim();
    column1Content.push(linkElement);
  }

  // Extract content from the second column (image)
  const image = element.querySelector('img');

  let column2Content = '';
  if (image) {
    column2Content = image.cloneNode(true);
  }

  // Combine into table structure
  const cells = [
    headerRow, // Header row
    [column1Content, column2Content], // Content row
  ];

  // Create table block
  const block = createTable(cells, document);

  // Replace the original element with the new block table
  element.replaceWith(block);
}