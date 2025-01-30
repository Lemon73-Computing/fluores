<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        icon="mdi-playlist-plus"
        color="indigo"
        variant="outlined"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card
        prepend-icon="mdi-playlist-plus"
        title="Add new resource"
      >
        <v-card-text>
          <v-text-field label="Resource name*" required></v-text-field>
          <v-text-field label="URL* (e.g. https://example.com/xxx.zip)" required></v-text-field>
          <v-text-field label="Tags (e.g. Musics, French)" required></v-text-field>
          <v-text-field label="Summary" required></v-text-field>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="isActive.value = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'NewResource',
  template: 'NewResource'
}
</script>
