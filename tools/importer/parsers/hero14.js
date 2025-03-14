export default function parse(element, {document}) {
  // Extract necessary sub-elements
  const img = element.querySelector('img');
  const paragraphs = element.querySelectorAll('p');

  // Check if elements exist and handle missing data
  const imgElement = img ? img : document.createElement('img');
  imgElement.setAttribute('src', img ? img.src : '');
  imgElement.setAttribute('alt', img ? img.alt : '');

  const headingText = paragraphs[1]?.textContent || '';
  const subheadingText = (paragraphs[0]?.textContent || '') + (paragraphs[2]?.textContent || '');

  const heading = document.createElement('h1');
  heading.textContent = headingText;

  const subheading = document.createElement('p');
  subheading.textContent = subheadingText;

  // Create the header row dynamically
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Hero';
  const headerRow = [headerCell];

  // Combine image, heading, and subheading into a single cell
  const combinedContent = document.createElement('div');
  combinedContent.append(imgElement, heading, subheading);

  const contentRow = [combinedContent];

  // Create table using WebImporter.DOMUtils.createTable
  const cells = [
    headerRow,
    contentRow,
  ];
  const blockTable = WebImporter.DOMUtils.createTable(cells, document);

  // Replace original element with the new block table
  element.replaceWith(blockTable);
}