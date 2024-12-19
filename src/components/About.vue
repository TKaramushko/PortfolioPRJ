<script setup>

</script>

<template>
  <div class="title">
    About
  </div>
  <section>
  <img src="/imgs/TkDino.jpg" alt="cat in hat">
  <div class="text">
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ornare velit. Fusce mollis lobortis nisl vel malesuada. Donec in augue sed quam efficitur egestas quis sed ipsum. Fusce lacus nulla, vestibulum vitae ultrices vitae, sollicitudin vel metus. Pellentesque dignissim nec nibh at aliquam. Cras tincidunt lorem risus, id condimentum magna aliquam id. Etiam et mollis tortor. Donec nec porttitor diam, sed accumsan risus.
      In ac porttitor tellus. Cras efficitur posuere volutpat. Etiam non dolor pellentesque, malesuada leo eu, suscipit odio. Nulla volutpat, massa et bibendum tincidunt, tellus nulla efficitur justo, vel pellentesque enim nunc sed eros. Nunc sed molestie augue. Pellentesque non augue at turpis pharetra tincidunt sed vitae odio. In hac habitasse platea dictumst. Mauris eget felis ut turpis sodales convallis at tempus orci. Proin sagittis porttitor sem, sed condimentum odio facilisis ut. Aliquam aliquet lacus at elit venenatis elementum non lobortis tellus. Nulla nec purus a sapien aliquam pulvinar.
      Quisque lobortis sem tortor, ac lacinia dui viverra at. Maecenas sed dignissim lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sed ipsum quis leo lacinia interdum vitae at leo. Sed pellentesque felis quis dignissim maximus. In hac habitasse platea dictumst. Morbi at nisl odio.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ornare velit. Fusce mollis lobortis nisl vel malesuada. Donec in augue sed quam efficitur egestas quis sed ipsum. Fusce lacus nulla, vestibulum vitae ultrices vitae, sollicitudin vel metus. Pellentesque dignissim nec nibh at aliquam. Cras tincidunt lorem risus, id condimentum magna aliquam id. Etiam et mollis tortor. Donec nec porttitor diam, sed accumsan risus.
      In ac porttitor tellus. Cras efficitur posuere volutpat. Etiam non dolor pellentesque, malesuada leo eu, suscipit odio. Nulla volutpat, massa et bibendum tincidunt, tellus nulla efficitur justo, vel pellentesque enim nunc sed eros. Nunc sed molestie augue. Pellentesque non augue at turpis pharetra tincidunt sed vitae odio. In hac habitasse platea dictumst. Mauris eget felis ut turpis sodales convallis at tempus orci. Proin sagittis porttitor sem, sed condimentum odio facilisis ut. Aliquam aliquet lacus at elit venenatis elementum non lobortis tellus. Nulla nec purus a sapien aliquam pulvinar.
    </div>
  </div>
  </section>
</template>

<style scoped>
*{
  background-color: #343236;

}
div.title{
  color: #f39c12;
  font-size: 3rem;
  margin-right: 1.25rem;
  font-weight: bold;
  text-align: right;


}
section {
  background-color: #343236;

  display: flex;
  justify-content: center;
  align-items: center;
  div.text {
    align-items: center;
    text-align:justify;
    align-content: center;
    width: 40rem;
    margin: 1rem;
  }

  img{
    align-self: flex-start;
    width: 10rem;
    margin-top:1rem;
  }
}
@media (max-width: 600px) {
  section {
    background-color: #343236;

    display: flex;
    justify-content: center;
    align-items: center;
    div.text {
      align-items: center;
      text-align:justify;
      align-content: center;
      width: 20rem;
      margin: 0.25rem;
    }
    img{
      align-self: flex-start;
      width: 5rem;
      margin-top: 0.25rem;
    }
  }
}
</style>