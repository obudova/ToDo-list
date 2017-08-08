import ToDoBuilder from './toDoBuilder';
import '../css/style.scss';
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
console.log('type script');
// function showNotification() {
//     Notification.requestPermission(function(result) {
//         if (result === 'granted') {
//             navigator.serviceWorker.ready.then(function(registration) {
//                 registration.showNotification('Vibration Sample', {
//                     body: 'Buzz! Buzz!',
//                     icon: '/android-chrome-512x512.png',
//                     vibrate: [200, 100, 200, 100, 200, 100, 200],
//                     tag: 'vibration-sample'
//                 });
//             });
//         }
//     });
// }
// showNotification();
