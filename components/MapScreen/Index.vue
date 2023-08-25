<template>
  <div class="map-screen">
    <div id="map" style="min-width: 360px; height: 100vh"></div>
  </div>
</template>

<script setup lang="ts">
  if (!process.server) {
    window.ymaps.ready(init)

    function init() {
      const myMap = new window.ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 9
      })

      // Создадим экземпляр элемента управления «поиск по карте»
      // с установленной опцией провайдера данных для поиска по организациям.
      let searchControl = new window.ymaps.control.SearchControl({
        options: {
          provider: 'yandex#search'
        }
      })

      myMap.controls.add(searchControl)

      // Программно выполним поиск определённых кафе в текущей
      // прямоугольной области карты.
      searchControl.search('Шоколадница')
    }
  }
</script>

<style lang="scss" scoped>
  .map-screen {
    position: relative;
  }
</style>
