// Animation
const slideIns = document.querySelectorAll(".slide-in")

const observer1 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("slide-in-right", entry.isIntersecting)
            if (entry.isIntersecting) observer1.unobserve(entry.target)
        })
    },
    {
        threshold: 0.5,
    }
)

slideIns.forEach(slideIn => {
    observer1.observe(slideIn)
})



// Navigation

const hamburgerButton = document.querySelector('.hamburger-button');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
    navigation.hasAttribute('data-visible')
        ? hamburgerButton.setAttribute('aria-expanded', false)
        : hamburgerButton.setAttribute('aria-expanded', true);
    navigation.toggleAttribute('data-visible');

    // navigation.hasAttribute('data-visible')
    //     ? hamburgerButton.style.stroke = 'var(--clr-neutral-900)'
    //     : hamburgerButton.style.stroke = 'var(--clr-primary-400)';
});

// Scroll up

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "flex";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#fcfcfc50 ${scrollValue}%, #fcfcfc10 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;