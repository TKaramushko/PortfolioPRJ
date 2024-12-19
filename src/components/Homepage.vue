<script setup>

import card from "./card.vue";
import card1 from "./card1.vue";
import card2 from "./card2.vue";
</script>

<template>

    <header>
      <div class="name">
        Timothy Karamushko
      </div>
      <div class="capabilities">
        Graphic Design
        UI/UX Design
        Product Design
      </div>
    </header>
    <section class="design">
      <div class="title">
        Recent Designs
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
*{
  background-color: #343236;
}
template{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #343236;
  header{

    div.name{
      color: #f39c12;
      font-size: 5rem;
    }

  }
}

div.name{
  color: #f39c12;
  font-size: 4rem;
  padding: 2.5rem 1rem 2.5rem 1rem;
}
div.capabilities{
  display: flex;
  color: #f39c12;
  font-size: 1rem;
  padding: 1rem;

}
div.title{
  color: #f39c12;
  font-size: 3rem;
  margin-right: 1.25rem;
  padding: 1rem;
  font-weight: bold;
  text-align: right;
}
Section{
    background-color: #343236;
}
</style>