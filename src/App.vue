<script setup lang="ts">
import { ref } from "vue";
import '@mdi/font/css/materialdesignicons.css';
import Footer from './Footer.vue';

// Sample data
const items = [
  {
    title: "Bonnie Brae",
    url: "https://example.com",
    tags: ["America", "San Diego"],
    info: "These are mostly grown in San Diego, California."
  },
  {
    title: "Eureka",
    url: "https://example.com",
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
    url: "https://example.com",
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
          <v-btn icon="mdi-note-edit"></v-btn>
          <v-btn icon="mdi-download"></v-btn>
          <v-btn icon="mdi-delete" @click="removeItem(index)"></v-btn>
          <!-- -> in this list or in local files -->
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
