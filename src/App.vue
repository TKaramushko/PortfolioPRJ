<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
  <section class="primary-template">
    <header>
      <div class="top-menu">
        <RouterLink to="/">
          <img src="/imgs/TKlogo.png" alt="TK Logo" />
        </RouterLink>
        <!-- Hamburger Menu -->
        <button class="hamburger" @click="toggleMenu" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- Navigation Links -->
        <nav :class="{ 'menu-links': true, 'menu-active': isMenuOpen }">
          <RouterLink to="/designs">Designs</RouterLink>
          <RouterLink to="/experience">Experience</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>

    <article>
      <RouterView />
    </article>

    <footer>
      <div class="bottom-menu">
        <div class="copyright">
          <p>Tim Karamushko 2024 ©</p>
        </div>
        <div class="back-to-top">
          <a href="#">Back to top</a>
        </div>
        <div class="social-icons">
          <a href="https://www.figma.com/@0e608ecd_1642_4">
            <img src="/imgs/Figma.SVG" alt="Figma" />
          </a>
          <a href="https://www.instagram.com/timothykdesigns/">
            <img src="/imgs/Instagram.svg" alt="Instagram" />
          </a>
          <a href="https://dribbble.com/TKaramushko">
            <img src="/imgs/Dribbble.svg" alt="Dribbble" />
          </a>
          <a href="https://github.com/TKaramushko">
            <img src="/imgs/Github.svg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/timothy-karamushko-327374200/">
            <img src="/imgs/Linkedin.svg" alt="Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  </section>
</template>



<style scoped>
/* Base Section */
section.primary-template {
  font-family: Arial, Helvetica, sans-serif;
  color: #f4f6f3;
}

/* Header Section */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #343236;
  padding: 1rem 2rem;
  position: relative;
}

.top-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.top-menu img {
  width: 3rem;
}

.menu-links {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.menu-links a {
  color: #f39c12;
  text-decoration: none;
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.menu-links a:hover {
  color: #ffc857;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #f39c12;
  transition: transform 0.3s ease;
}

/* Responsive Header */
@media (max-width: 600px) {
  .hamburger {
    display: flex;
  }

  .menu-links {
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #343236;
    width: 100%;
    padding: 1rem 0;
    transform: translateY(-200%);
    z-index: 9;
    opacity: 0;
    visibility: hidden;
  }

  .menu-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .menu-links a {
    margin: 0.5rem 0;
    text-align: center;
  }
}

/* Footer Section */
footer {
  background-color: #343236;
  padding: 1rem 2rem;
}

.bottom-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.bottom-menu .copyright {
  flex: 1;
  text-align: left;
}

.bottom-menu .back-to-top {
  flex: 1;
  text-align: center;
}

.bottom-menu .back-to-top a {
  text-decoration: underline;
  color: #f39c12;
}

.bottom-menu .social-icons {
  flex: 1;
  text-align: right;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.bottom-menu .social-icons .social-icon {
  width: 24px;
  height: 24px;
  fill: #f39c12;
  color: #f39c12;
  transition: transform 0.3s ease;
}

.bottom-menu .social-icons .social-icon:hover {
  transform: scale(1.2);
}
</style>

