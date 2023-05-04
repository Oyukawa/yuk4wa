<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn color="success">This is about button</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col> <h1>This is about page</h1> </v-col>
    </v-row>
  </v-container>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
