let pin = "";

function appendNumber(num) {
  if (pin.length < 6) {
    pin += num;
    document.getElementById("pin-input").value = "*".repeat(pin.length);
  }
}

function clearPin() {
  pin = "";
  document.getElementById("pin-input").value = "";
}

function checkPin() {
  if (pin === "061005") {
    document.getElementById("pin-section").classList.add("hidden");
    document.getElementById("envelope").classList.remove("hidden");
  } else {
    alert("Sai mã PIN! Thử lại nha 🥲");
    clearPin();
  }
}

function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter-content");

  envelope.classList.add("hidden");
  letter.classList.remove("hidden");
  setTimeout(() => {
    letter.classList.add("open");
    typeLetterText();
  }, 200);
}

const letterMessage = `Gửi zợ iu dấu 🥺

Lâu lâu sến tí nha bé nhà ơi`;

let letterIndex = 0;

function typeLetterText() {
  const textElement = document.getElementById("letter-text");
  const speed = 40;

  function typeChar() {
    if (letterIndex < letterMessage.length) {
      textElement.textContent += letterMessage.charAt(letterIndex);
      letterIndex++;
      setTimeout(typeChar, speed);
    } else {
      startSlideshow();
    }
  }

  typeChar();
}

const imagePaths = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

let slideIndex = 0;

function startSlideshow() {
  const slideshow = document.getElementById("slideshow");
  const image = document.getElementById("slide-image");
  slideshow.classList.remove("hidden");

  image.src = imagePaths[0];
  image.classList.add("active");  // Bật opacity hiển thị ảnh đầu

  slideIndex = 1;

const interval = setInterval(() => {
  if (slideIndex >= imagePaths.length) {
    clearInterval(interval);
    triggerHearts();
  } else {
    image.classList.remove("active");
    setTimeout(() => {
      image.src = imagePaths[slideIndex];
      image.classList.add("active");
      slideIndex++; // tăng sau khi fade in xong
    }, 500);
  }
}, 2500);

function triggerHearts() {
  const container = document.getElementById("hearts-container");
  container.classList.remove("hidden");

  // Chặn scroll
  document.body.style.overflow = "hidden";

  let heartsFinished = 0;
  const totalHearts = 50;

  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `1.5s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.opacity = 0.5 + Math.random() * 0.5;
    heart.style.bottom = `-70px`;

    container.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
      heartsFinished++;

      // Khi tất cả trái tim đã bay xong → mở scroll lại
      if (heartsFinished === totalHearts) {
        document.body.style.overflow = "auto";
      }
    });
  }
}
}