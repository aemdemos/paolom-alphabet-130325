export default function parse(element, {document}) {
  // Extract the background image from the element
  const backgroundImage = element.querySelector('img')?.src || '';

  // Extract the title element
  const titleElement = element.querySelector('title');
  const titleText = titleElement ? titleElement.textContent : '';

  // Extract the button element (Call-to-Action)
  const buttonElement = element.querySelector('button');
  const buttonText = buttonElement ? buttonElement.textContent : '';
  const buttonLink = buttonElement ? buttonElement.getAttribute('href') : '';

  // Create structured content for the Hero block
  const blockCells = [
    ['Hero'], // Header row containing block name
    [
      backgroundImage ? `<img src="${backgroundImage}" alt="">` : '',
      titleText ? `<h1>${titleText}</h1>` : '',
      buttonText && buttonLink ? `<a href="${buttonLink}">${buttonText}</a>` : ''
    ],
  ];

  const heroBlock = WebImporter.DOMUtils.createTable(blockCells, document);

  // Replace original element with the new Hero block
  element.replaceWith(heroBlock);
}