<template>
  <div class="screen">
    <div class="global-content-screen">
      <button class="screen-close" @click="emit('screen-close')">X</button>

      <div class="container screen-container">
        <div class="content">
          !!! INFOS !!!
          <hr />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem commodi iste
          iure molestiae nisi? Accusamus animi architecto aut blanditiis cupiditate deserunt
          dignissimos eum expedita, facilis inventore ipsam, laboriosam maxime modi neque repellat
          reprehenderit similique sit temporibus velit voluptatibus. Accusantium ad architecto
          assumenda at, beatae eaque eius est excepturi itaque, labore necessitatibus quaerat
          quibusdam quod recusandae repellat, repellendus sequi tempora velit veniam veritatis!
          Aperiam assumenda autem commodi dicta eligendi eos esse exercitationem fugit id in iure
          maiores molestiae nostrum praesentium quam quia rem sapiente soluta suscipit tempora, ut
          vel voluptate. Ad aliquam aspernatur deserunt distinctio est id illo iure nisi odio
          placeat! Dolorem, molestiae nesciunt? Aliquid amet culpa dolorem earum error illum itaque
          libero magnam nulla pariatur quos, repellendus reprehenderit sit, tempora ullam? A
          accusamus ea eius est iusto, saepe similique sint vel voluptatum? A asperiores, aut autem
          dolores doloribus ducimus ea fuga, in incidunt numquam possimus reiciendis veniam
          veritatis voluptates voluptatibus! A accusantium adipisci aliquid amet aperiam aut
          consequatur cupiditate deserunt dicta dolores ea eius eos, error eum expedita impedit
          iusto laboriosam molestiae nam natus necessitatibus neque nostrum nulla obcaecati odio,
          odit praesentium, provident quaerat qui quidem reiciendis tempora temporibus unde velit
          veritatis voluptatem voluptatibus? Aut modi, odit! Quasi? end line!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['screen-close'])
</script>

<style lang="scss" scoped>
  .screen {
    position: relative;

    &-close {
      position: absolute;
      top: 46px;
      right: 16px;
    }
    &-container {
      padding-block: 16px;

      .content {
        margin-top: 20px;
        margin-bottom: 20px;
        height: calc(100vh - 100px);
        overflow-y: auto;
      }
    }
  }
</style>
