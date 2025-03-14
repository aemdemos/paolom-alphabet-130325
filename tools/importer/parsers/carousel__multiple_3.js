export default function parse(element, {document}) {
  // Validate the input element
  if (!element || !document) {
    throw new Error('Invalid input: element or document is missing');
  }

  // Create the header row dynamically
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Carousel';
  const rows = [[headerCell]]; // Initialize table rows with header row

  // Extract carousel slides dynamically
  const slides = element.querySelectorAll('.css-jhx2rk.e170i3ze11');

  slides.forEach(slide => {
    const image = slide.querySelector('img');
    const title = slide.querySelector('h2');
    const description = slide.querySelector('p');

    // Prepare content for this slide
    const content = [];

    if (title) {
      const titleElement = document.createElement('h2');
      titleElement.textContent = title.textContent.trim();
      content.push(titleElement);
    }

    if (description) {
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = description.textContent.trim();
      content.push(descriptionElement);
    }

    // Add slide row if it has meaningful content
    if (image || content.length > 0) {
      rows.push([image || '', content]);
    }
  });

  // Create the table
  const table = WebImporter.DOMUtils.createTable(rows, document);

  // Replace the original element with the new table
  element.replaceWith(table);
}