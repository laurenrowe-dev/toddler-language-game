const words = [
  { word: "cat", picture: "🐱", sound: "Meow, meow!", category: "animals" },
  { word: "dog", picture: "🐶", sound: "Woof, woof!", category: "animals" },
  { word: "duck", picture: "🦆", sound: "Quack, quack!", category: "animals" },
  { word: "cow", picture: "🐮", sound: "Moo, moo!", category: "animals" },
  { word: "sheep", picture: "🐑", sound: "Bah, bah!", category: "animals" },
  { word: "bird", picture: "🐦", sound: "Tweet, tweet!", category: "animals" },
  { word: "frog", picture: "🐸", sound: "Ribbit, ribbit!", category: "animals" },
  { word: "car", picture: "🚗", sound: "Vroom, vroom!", category: "transportation" },
  { word: "ball", picture: "⚽", sound: "Bounce, bounce!", category: "everyday" },
  { word: "apple", picture: "🍎", sound: "Crunch, crunch!", category: "food" },
  { word: "banana", picture: "🍌", sound: "Peel it!", category: "food" },
  { word: "sun", picture: "☀️", sound: "Shine, shine!", category: "everyday" },
  { word: "train", picture: "🚂", sound: "Choo-choo!", category: "transportation" },
  { word: "boat", picture: "⛵", sound: "Swish, swish!", category: "transportation" },
  { word: "fish", picture: "🐠", sound: "Blub, blub!", category: "animals" },
  { word: "lion", picture: "🦁", sound: "Roar, roar!", category: "animals" },
  { word: "horse", picture: "🐴", sound: "Neigh, neigh!", category: "animals" },
  { word: "pig", picture: "🐷", sound: "Oink, oink!", category: "animals" },
  { word: "rabbit", picture: "🐰", sound: "Hop, hop!", category: "animals" },
  { word: "bear", picture: "🐻", sound: "Growl, growl!", category: "animals" },
  { word: "turtle", picture: "🐢", sound: "Slow and steady!", category: "animals" },
  { word: "bee", picture: "🐝", sound: "Buzz, buzz!", category: "animals" },
  { word: "chicken", picture: "🐔", sound: "Cluck, cluck!", category: "animals" },
  { word: "monkey", picture: "🐵", sound: "Oo, oo, ah, ah!", category: "animals" },
  { word: "book", picture: "📘", sound: "Flip, flip!", category: "everyday" },
  { word: "cup", picture: "🥤", sound: "Sip, sip!", category: "everyday" },
  { word: "shoe", picture: "👟", sound: "Stomp, stomp!", category: "everyday" },
  { word: "hat", picture: "🎩", sound: "On your head!", category: "everyday" },
  { word: "flower", picture: "🌷", sound: "Smell the flower!", category: "everyday" },
  { word: "kite", picture: "🪁", sound: "Whoosh, whoosh!", category: "everyday" },
  { word: "teddy", picture: "🧸", sound: "Hug, hug!", category: "everyday" },
  { word: "spoon", picture: "🥄", sound: "Scoop, scoop!", category: "everyday" },
  { word: "house", picture: "🏠", sound: "Knock, knock!", category: "everyday" },
  { word: "airplane", picture: "✈️", sound: "Zoom, zoom!", category: "transportation" },
  { word: "bus", picture: "🚌", sound: "Beep, beep!", category: "transportation" },
  { word: "bicycle", picture: "🚲", sound: "Ring, ring!", category: "transportation" },
  { word: "truck", picture: "🚚", sound: "Honk, honk!", category: "transportation" },
  { word: "helicopter", picture: "🚁", sound: "Whir, whir!", category: "transportation" },
  { word: "scooter", picture: "🛴", sound: "Roll, roll!", category: "transportation" },
  { word: "taxi", picture: "🚕", sound: "Beep, beep!", category: "transportation" },
  { word: "orange", picture: "🍊", sound: "Yum, yum!", category: "food" },
  { word: "bread", picture: "🍞", sound: "Crunch, crunch!", category: "food" },
  { word: "cheese", picture: "🧀", sound: "Yum, yum!", category: "food" },
  { word: "egg", picture: "🥚", sound: "Tap, tap!", category: "food" },
  { word: "carrot", picture: "🥕", sound: "Crunch, crunch!", category: "food" },
  { word: "strawberry", picture: "🍓", sound: "Sweet, sweet!", category: "food" },
  { word: "cookie", picture: "🍪", sound: "Munch, munch!", category: "food" },
  { word: "milk", picture: "🥛", sound: "Gulp, gulp!", category: "food" }
];

