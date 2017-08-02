import ToDoBuilder from './toDoBuilder';
new ToDoBuilder(document.querySelector('.board'));
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
function showNotification() {
    Notification.requestPermission(function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification('Vibration Sample', {
                    body: 'Buzz! Buzz!',
                    icon: '../../favicon-16x16.png',
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: 'vibration-sample'
                });
            });
        }
    });
}
showNotification();
