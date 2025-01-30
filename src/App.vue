<script setup lang="ts">
import { ref } from "vue";
import '@mdi/font/css/materialdesignicons.css';
import Footer from './components/Footer.vue';

// Sample data
const items = [
  {
    title: "Bonnie Brae",
    url: "https://en.wikipedia.org/wiki/Bonnie_Brae_Lemon",
    tags: ["America", "San Diego"],
    info: "These are mostly grown in San Diego, California."
  },
  {
    title: "Eureka",
    url: "https://citrusaustralia.com.au/wp-content/uploads/Eureka.pdf",
    tags: ["Italy"],
    info: "Four Seasons Lemon"
  },
  {
    title: "Femminello St. Teresa",
    url: "https://example.com",
    tags: ["Italy"],
    info: "It generally produces juice."
  },
  {
    title: "Yen Ben",
    url: "https://citrusaustralia.com.au/wp-content/uploads/Yen-Ben.pdf",
    tags: ["Australia"],
    info: "Australien Lemon"
  }
]

// Remove an item from the list
const renderKey = ref(0)
function removeItem(this: any, index: number) {
  this.items.splice(index, 1);
  renderKey.value++; // Re-render the list
  console.log(items);
}
</script>

<template>
  <Footer/>
  <v-app>
    <main :key="renderKey">
      <v-card
      class="mx-auto my-8"
      elevation="16"
      max-width="344"
      v-for="(item, index) in items"
      >
        <v-card-item>
          <v-card-title>
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.url }}
          </v-card-subtitle>

          <v-card-subtitle>
            <span v-for="tag in item.tags">{{ tag }}, </span>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          {{ item.info }}
        </v-card-text>

        <v-card-actions>
          <v-btn icon="mdi-folder-edit" color="green-lighten-2"></v-btn>
          <v-btn icon="mdi-folder-arrow-down" color="blue-lighten-2"></v-btn>
          <v-btn icon="mdi-folder-remove" color="red-lighten-2"></v-btn><!-- Remove this item on my storage -->
          <v-btn icon="mdi-playlist-remove" color="red-lighten-2" @click="removeItem(index)"></v-btn><!-- Remove this item on this list -->
        </v-card-actions>
      </v-card>
    </main>
  </v-app>
</template>

<style>
::selection {
  background-color: #ff649f;
  color: #f6f6f6;
}
</style>
