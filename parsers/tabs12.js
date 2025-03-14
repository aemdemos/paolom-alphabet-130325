export default function parse(element, {document}) {
    const cells = [];

    // Extract main categories and sublinks
    const categories = element.querySelectorAll('ul > li');

    categories.forEach(category => {
        const headerCell = document.createElement('strong');
        const headerText = category.querySelector('h4 a span')?.textContent.trim();
        if (headerText) {
            headerCell.textContent = headerText;
            const subLinks = Array.from(category.querySelectorAll('ul > li > a')).map(link => {
                const anchor = document.createElement('a');
                anchor.href = link.href;
                anchor.textContent = link.textContent.trim();
                return anchor;
            });

            cells.push([headerCell, subLinks.length > 0 ? subLinks : 'No Links Available']);
        }
    });

    // Create block table
    const block = WebImporter.DOMUtils.createTable(cells, document);

    // Replace the original element with the new block structure
    element.replaceWith(block);
}