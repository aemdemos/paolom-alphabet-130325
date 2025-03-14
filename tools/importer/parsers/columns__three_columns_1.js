export default function parse(element, {document}) {
  const headerCell = document.createElement('strong');
  headerCell.textContent = 'Columns';
  const headerRow = [headerCell];

  const sections = [...element.querySelectorAll('.css-s54amb.e567jcb1')];

  const cells = sections.map((section) => {
    const imgElement = document.createElement('img');
    const image = section.querySelector('img');
    imgElement.src = image?.src || '';
    imgElement.alt = image?.alt || '';

    const titleElement = document.createElement('h3');
    const title = section.querySelector('h3, h2');
    titleElement.textContent = title?.textContent || '';

    const linkElement = document.createElement('a');
    const link = section.querySelector('a');
    linkElement.href = link?.href || '#';
    linkElement.textContent = link ? 'Learn More' : '';

    const contentElement = document.createElement('p');
    const content = section.querySelector('p');
    contentElement.textContent = content?.textContent || '';

    const combinedContent = document.createElement('div');
    combinedContent.append(imgElement, titleElement, contentElement, linkElement);

    return combinedContent;
  });

  // Ensure exactly three columns, adding placeholders if necessary
  while (cells.length < 3) {
    const placeholder = document.createElement('div');
    placeholder.textContent = 'Placeholder content';
    cells.push(placeholder);
  }

  const block = WebImporter.DOMUtils.createTable([headerRow, cells], document);

  element.replaceWith(block);
}