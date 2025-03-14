export default function parse(element, {document}) {
  // Identify all list elements within the given element
  const listItems = element.querySelectorAll('a');

  // Create an array to hold the rows for the table
  const rows = [];

  // Add header row with 'Tabs' label
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Tabs';
  const headerRow = [headerCell];
  rows.push(headerRow);

  // Iterate through each list item and extract its content
  listItems.forEach((item) => {
    const label = item.textContent;

    // Clean up text content by removing irrelevant icon alt text
    const cleanedText = label.replace(/Bild von.*$/, '').trim();

    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = cleanedText;

    rows.push([link]);
  });

  // Replace the original element with the new table
  const table = WebImporter.DOMUtils.createTable(rows, document);
  element.replaceWith(table);
}