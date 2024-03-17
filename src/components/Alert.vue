<template>
  <v-alert
    v-model="visible"
    :type="type"
    dismissible
    transition="scale-transition"
    class="position-fixed alert-position"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      type: 'success',
    };
  },
  methods: {
    show(message, type = 'success') {
      this.message = message;
      this.type = type;
      this.visible = true;

      setTimeout(() => {
        this.close();
      }, 2000); // fecha o alerta após 2 segundos
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.alert-position {
  top: 0;
  right: 0;
  margin: 10px;
  z-index: 2000;
}
</style>
