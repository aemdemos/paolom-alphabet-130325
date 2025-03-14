export default function parse(element, {document}) {
  const cells = [];

  // Extract and prepare the block header row
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Columns';
  const headerRow = [headerCell];
  cells.push(headerRow);

  // Extract and prepare content for each column
  const columns = Array.from(element.querySelectorAll('.css-s54amb > .css-owkj2z'));
  const contentRow = columns.map((column) => {
    const container = document.createElement('div');

    // Extract image if available
    const img = column.querySelector('img');
    if (img) {
      const imgEl = document.createElement('img');
      imgEl.src = img.src;
      imgEl.alt = img.alt;
      container.appendChild(imgEl);
    }

    // Extract heading if available
    const heading = column.querySelector('h2, h3');
    if (heading) {
      const headingEl = document.createElement('p');
      headingEl.textContent = heading.textContent;
      container.appendChild(headingEl);
    }

    // Extract text paragraph if available
    const paragraph = column.querySelector('p');
    if (paragraph) {
      const paragraphEl = document.createElement('p');
      paragraphEl.textContent = paragraph.textContent;
      container.appendChild(paragraphEl);
    }

    // Extract links if available
    const link = column.querySelector('a');
    if (link) {
      const linkEl = document.createElement('a');
      linkEl.href = link.href;
      linkEl.textContent = link.textContent || link.title || 'Link';
      container.appendChild(linkEl);
    }

    return container;
  });

  cells.push(contentRow);

  // Create the table block
  const blockTable = WebImporter.DOMUtils.createTable(cells, document);

  // Replace the original element with the new block table
  element.replaceWith(blockTable);
}