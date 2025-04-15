export default defineNuxtPlugin(() => {
    // This code runs only on client because of `.client.js`
    if (typeof window !== 'undefined') {

        // Prepr Tracking Pixel
        // Example code
        //     ! function (e, t, p, r, n, a, s) {
        //   e[r] || ((n = e[r] = function () {
        //       n.process ? n.process.apply(n, arguments) : n.queue.push(arguments)
        //   }).queue = [], n.t = +new Date, (a = t.createElement(p)).async = 1, a.src = "https://cdn.tracking.prepr.io/js/prepr_v2.min.js?t=" + 864e5 * Math.ceil(new Date / 864e5), (s = t.getElementsByTagName(p)[0]).parentNode.insertBefore(a, s))
        // }(window, document, "script", "prepr"), prepr("init", "YOUR_TOKEN"), prepr("event", "pageload");
    }
});