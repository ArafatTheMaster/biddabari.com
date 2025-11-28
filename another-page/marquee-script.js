document.addEventListener("DOMContentLoaded", () => {
    const ticker = document.querySelector(".ticker");
    const wrap = document.querySelector(".ticker-wrap");

    const textWidth = ticker.scrollWidth;     // টেক্সটের width
    const wrapWidth = wrap.clientWidth;       // wrapper-এর width

    const midpoint = (textWidth - wrapWidth) / 2;   // মাঝামাঝি offset

    // animation-duration (e.g. "30s") → seconds → ms
    const durationSec = parseFloat(getComputedStyle(ticker).animationDuration);
    const durationMs = durationSec * 1000;

    // প্রতি px কত ms লাগে
    const pxPerMs = durationMs / (textWidth + wrapWidth);

    // negative delay হিসাব
    const negativeDelay = -(midpoint * pxPerMs) / 1000;

    // প্রয়োগ
    ticker.style.animationDelay = negativeDelay + "s";
});