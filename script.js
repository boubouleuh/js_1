
document.querySelectorAll('.text').forEach(item => {
    item.addEventListener('input', () => {
        item.setCustomValidity('');
        itemcheckValidity();
    });
    
    item.addEventListener('invalid', () => {
        if(item.value === '') {
            item.setCustomValidity(`[${item.getAttribute("name")}] cannot be empty`);
        } else {
            item.setCustomValidity('Looks like this is not an email');
        }
    });
    })