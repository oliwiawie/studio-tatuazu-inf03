// Skrypt obsługujący interaktywne elementy strony (np. powiadomienie lub prosty kalkulator)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Strona Studio Tatuażu została załadowana poprawnie.");
    
    // Przykładowa interakcja wymagana na egzaminie (np. kliknięcie w obrazek)
    const images = document.querySelectorAll(".tatoo-item img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            alert("Wybrałeś wzór: " + img.alt);
        });
    });
});