const categoryNames = {
  animals: "Animals",
  transportation: "Transportation",
  food: "Food",
  everyday: "Everyday things",
  all: "Surprise me!"
};
const giftPalettes = [
  { wrap: "#ff927b", ribbon: "#ffd077", outline: "#ed705e", bow: "#ff9a79" },
  { wrap: "#75c9e8", ribbon: "#fff0a8", outline: "#3196b9", bow: "#a3e4f2" },
  { wrap: "#a994ed", ribbon: "#ffd0a8", outline: "#7863c8", bow: "#c2b5f5" },
  { wrap: "#91cf9a", ribbon: "#ffb8cb", outline: "#559e61", bow: "#b5e3a9" },
  { wrap: "#ffc85f", ribbon: "#8fd7cd", outline: "#d99731", bow: "#ffe08c" }
];
const sessionSize = 10;
const displayDuration = 9000;
const nextButtonDelay = 3000;
const elements = {
  brand: document.querySelector(".brand"),
  welcome: document.querySelector(".welcome-screen"),
  start: document.querySelector(".start-button"),
  categories: document.querySelector(".category-screen"),
  categoryButtons: document.querySelectorAll(".category-button"),
  back: document.querySelector(".back-button"),
  changeCategory: document.querySelector(".change-category-button"),
  gameSession: document.querySelector(".game-session"),
  selectedCategory: document.querySelector(".selected-category"),
  box: document.querySelector(".box-button"),
  discovery: document.querySelector(".discovery"),
  next: document.querySelector(".next-button"),
  picture: document.querySelector(".object-picture"),
  word: document.querySelector(".word-label"),
  sound: document.querySelector(".sound-label-text"),
  finish: document.querySelector(".finish-screen"),
  again: document.querySelector(".again-button"),
  round: document.querySelector("#round-number"),
  progress: document.querySelector(".progress-track"),
  progressFill: document.querySelector(".progress-fill"),
  soundToggle: document.querySelector(".sound-toggle"),
  soundIcon: document.querySelector(".sound-icon"),
  soundLabel: document.querySelector(".sound-toggle .sound-label"),
  voiceSelect: document.querySelector(".voice-select"),
  helper: document.querySelector(".helper-text")
};

let sessionWords = [];
let currentWord = null;
let completedWords = 0;
let soundEnabled = true;
let selectedCategory = "all";
let preferredVoice = null;
let lastGiftPalette = -1;
let revealTimer;
let nextButtonTimer;

function setGiftPalette() {
  let paletteIndex = Math.floor(Math.random() * giftPalettes.length);
  if (giftPalettes.length > 1 && paletteIndex === lastGiftPalette) {
    paletteIndex = (paletteIndex + 1 + Math.floor(Math.random() * (giftPalettes.length - 1))) % giftPalettes.length;
  }
  lastGiftPalette = paletteIndex;

  const palette = giftPalettes[paletteIndex];
  for (const [color, value] of Object.entries(palette)) {
    elements.box.style.setProperty(`--gift-${color}`, value);
  }
}

function cancelRevealAnimation() {
  window.clearTimeout(revealTimer);
  revealTimer = null;
  elements.box.classList.remove("shaking");
  elements.box.disabled = false;
}

function selectSpeechVoice() {
  if (!("speechSynthesis" in window)) return;

  const voices = window.speechSynthesis.getVoices();
  const availableVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith("en") && /\b(zira|mark)\b/i.test(voice.name)
  );
  const selectedVoice = availableVoices.find((voice) => voice.voiceURI === preferredVoice?.voiceURI);
  preferredVoice = selectedVoice ?? availableVoices[0] ?? null;

  elements.voiceSelect.replaceChildren();
  if (availableVoices.length === 0) {
    elements.voiceSelect.add(new Option("Zira and Mark unavailable", ""));
    elements.voiceSelect.disabled = true;
    return;
  }

  availableVoices.forEach((voice) => {
    const label = /\bzira\b/i.test(voice.name) ? "Female" : "Male";
    const option = new Option(label, voice.voiceURI);
    elements.voiceSelect.add(option);
  });
  elements.voiceSelect.disabled = false;
  elements.voiceSelect.value = preferredVoice.voiceURI;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function speakCurrentWord() {
  if (!soundEnabled || !("speechSynthesis" in window) || !currentWord) return;

  window.speechSynthesis.cancel();
  const wordUtterance = new SpeechSynthesisUtterance(currentWord.word);
  wordUtterance.rate = 0.8;
  wordUtterance.pitch = 1.08;
  const soundUtterance = new SpeechSynthesisUtterance(currentWord.sound);
  soundUtterance.rate = 0.8;
  soundUtterance.pitch = 1.12;
  if (preferredVoice) {
    wordUtterance.voice = preferredVoice;
    soundUtterance.voice = preferredVoice;
  }
  wordUtterance.onend = () => {
    if (soundEnabled) window.speechSynthesis.speak(soundUtterance);
  };
  window.speechSynthesis.speak(wordUtterance);
}

