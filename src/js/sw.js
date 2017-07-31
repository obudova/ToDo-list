
export default function() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => {
                console.log('OK')
            }, (e) => {
                console.log(e)
            })
    }
}