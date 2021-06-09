<template>
  <div class="col-lg-4 listing my-3">
    <div class="card">
      <div class="card-img">
        <img :src="house.img" class="img-fluid">
      </div>
      <div class="card-body">
        <h5>${{ house.price }}</h5>
        <h5>{{ house.levels }} levels</h5>
        <h5>{{ house.bedrooms }} bedrooms</h5>
        <h5>{{ house.bathrooms }} bathrooms</h5>
        <button class="btn btn-warning btn-block" @click="editHouse">
          EDIT HOUSE
        </button>
        <button class="btn btn-danger btn-block" @click="deleteHouse">
          DELETE HOUSE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    house: { type: Object, required: true }
  },
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>

</style>
