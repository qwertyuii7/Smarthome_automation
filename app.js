const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll("[data-hover]").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });
});

const modeItems = document.querySelectorAll("[data-mode]");
const modeImages = document.querySelectorAll("[data-mode-image]");
const modeOrder = [...modeItems].map((item) => item.dataset.mode);
let activeMode = modeOrder[0];

function setMode(name) {
  activeMode = name;

  modeItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.mode === name);
  });

  modeImages.forEach((image) => {
    image.classList.toggle("active", image.dataset.modeImage === name);
  });
}

modeItems.forEach((item) => {
  item.addEventListener("click", () => setMode(item.dataset.mode));
});

document.querySelectorAll("[data-mode-step]").forEach((button) => {
  button.addEventListener("click", () => {
    const currentIndex = Math.max(0, modeOrder.indexOf(activeMode));
    const step = Number(button.dataset.modeStep);
    const nextIndex = (currentIndex + step + modeOrder.length) % modeOrder.length;
    setMode(modeOrder[nextIndex]);
  });
});

if (modeItems.length) {
  const modeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMode(entry.target.dataset.mode);
        }
      });
    },
    { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
  );

  modeItems.forEach((item) => modeObserver.observe(item));
}
