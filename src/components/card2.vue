<script setup>
</script>

<template>
  <section class="component">

    <div class="image-section">
      <img src="/imgs/cragrock1.png" alt="Climbing App Figma Prototype" class="responsive-image" />
    </div>


    <div class="text-section">
      <h2 class="main-title">Crag Collective</h2>
      <h3 class="subtitle">Figma Prototype</h3>
    </div>
  </section>
</template>

<style scoped>
.component {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: #343236;
  color: #f5f5f5;
  padding: 20px;
  align-items: center;
  justify-items: center;
}

.image-section {
  grid-column: span 1;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.text-section {
  text-align: center;
  grid-column: span 1;
}

.main-title {
  color: #f39c12;
  font-size: 1.5rem;
}

.subtitle {
  color: #f39c12;
  font-size: 1.2rem;
}

/* Responsive Styles for Small Screens */
@media (max-width: 600px) {
  .component {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .image-section {
    order: 1;
  }

  .text-section {
    order: 2;
  }

  .main-title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }
}
</style>