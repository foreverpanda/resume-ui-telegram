// Accordion functionality
document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const content = button.nextElementSibling;

        // Toggle active class to expand or collapse
        accordionItem.classList.toggle('active');

        // Smooth height transition
        if (accordionItem.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '15px';
        } else {
            content.style.maxHeight = '0';
            content.style.padding = '0 15px';
        }

        // Collapse any open accordion when clicking a different title
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem && item.classList.contains('active')) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = '0';
                item.querySelector('.accordion-content').style.padding = '0 15px';
            }
        });
    });
});
