<template>
    <div>
        <NavigationDrawer>
            <DataTable
              show-actions
              :options="options"
              :items="items"
              :headers="headers"
              :searchable="false"
              :total-items="options.totalItems"
              :loading="loading"
              @click:check="aproveUser"
              @click:reprove="reproveUser"
            />
        </NavigationDrawer>
    </div>
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
      aproveUser(item) {
        window.alert(item.name)
      },

      reproveUser(item) {
        window.alert(item)
      }
    },

    data: () => ({
      headers: [
        { key: 'status', title: 'Status' },
        { key: 'name', title: 'Razão Social' },
        { key: 'category', title: 'Categoria' },
        { key: 'road', title: 'Rua' },
        { key: 'neighboarhood', title: 'Bairro' },
        { key: 'number', title: 'Número' },
        { key: 'action', title: 'Aprovar'}
      ],
      items: [],
      options: {
        page: 1,
        itemsPerPage: 10,
        totalItems: 0,
      },
      loading: false
    }),
    components: { DataTable }
}
</script>
