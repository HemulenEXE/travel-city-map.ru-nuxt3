<template>
  <div class="home">
    <first-screen v-show="initialProject" class="home__first-screen" />
    <map-screen />

    <div :class="['screen-slides', { 'screens-shown': !!screenType }]">
      <category-screen
        :class="['home-screen', { 'open-screen': screenType === 'category' }]"
        @screen-close="screenClose()"
      />
      <planing-screen
        :class="['home-screen', { 'open-screen': screenType === 'planing' }]"
        @screen-close="screenClose()"
      />
      <infos-screen
        :class="['home-screen', { 'open-screen': screenType === 'infos' }]"
        @screen-close="screenClose()"
      />
    </div>

    <menu-bar class="menu-bar" @set-screen-type="screenType = $event" />
  </div>
</template>

<script setup>
  import FirstScreen from '~/components/FirstScreen/Index.vue'
  import MapScreen from '~/components/MapScreen/Index.vue'
  import InfosScreen from '~/components/InfosScreen/Index.vue'
  import { useSettingsStore } from '~/stores/settings'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'

  const settingsStore = useSettingsStore()
  const { initialProject } = storeToRefs(settingsStore)

  const screenType = ref('')

  const screenClose = () => {
    screenType.value = ''
  }
</script>

<style lang="scss" scoped>
  @import 'assets/scss/mixins.scss';

  .home {
    position: relative;
    min-width: 360px;
    height: 100vh;
    overflow: hidden;

    .screen-slides {
      position: absolute;
      @include background-opacity($black-color, 0.8);
      width: 100%;
      height: calc(100% - 30px);
      top: 0;
      visibility: hidden;
      opacity: 0;
      transition:
        all 0.4s,
        opacity 0.2s;

      &.screens-shown {
        visibility: visible;
        opacity: 1;

        .home-screen.open-screen {
          top: 0;
          z-index: 1;
        }
      }
    }

    &-screen {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 100%;
      transition: 0.4s;
      z-index: 0;
    }

    &__first-screen {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .menu-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
