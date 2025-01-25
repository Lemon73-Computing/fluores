<script setup lang="ts">
import { ref } from "vue";
import '@mdi/font/css/materialdesignicons.css';

// const greetMsg = ref("");
// const name = ref("");
// 
// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//   greetMsg.value = await invoke("greet", { name: name.value });
// }

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

const renderKey = ref(0)
function removeItem(index: number) {
  (this as any).items.splice(index, 1);
  renderKey.value++; // Re-render the list
  console.log(items);
}

</script>

<template>
  <v-footer>
    <v-row justify="center">
      <v-col align="center">
        <v-btn prepend-icon="mdi-home" variant="outlined">Home</v-btn>
        <v-btn prepend-icon="mdi-cog" variant="outlined">Config</v-btn>

        <v-btn icon="mdi-plus" variant="outlined"></v-btn><!-- Add new resouces -->
        
        <!--
        <v-btn prepend-icon="mdi-check-all">Select all resources</v-btn>
        <v-btn prepend-icon="mdi-file-search-outline">Search resources</v-btn>
        <v-btn>v Download selected resources</v-btn>
        <v-btn>x Remove selected resources</v-btn>
        <v-btn>/ Diselect all resources</v-btn>
        -->
      </v-col>
    </v-row>
  </v-footer>
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

  <!-- 
  <main class="container">
    <h1>Welcome to Tauri + Vue</h1>

    <div class="row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <form class="row" @submit.prevent="greet">
      <input id="greet-input" v-model="name" placeholder="Enter a name..." />
      <button type="submit">Greet</button>
    </form>
    <p>{{ greetMsg }}</p>
  </main>
  -->
</template>

<style scoped>
/*
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
*/

</style>
<style>
::selection {
  background-color: #ff649f;
  color: #f6f6f6;
}

/*
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #0f0f0f;
  background-color: #f6f6f6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.container {
  margin: 0;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #24c8db);
}

.row {
  display: flex;
  justify-content: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  text-align: center;
}

input,
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
}

button:hover {
  border-color: #396cd8;
}
button:active {
  border-color: #396cd8;
  background-color: #e8e8e8;
}

input,
button {
  outline: none;
}

#greet-input {
  margin-right: 5px;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: #f6f6f6;
    background-color: #2f2f2f;
  }

  a:hover {
    color: #24c8db;
  }

  input,
  button {
    color: #ffffff;
    background-color: #0f0f0f98;
  }
  button:active {
    background-color: #0f0f0f69;
  }
}

*/
</style>
