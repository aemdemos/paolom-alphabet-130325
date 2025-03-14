export default function parse(element, {document}) {
  // Extract the image element
  const imageContainer = element.querySelector('.css-b4kcmh');
  const img = imageContainer?.querySelector('img');

  // Extract the title
  const title = element.querySelector('h1');

  // Extract the subtitle
  const subtitle = element.querySelector('p');

  // Safeguard for missing elements
  const cells = [];

  // Create a heading for the block name
  const blockName = document.createElement('strong');
  blockName.textContent = 'Hero';
  cells.push([blockName]);

  // Ensure cells include dynamically extracted content
  const contentRow = [];
  if (img) contentRow.push(img);
  if (title) contentRow.push(title);
  if (subtitle) contentRow.push(subtitle);

  if (contentRow.length) {
    cells.push(contentRow);
  }

  // Create the block table
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block table
  element.replaceWith(block);
}