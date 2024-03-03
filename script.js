document.addEventListener('DOMContentLoaded', () => {
    const unReadMessages = document.querySelectorAll('.unread');
    const unReadMessagesCount = unReadMessages.length;
    const notificationBadge = document.getElementById('num-of-notification');
    notificationBadge.textContent = unReadMessagesCount;

    const markAll = document.getElementById('mark-as-read');
    markAll.addEventListener('click', () => {
        unReadMessages.forEach(message => {
            message.classList.remove('unread');
            message.classList.add('read');
        });

        // Update the count to zero
        notificationBadge.textContent = '0';
    });
});
