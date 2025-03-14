export default function parse(element, {document}) {
  const headerRow = [document.createElement('strong')];
  headerRow[0].textContent = 'Columns';

  const columns = [];

  Array.from(element.querySelectorAll('.css-v2ujkr')).forEach((column) => {
    const img = column.querySelector('img');
    const linkWrapper = column.querySelector('a');
    const heading = linkWrapper?.querySelector('h3');
    const button = linkWrapper?.querySelector('button');

    const imageElement = document.createElement('img');
    if (img) {
      imageElement.src = img.src;
      imageElement.alt = img.alt;
    }

    const headingElement = document.createElement('h3');
    if (heading) {
      headingElement.textContent = heading.textContent;
    }

    const linkElement = document.createElement('a');
    if (linkWrapper) {
      linkElement.href = linkWrapper.href;
      linkElement.textContent = button?.title || 'Weiter';
    }

    const columnContent = [
      imageElement,
      headingElement,
      linkElement
    ].filter((content) => content.textContent || content.src || content.href); // Filter out empty elements

    columns.push(columnContent);
  });

  const cells = [
    headerRow,
    columns,
  ];

  const block = WebImporter.DOMUtils.createTable(cells, document);
  element.replaceWith(block);
}