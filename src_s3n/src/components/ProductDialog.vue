<script setup lang="ts">
import { reactive, watch } from 'vue';

const props = defineProps<{
  isOpening: boolean;
}>();

const emit = defineEmits(['close']);
const onClose = (isOpen: boolean) => {
  state.isOpening = isOpen;
  emit('close', isOpen);
};

const state = reactive({
  isOpening: false
});

watch(
  () => props.isOpening,
  () => (state.isOpening = props.isOpening)
);
</script>
<template>
  <div class="text-center">
    <v-dialog v-if="props.isOpening" v-model="state.isOpening" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="onClose(false)">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style scoped></style>
