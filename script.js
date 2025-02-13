const button = document.querySelector(".button-no-pushable");

const whyNo = [
    "ILL CRY IF YOU CHOOSE NO",
    "WHY NOT BABY?",
    "PUHLEASE MY LOVE?",
    "PUHLEASSSEEEE BABYY",
    "NAH YOU WON'T EVER CLICK THIS NO BUTTON",
    "DON'T EVEN TRY",
    "BABY PUHLEAAAAAAAAAASEEEE",
    "NAH I AIN'T GIVING UP",
    "I STILL LOVE YOU VERY MUCH MUCH MUCH",
    "PWEASESEEEE",
    "JUST THIS TIME PWEASE",
    "COME ON GORGEOUS PLEASE",
    "YOU'RE STILL THE PRETTIEST WOMAN IN MY EYES",
    
];

if (button) {
    ["mouseover", "click"].forEach(function (type) {
        button.addEventListener(type, function () {
            const maxTop = window.innerHeight - button.offsetHeight - 10; // Prevents overflow
            const maxLeft = window.innerWidth - button.offsetWidth - 10;

            const top = getRandomNum(maxTop);
            const left = getRandomNum(maxLeft);

            console.log("New position -> Top:", top, "Left:", left);

            moveElement(button, "left", left);
            moveElement(button, "top", top);

            // Change only the text inside `.button-82-front`
            const frontText = button.querySelector(".button-82-front");
            if (frontText) frontText.textContent = getRandomQuote();
        });
    });
} else {
    console.error("Button not found!");
}

const moveElement = (element, animeType, pixels) => {
    anime({
        targets: element,
        [animeType]: `${pixels}px`,
        easing: 'easeOutElastic(1, 0.7)',
        duration: 800,
    });
};

const getRandomNum = (max, offset = 0) => {
    return Math.max(offset, Math.min(Math.floor(Math.random() * max), max - offset)); // Keeps within screen bounds
};

const getRandomQuote = () => {
    const index = getRandomNum(whyNo.length);
    return whyNo[index];
};
