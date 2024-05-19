<script setup lang="ts"></script>

<template>
  <v-card variant="outlined" width="500">
    <v-card-title><slot name="title" /></v-card-title>
    <v-card-subtitle><slot name="subtitle" /></v-card-subtitle>
    <v-card-text>
      <slot name="form" />
    </v-card-text>
    <v-card-actions class="pt-0 pa-4 flex-column">
      <slot name="buttons" />
    </v-card-actions>
  </v-card>
</template>
