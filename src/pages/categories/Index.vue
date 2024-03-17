<template>
    <NavigationDrawer>
        <DataTable
          :items="items"
          :headers="headers"
          :action-button="actionButton"
          :searchable="false"
        >
          <template v-slot:button>
            <v-dialog
              v-model="showModal"
              width="600"
            >
            <template v-slot:activator="{ props }">
              <v-btn
                flat
                class="mt-3 float-right bg-primary"
                :append-icon="actionButton.icon"
                @click="showModal = !showModal"
              >
                  {{ actionButton.text }}
              </v-btn>
            </template>

            <template v-slot:default="{ isActive}">
              <v-card>
                <v-toolbar
                  color="primary"
                  title="Cadastrar Categoria"
                />
                <v-card-text>
                  <v-container>
                    <v-text-field
                      label="Nome *"
                      variant="outlined"
                    />
                  </v-container>
                </v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn
                    variant="text"
                    @click="showModal = !showModal"
                  >
                  Cancelar
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    class="bg-primary"
                    flat
                    @click="store('salvo')"
                  >
                  Salvar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </template>

      </DataTable>


    </NavigationDrawer>
</template>



<script>
import NavigationDrawer from '../../components/NavigationDrawer.vue'
import DataTable from '../../components/DataTable.vue';

export default {
    components: [
        NavigationDrawer,
        DataTable
    ],

    methods: {
      store(item) {
        window.alert(item)
      }
    },

    data: () => ({
        showModal: false,
        actionButton: {
            icon: 'mdi-plus',
            text: 'Cadastrar'
        },
        headers: [
            { key: 'id', title: 'Id.' },
            { key: 'name', title: 'Categoria' },
        ],
        items: [
            {
                'id': 1,
                'name': 'Categoria 1',

            },
            {
                'id': 2,
                'name': 'Categoria 2',

            },
            {
                'id': 3,
                'name': 'Categoria 3',

            },
            {
                'id': 4,
                'name': 'Categoria 4',

            },
            {
                'id': 5,
                'name': 'Categoria 5',
            },
        ]
    }),
    components: { DataTable }
}
</script>
