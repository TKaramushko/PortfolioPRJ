<template>
  <section class="primary-template">
    <header>

      <div class="top-menu">
        <RouterLink to="/"><img src="/imgs/TKlogo.png" alt="TK Logo"></RouterLink>
        <RouterLink to="/designs">Designs</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </header>

    <article>
      <RouterView/>
    </article>

    <footer>
      <div class="bottom-menu">
        <div class="copyright">
          <a>Tim Karamushko 2024 ©</a>
        </div>

        <div class="back-to-top">
          <a href="#"> Back to top</a>
        </div>

        <div class="social-icons">
          <img src="#" alt="#">
          <img src="#" alt="#">
          <img src="#" alt="#">
          <img src="#" alt="#">
        </div>
      </div>
    </footer>
  </section>
</template>
<style scoped>
section.primary-template {
  font-family: Arial, Helvetica, sans-serif;
  color: #f4f6f3;

  header, footer {
    background-color: #343236;
  }

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    img{
      width: 3rem;
    }


    a {
      padding: 0 1rem 0 1rem;
      margin-bottom: 0.5%;
      color: #f39c12;
      font-size: 1.5rem;
    }
  }
}

article {

}

footer {
  padding: 2%;

  .bottom-menu {
    > div {
      flex-basis: 33%;

      &.back-to-top {
        text-align: center;
      }

      &.social-icons {
        text-align: right;
      }
    }

    display: flex;

    .copyright {
      //justify-content: left;
      //display: flex;
    }

    .back-to-top {
      //justify-content: center;
      //display: flex;
      text-decoration-line: underline;
    }

    .social-icons {
      //justify-content: right;
      //display: flex;
    }
  }
}
@media (max-width: 600px) {
  header, footer {
    background-color: #343236;
  }

  header {
    text-align: center;
    font-size: 5px;
    img{
      width: 1rem;
    }


    a {
      padding: 0 0.125rem 0 0.125rem;
      margin-bottom: 0.25%;
      color: #f39c12;
    }
  }
}
</style>
<script setup lang="ts">
</script>