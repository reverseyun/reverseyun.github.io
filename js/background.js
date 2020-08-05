"use strict";

const swbg=function(){
    $(document).ready(function() {
        for (var t = [], n = 1; n <=4 ; n++) {
            var a = "https://cdn.jsdelivr.net/gh/reverseyun/CDN@1.5/bg/bg_img" + n + ".jpg";
            t.push(a)
        }
        window.t2 = t, void 0 === window.backstretch_start && (window.backstretch_start = 0), $("#web_bg").backstretch(window.t2, {
            duration: 1e4,
            alignY: 0,
            transition: "fade",
            transitionDuration: 1e3,
            start: window.backstretch_start
        }), $(window).on("backstretch.after", function(t, n, a) {
            window.backstretch_start = a
        })
    });
}

