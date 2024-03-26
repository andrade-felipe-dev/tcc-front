<template>
  <v-dialog v-model="modal" width="600">
    <v-card>
      <v-toolbar color="primary" :title="title" />
      <slot />

      <v-card-actions class="justify-end">
        <v-btn variant="text" @click="$emit('cancel')">
          Cancelar
        </v-btn>
        <v-btn variant="outlined" class="bg-primary" flat @click="$emit('save')">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      modal: false,
    };
  },
  watch: {
    showModal(value) {
      this.modal = value;
    },
  },
};
</script>