function updateProgress() {
  elements.round.textContent = String(Math.min(completedWords + 1, sessionSize));
  elements.progress.setAttribute("aria-valuenow", String(completedWords));
  elements.progressFill.style.width = `${(completedWords / sessionSize) * 100}%`;
}

function showBox() {
  cancelRevealAnimation();
  window.clearTimeout(nextButtonTimer);
  if (currentWord) completedWords += 1;
  currentWord = null;

  if (completedWords >= sessionSize) {
    elements.box.hidden = true;
    elements.discovery.hidden = true;
    elements.next.hidden = true;
    elements.finish.hidden = false;
    elements.helper.hidden = true;
    elements.progress.setAttribute("aria-valuenow", String(sessionSize));
    elements.progressFill.style.width = "100%";
    return;
  }

  elements.discovery.hidden = true;
  elements.next.hidden = true;
  setGiftPalette();
  elements.box.hidden = false;
  elements.helper.textContent = "Listen, look, and say it together!";
  elements.helper.hidden = false;
  updateProgress();
}

function revealWord() {
  if (elements.box.hidden || elements.box.disabled || completedWords >= sessionSize) return;
  currentWord = sessionWords[completedWords];
  elements.box.disabled = true;
  elements.box.classList.add("shaking");

  revealTimer = window.setTimeout(() => {
    cancelRevealAnimation();
    elements.box.hidden = true;
    elements.discovery.hidden = false;
    elements.next.hidden = true;
    elements.picture.textContent = currentWord.picture;
    elements.word.textContent = currentWord.word;
    elements.sound.textContent = currentWord.sound;
    elements.discovery.setAttribute("aria-label", `Tap to hear ${currentWord.word} again`);
    elements.helper.textContent = "Take a moment to say the word together.";
    elements.helper.hidden = false;
    speakCurrentWord();
    nextButtonTimer = window.setTimeout(() => {
      if (currentWord && !elements.discovery.hidden) {
        elements.next.hidden = false;
        elements.helper.textContent = "Tap the picture to hear it again, or press Next!";
      }
    }, nextButtonDelay);
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 600);
}

function showCategories() {
  cancelRevealAnimation();
  window.clearTimeout(nextButtonTimer);
  elements.next.hidden = true;
  elements.welcome.hidden = true;
  elements.gameSession.hidden = true;
  elements.categories.hidden = false;
}

function showWelcome() {
  cancelRevealAnimation();
  window.clearTimeout(nextButtonTimer);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  currentWord = null;
  elements.next.hidden = true;
  elements.categories.hidden = true;
  elements.gameSession.hidden = true;
  elements.welcome.hidden = false;
}

function startSession(category) {
  cancelRevealAnimation();
  window.clearTimeout(nextButtonTimer);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  selectedCategory = category;
  const categoryWords = category === "all" ? words : words.filter((word) => word.category === category);
  sessionWords = shuffle(categoryWords).slice(0, sessionSize);
  completedWords = 0;
  currentWord = null;
  elements.welcome.hidden = true;
  elements.categories.hidden = true;
  elements.gameSession.hidden = false;
  elements.selectedCategory.textContent = categoryNames[category];
  elements.finish.hidden = true;
  elements.discovery.hidden = true;
  elements.next.hidden = true;
  setGiftPalette();
  elements.box.hidden = false;
  elements.helper.textContent = "Listen, look, and say it together!";
  elements.helper.hidden = false;
  updateProgress();
}

elements.start.addEventListener("click", showCategories);
elements.brand.addEventListener("click", (event) => {
  event.preventDefault();
  showWelcome();
});
elements.back.addEventListener("click", showWelcome);
elements.changeCategory.addEventListener("click", showCategories);
elements.categoryButtons.forEach((button) => {
  button.addEventListener("click", () => startSession(button.dataset.category));
});
elements.box.addEventListener("click", revealWord);
elements.discovery.addEventListener("click", () => {
  speakCurrentWord();
});
elements.next.addEventListener("click", () => {
  if (currentWord) showBox();
});
elements.again.addEventListener("click", () => startSession(selectedCategory));
elements.soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  elements.soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  elements.soundToggle.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
  elements.soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
  elements.soundLabel.textContent = soundEnabled ? "Sound on" : "Sound off";
  if (!soundEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
  else if (currentWord) speakCurrentWord();
});

elements.voiceSelect.addEventListener("change", () => {
  const voices = window.speechSynthesis.getVoices();
  preferredVoice = voices.find((voice) => voice.voiceURI === elements.voiceSelect.value) ?? null;
  if (currentWord) speakCurrentWord();
});

if ("speechSynthesis" in window) {
  selectSpeechVoice();
  window.speechSynthesis.addEventListener("voiceschanged", selectSpeechVoice);
} else {
  elements.voiceSelect.replaceChildren(new Option("Speech not supported", ""));
  elements.voiceSelect.disabled = true;
}
