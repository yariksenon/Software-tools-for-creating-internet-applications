const link = document.getElementById('my-link');
        const initialFontSize = window.getComputedStyle(link).fontSize;

        link.addEventListener('mouseover', function() {
            link.style.color = 'green';
            link.style.textDecoration = 'none';
            link.style.fontSize = `calc(${initialFontSize} * 2)`;
        });

        link.addEventListener('mouseout', function() {
            link.style.color = 'black';
            link.style.textDecoration = 'none';
            link.style.fontSize = initialFontSize;
        });