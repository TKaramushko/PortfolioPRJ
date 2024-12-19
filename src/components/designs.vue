<script setup>

import card from "./card.vue";
import card1 from "./card1.vue";
import card2 from "./card2.vue";

</script>

<template>

  <section class="design">
    <div class="title">
      Designs
    </div>
    <div class="card">
      <card
          title="Green tag with logo"
          description="Brand Re-Design"
          date="2024"
      />
      <card1
          title="Brochure that doubles as ID"
          description="Brand Design"
          date="2024"
      />
      <card2
          title="Climbing App Figma Prototype"
          description="Figma Protoype"
          date="2024"
      />

    </div>
  </section>
</template>

<style scoped>
template{
  font-family: Arial, Helvetica, sans-serif;
  background-color: #343236;


}
div.title{
  padding: 2rem 0 1rem 0;
  color: #f39c12;
  font-size: 3rem;
  margin-right: 1.25rem;
  font-weight: bold;
  text-align: right;
}
Section{
  background-color: #343236;
}
</style>