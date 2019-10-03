<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title >ORSoft</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :to="{name: 'home'}" exact
      >
        <span>Home</span>
      </v-btn>
      <v-btn
        :to="{name: 'icons'}"
      >
        <span>Icons</span>
      </v-btn>
      <v-btn
        :to="{name: 'cards'}"
      >
        <span>Cards</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <h3>Menu Vertical</h3>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="avatar_user">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">Omar Ramirez</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  }
};
</script>
