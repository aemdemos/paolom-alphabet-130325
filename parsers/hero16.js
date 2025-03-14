export default function parse(element, {document}) {
  const cells = [];

  // Add the header row
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Hero';
  cells.push([headerCell]);

  // Extract the content from the element
  const backgroundImage = element.querySelector('img');
  const title = element.querySelector('h1, h2');
  const subheading = element.querySelector('p');
  const cta = element.querySelector('a');

  const content = [];

  // Add background image if available
  if (backgroundImage) {
    const img = document.createElement('img');
    img.src = backgroundImage.src;
    img.alt = backgroundImage.alt;
    content.push(img);
  }

  // Add title if available
  if (title) {
    const heading = document.createElement(title.tagName.toLowerCase());
    heading.textContent = title.textContent;
    content.push(heading);
  }

  // Add subheading if available
  if (subheading) {
    const paragraph = document.createElement('p');
    paragraph.textContent = subheading.textContent;
    content.push(paragraph);
  }

  // Add call-to-action if available
  if (cta) {
    const link = document.createElement('a');
    link.href = cta.href;
    link.textContent = cta.textContent;
    content.push(link);
  }

  // Add the content row
  cells.push([content]);

  // Create the table block
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block
  element.replaceWith(block);
}