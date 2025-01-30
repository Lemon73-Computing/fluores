<template>
  <v-footer>
    <v-row justify="center">
      <v-col align="center">
        <v-btn prepend-icon="mdi-home" color="primary" variant="outlined">Home</v-btn>
        <v-btn prepend-icon="mdi-cog" color="primary" variant="outlined">Config</v-btn>

        <v-btn icon="mdi-playlist-plus" color="indigo" variant="outlined"></v-btn><!-- Add new resouces -->
        
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
</template>

<script>
export default {
  name: 'Footer',
  template: 'Footer'
}
</script>
