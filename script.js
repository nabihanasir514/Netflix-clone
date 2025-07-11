// Handle Get Started button
function handleStart() {
  const email = document.getElementById('emailInput');
  if (!email || !email.value.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Welcome to Netflix, ${email.value}! 🎉`);

  // Optional: redirect to Netflix signup
  setTimeout(() => {
    window.location.href = 'https://www.netflix.com/signup';
  }, 2000);
}

// Run once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const emailField = document.getElementById('emailInput');
  if (emailField) {
    emailField.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        handleStart();
      }
    });
  }

  const getStartedBtn = document.querySelector('.btn-red');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', handleStart);
  }

  const micBtn = document.querySelector('.mic-btn');
  if (micBtn) {
    micBtn.addEventListener('click', startVoiceSearch);
  }
});

// Voice Search Feature
function startVoiceSearch() {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support Speech Recognition.');
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function (e) {
    const transcript = e.results[0][0].transcript;
    document.getElementById("searchBox").value = transcript;
  };

  recognition.onerror = function (e) {
    alert('Voice recognition error: ' + e.error);
  };

  recognition.start();
}
function toggleFaq(element) {
  const faqbox = element.parentElement;
  faqbox.classList.toggle('open');
}
