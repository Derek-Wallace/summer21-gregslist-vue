<template>
  <div class="d-flex full-page">
    <div class="bg-dark sidebar text-white">
      <div class="text-center my-4">
        <router-link :to="{name: 'Home'}" title="Home">
          <img src="./assets/img/cw-logo.png" alt="gregslist logo" class="w-75">
        </router-link>

        <div v-if="user.isAuthenticated">
          <router-link :to="{name: 'Profile', params: { id: account.id }}">
            <img :src="account.picture" alt="user avatar" height="150" class="rounded-circle shadow mt-2">
          </router-link>
          <h3>{{ account.name }}</h3>
          <button class="btn btn-outline-danger" @click="logout">
            Logout
          </button>
        </div>
        <div v-else>
          <button class="btn btn-outline-success" @click="login">
            login
          </button>
        </div>

        <div class="my-5">
          <router-link :to="{name: 'Cars'}">
            Cars
          </router-link>
        </div>
        <div class="my-5">
          <router-link :to="{name: 'Houses'}">
            Houses
          </router-link>
        </div>
      </div>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import { AuthService } from './services/AuthService'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      login() {
        AuthService.loginWithRedirect()
      },
      logout() {
        AuthService.logout()
      }
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.full-page{
  min-height: 100vh;

  .sidebar{
    max-width: 350px;
  }

}

</style>
