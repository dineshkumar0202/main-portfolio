const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // Use false for 24-hour format
    });
  };
  

  // Scroll animation (fade-in effect)
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".scroll-fade");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});




useEffect(() => {
  const timeout = setTimeout(() => {
    setAnimatedSkills(initialBarSkills);
  }, 100);
  return () => clearTimeout(timeout);
}, []);
