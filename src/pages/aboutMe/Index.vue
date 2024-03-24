<template>

  <NavigationDrawer>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-textarea v-model="aboutme" label="Digite o texto que irá aparecer no início do aplicativo" rows="30"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-card flat>
            <v-card-actions class="justify-end">
              <v-btn :loading="loading" class="bg-primary" @click="saveAboutMeText()">
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <Alert ref="alert" />
    </v-container>
  </NavigationDrawer>
</template>

<script>
import NavigationDrawer from '../../components/NavigationDrawer.vue'
import axios from 'axios'
import Alert from '../../components/Alert.vue'

export default {
  data: () => ({
    aboutme: '',
    loading: false
  }),

  components: {
    NavigationDrawer,
    Alert
  },

  computed: {
    maxLines() {
      const lineHeigth = 18
      return Math.floor(this.$vuetify.breakpoint.height / lineHeigth) - 2
    }
  },

  methods: {
    async loadAboutMeData() {
      try {
        this.loading = true
        const response = await axios.get('http://127.0.0.1:8000/api/about-me', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.aboutme = response.data.data.description
      } catch (error) {
        this.$refs.alert.show('Erro ao buscar dados sobre mim', 'error');
      } finally {
        this.loading = false
      }
    },

    async saveAboutMeText() {
      try {
        await axios.put('http://127.0.0.1:8000/api/about-me', { description: this.aboutme }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.$refs.alert.show('Texto sobre mim salvo com sucesso!', 'success');
      } catch (error) {
        this.$refs.alert.show('Erro ao salvar texto sobre mim', 'error');
      }
    }
  },

  async created() {
    await this.loadAboutMeData()
  }
}
</script>



<style scoped>

</style>
