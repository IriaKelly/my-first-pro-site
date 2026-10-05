// 1. Find the span with id="year" for inside HTML
const yearSpan = document.getElementById('year');

// 2. Security - if could not be seen, avoid code crash (PRO way)
if (yearSpan) {
    // 3. Go and collect current year from user device
    const currentYear = new Date().getFullYear(); // e.g. 2026
    // 4. Put it inside that span
    yearSpan.textContent = currentYear;
}