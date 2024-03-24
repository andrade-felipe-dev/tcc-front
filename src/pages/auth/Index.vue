<template>
  <div id="app">
    <v-app>
      <v-main>
        <div class="container" @keyup.enter="login">
          <v-img src="../../assets/logo-unicentro.png"/>
          <v-text-field v-model="email" type="email" label="E-mail" outlined variant="outlined"/>

          <v-text-field
            label="Senha"
            :type="!showPassword ? 'password' : 'text'"
            required
            append-inner-icon="mdi-eye"
            variant="outlined"
            @click:append-inner="showPassword = !showPassword"
            v-model="password"
          />
          <v-btn flat class="float-right bg-primary" @click="login">Acessar</v-btn>
        </div>
        <Alert ref="alert" />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
import Alert from '../../components/Alert.vue';

export default {
  components: {
    Alert
  },
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/login',
          { email: this.email, password: this.password }
        );

        localStorage.setItem('token', response.data.access_token);
        this.$refs.alert.show('Login bem-sucedido!', 'success');
        this.$router.push('/');
      } catch (error) {
        let message = 'Ocorreu um erro desconhecido.';

        if (error.response && error.response.status === 401) {
          message = 'E-mail ou senha incorretos.';
        } else if (error.response && error.response.data) {
          const apiErrors = error.response.data.errors;
          if (apiErrors) {
            message = apiErrors.map((error) => error.message).join(' ');
          }
        }

        this.$refs.alert.show(message, 'error');
      }
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
