<script setup lang="ts"></script>

<template>
  <v-row
    ><v-col class="text-h4"><slot name="title" /></v-col
  ></v-row>
  <v-row>
    <v-col><slot /></v-col>
  </v-row>
</template>
