<template>
  <div id="app">
    <v-app>
      <v-content>
        <div class="container">
          <v-img src="../../assets/logo-unicentro.png"/>
          <v-text-field type="email" label="E-mail" outlined variant="outlined"/>
          
          <v-text-field 
            label="Senha"
            :type="!showPassword ? 'password' : 'text'"
            required
            append-inner-icon="mdi-eye"
            variant="outlined"
            @click:append-inner="showPassword = !showPassword"
          />
          <v-btn flat class="float-right bg-primary" @click="login">Acessar</v-btn>
        </div>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      errors: [],
      showPassword: false
    };
  },

  methods: {
    login () {
      this.$router.push('/')
    }
  } 
}
</script>


<style scoped>
.container {
  max-width: 30%;
  margin: 20px auto;
}
</style>