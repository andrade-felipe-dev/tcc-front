<template>
    <div>
        <NavigationDrawer>
          <v-container fluid>
            <v-row justify="center">
              <v-col v-for="item in contents" :key="item.id" cols="12" sm="6" md="4">
                <v-card class="mx-auto" max-width="344">
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-text>{{ item.description }}</v-card-text>
                  <v-card-actions class="d-flex justify-space-between">
                    <v-btn text @click="decline(item)">
                      Recusar
                    </v-btn>
                    <v-btn flat color="primary" @click="save(item)">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </NavigationDrawer>
    </div>
</template>

<script>
import NavigationDrawer from '../../components/NavigationDrawer.vue'

export default {
    components: [
        NavigationDrawer
    ],

    data: () => ({
        contents: [
          {
            "id": 1,
            "title": "Exemplo 1",
            "description": "Esta é a descrição do Exemplo 1."
          },
          {
            "id": 2,
            "title": "Exemplo 2",
            "description": "Esta é a descrição do Exemplo 2."
          },
          {
            "id": 3,
            "title": "Exemplo 3",
            "description": "Esta é a descrição do Exemplo 3."
          },
          {
            "id": 4,
            "title": "Exemplo 4",
            "description": "Esta é a descrição do Exemplo 4."
          },
          {
            "id": 5,
            "title": "Exemplo 5",
            "description": "Esta é a descrição do Exemplo 5."
          },
          {
            "id": 6,
            "title": "Exemplo 6",
            "description": "Esta é a descrição do Exemplo 6."
          },
        ]
    }),

    methods: {
      save(item) {
        window.alert(item.description) 
      },

      decline(item) {
        window.alert(item.description)
      }
    }
}
</script>