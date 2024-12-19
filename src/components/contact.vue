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

      <!-- Email Field -->
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
  font-size: 1.2rem;
  color: #f5f5f5;
}


.form-input {
  width: 565px;
  padding:10px 5px 10px 5px;
  border: 2px solid #f39c12;
  border-radius: 5px;
  background-color: #343236;
  color: #f5f5f5;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #f39c12;
}


.form-textarea {
  width: calc(100% - 20px); /* Maximum width */
  max-width: 575px; /* Explicit maximum width */
  padding: 10px;
  border: 2px solid #f39c12;
  border-radius: 5px;
  background-color: #343236;
  color: #f5f5f5;
  font-size: 1rem;
  resize: vertical; /* Allow vertical resizing */
}

.form-textarea:focus {
  outline: none;
  border-color: #f39c12;
}


.send-button {
  width: 580px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #343236;
  background-color: #f39c12;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #cc7403;
}
</style>
