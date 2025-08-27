document.getElementById("learnMoreBtn").addEventListener("click", () => {
    alert("FastLaunch helps you build and deploy MVPs in days, not months!");
});

document.getElementById("signUpBtn").addEventListener("click", () => {
    window.location.href = "https://example.com/signup";
});


document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert(`Thanks for contacting us, ${name}! We’ll reply to ${email} soon.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});