export default function parse(element, {document}) {
    // Helper function to create an HR element
    const createHr = () => {
        const hr = document.createElement('hr');
        return hr;
    };

    // Extract relevant data
    const link = element.querySelector('a');
    const svg = link.querySelector('svg');
    const linkText = link.textContent.trim();

    // Ensure all required information exists before proceeding
    if (!link || !svg || !linkText) {
        console.warn('Missing data in the element');
        return;
    }

    // Create the header row (properly matches example header)
    const headerRow = [document.createElement('strong')];
    headerRow[0].textContent = 'Search (minimal)';

    // Structure the block table
    const cells = [
        headerRow, // Header row
        [link.href, [svg, document.createTextNode(linkText)]] // Content row
    ];

    // Create the table block
    const table = WebImporter.DOMUtils.createTable(cells, document);

    // Replace the original element with the new block
    element.replaceWith(table);
}