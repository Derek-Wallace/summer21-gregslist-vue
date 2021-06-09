<template>
  <div v-if="house">
    <House :house="house" />
  </div>
  <div class="text-center" v-else>
    loading...
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    const route = useRoute()

    watchEffect(() => {
      housesService.getHouse(route.params.id)
    })
    return {
      house: computed(() => AppState.activeHouse)
    }
  }
}
</script>

<style>

</style>
