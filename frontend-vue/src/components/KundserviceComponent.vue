<script setup>
import {} from 'vue'
</script>

<template>
  <div class="kundservice">
    <div class="kundservice-header">
      <h1>Välkommen till Kundservice</h1>
      <p>
        Vi är här för att hjälpa dig! Utforska våra alternativ nedan för att hitta svar på dina
        frågor.
      </p>
    </div>

    <div class="kundservice-content">
      <!-- Sektion för Vanliga Frågor -->
      <section class="faq-section">
        <h2>Vanliga Frågor</h2>
        <div class="faq-list">
          <div class="faq-item">
            <img src="../../img/faq.png" alt="FAQ" />
            <div class="faq-text">
              <h3>Hur spårar jag min beställning?</h3>
              <p>
                Logga in på ditt konto och gå till "Mina beställningar" för att spåra din leverans.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <img src="../../img/faq.png" alt="FAQ" />
            <div class="faq-text">
              <h3>Kan jag returnera en produkt?</h3>
              <p>
                Ja, du kan returnera produkter inom 30 dagar efter leverans. Läs mer om vår
                returpolicy här.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sektion för Kontakt -->
      <section class="contact-section">
        <h2>Kontakta Oss</h2>
        <div class="contact-options">
          <div class="contact-option">
            <img src="../../img/chat.png" alt="Chat" />
            <h3>Chatta med oss</h3>
            <p>Få snabb hjälp direkt från vår kundservice via chatt.</p>
          </div>
          <div class="contact-option">
            <img src="../../img/email.png" alt="Email" />
            <h3>Skicka ett E-post</h3>
            <p>Kontakta oss på support@snusjakt.se och vi svarar inom 24 timmar.</p>
          </div>
          <div class="contact-option">
            <img src="../../img/phone.png" alt="Phone" />
            <h3>Ring oss</h3>
            <p>Vårt team finns tillgängligt på 08-123 456 78 mellan 09:00 och 17:00.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.kundservice {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
}

.kundservice-header {
  text-align: center;
  margin-bottom: 2rem;
}

.kundservice-header h1 {
  font-size: 2.5rem;
  color: #0056b3;
}

.kundservice-header p {
  font-size: 1.2rem;
  color: #333;
}

.faq-section {
  margin-bottom: 3rem;
}

.faq-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6600;
}

.faq-list {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.faq-item {
  flex: 1 1 calc(50% - 2rem);
  background-color: #ffffff;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
}

.faq-item img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
}

.faq-text h3 {
  font-size: 1.5rem;
  margin: 0;
  color: #0056b3;
}

.faq-text p {
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0 0 0;
}

.contact-section {
  margin-bottom: 3rem;
}

.contact-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff6600;
}

.contact-options {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-option {
  flex: 1 1 calc(33.333% - 2rem);
  text-align: center;
  background-color: #ffffff;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
}

.contact-option img {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
}

.contact-option h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0056b3;
}

.contact-option p {
  font-size: 1rem;
  color: #555;
}
</style>
