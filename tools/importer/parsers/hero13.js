export default function parse(element, { document }) {
  // Extract the image element dynamically
  const imageElement = element.querySelector('img');
  const image = document.createElement('img');
  if (imageElement) {
    image.src = imageElement.src;
    image.alt = imageElement.alt || '';
  }

  // Extract the title dynamically
  const titleElement = element.querySelector('h3');
  const title = document.createElement('h1');
  if (titleElement) {
    title.textContent = titleElement.textContent;
  }

  // Extract the call-to-action dynamically
  const ctaElement = element.querySelector('a');
  const cta = document.createElement('a');
  if (ctaElement) {
    cta.textContent = ctaElement.textContent.trim();
    cta.href = ctaElement.href;
  }

  // Define the header row exactly as per the example
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Hero';
  const headerRow = [headerCell];

  // Define the cells array for the block table
  const cells = [
    headerRow,
    [image, title, cta]
  ];

  // Create the block table dynamically
  const block = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block table
  element.replaceWith(block);
}