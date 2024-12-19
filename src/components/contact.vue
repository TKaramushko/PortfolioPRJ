<script setup>
import { ref } from 'vue';

// Form Data
const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  console.log('Name:', name.value);
  console.log('Email:', email.value);
  console.log('Message:', message.value);

  alert('Message sent successfully!');
};
</script>

<template>
  <section class="contact-form">
    <h2 class="form-title">Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Enter your name"
            class="form-input"
            required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="form-input"
            required
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
            id="message"
            v-model="message"
            placeholder="Write your message"
            class="form-textarea"
            rows="5"
            required
        ></textarea>
      </div>

      <div class="form-group">
        <button type="submit" class="send-button">Send</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.contact-form {
  max-width: 575px;
  margin: auto;
  background-color: #343236;
  color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

.form-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #f39c12;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 1.25rem;
  color: #f5f5f5;
}

.form-input,
.form-textarea {
  width: 565px;
  padding: 10px;
  border: 2px solid #f39c12;
  border-radius: 5px;
  background-color: #343236;
  color: #f5f5f5;
  font-size: 1rem;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #f39c12;
}

.form-textarea {
  resize: vertical;
}

.send-button {
  width: 590px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #343236;
  background-color: #f39c12;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-content: center;
}

.send-button:hover {
  background-color: #cc7403;
}

@media (max-width: 600px) {
  .contact-form {
    max-width: 100%;
    padding: 15px;
  }

  .form-title {
    font-size: 1.75rem;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    font-size: 1rem;
  }

  .form-input,
  .form-textarea {
    font-size: 0.875rem;
    padding: 8px;
  }

  .send-button {
    font-size: 1rem;
    padding: 8px 16px;
    align-content: center;
  }
}
</style>

