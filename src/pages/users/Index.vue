<template>
    <div>
        <NavigationDrawer>
            <DataTable 
              :items="items" 
              :headers="headers"
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
        items: [
            {
                'status': 'Pendente',
                "name": "Empresa Exemplo Ltda",
                "category": "Comércio varejista de produtos alimentícios",
                "road": "Rua José Antônio Coelho",
                "neighboarhood": "Centro",
                "number": "123"
            },
            {
                'status': 'Pendente',
                "name": "Padaria Pão da Hora",
                "category": "Padaria e confeitaria",
                "road": "Avenida Brasil",
                "neighboarhood": "Jardim Europa",
                "number": "250"
            },
            {
                'status': 'Aprovado',
                "name": "Farmácia Vital",
                "category": "Farmácias",
                "road": "Rua das Flores",
                "neighboarhood": "Vila Nova",
                "number": "50"
            },
            {
                'status': 'Aprovado',
                "name": "Supermercado ABC",
                "category": "Supermercados",
                "road": "Rua da Paz",
                "neighboarhood": "Jardim das Palmeiras",
                "number": "1000"
            },
            {
                'status': 'Aprovado',
                "name": "Posto de Gasolina Ipiranga",
                "category": "Postos de gasolina",
                "road": "Avenida Getúlio Vargas",
                "neighboarhood": "Centro",
                "number": "777"
            },
            {
                'status': 'Aprovado',
                "name": "Empresa Exemplo Ltda",
                "category": "Comércio varejista de produtos alimentícios",
                "road": "Rua José Antônio Coelho",
                "neighboarhood": "Centro",
                "number": "123"
            },
            {
                'status': 'Aprovado',
                "name": "Padaria Pão da Hora",
                "category": "Padaria e confeitaria",
                "road": "Avenida Brasil",
                "neighboarhood": "Jardim Europa",
                "number": "250"
            },
            {
                'status': 'Aprovado',
                "name": "Farmácia Vital",
                "category": "Farmácias",
                "road": "Rua das Flores",
                "neighboarhood": "Vila Nova",
                "number": "50"
            },
            {
                'status': 'Aprovado',
                "name": "Supermercado ABC",
                "category": "Supermercados",
                "road": "Rua da Paz",
                "neighboarhood": "Jardim das Palmeiras",
                "number": "1000"
            },
            {
                'status': 'Aprovado',
                "name": "Posto de Gasolina Ipiranga",
                "category": "Postos de gasolina",
                "road": "Avenida Getúlio Vargas",
                "neighboarhood": "Centro",
                "number": "777"
            },
            {
                'status': 'Aprovado',
                "name": "Empresa Exemplo Ltda",
                "category": "Comércio varejista de produtos alimentícios",
                "road": "Rua José Antônio Coelho",
                "neighboarhood": "Centro",
                "number": "123"
            },
            {
                'status': 'Aprovado',
                "name": "Padaria Pão da Hora",
                "category": "Padaria e confeitaria",
                "road": "Avenida Brasil",
                "neighboarhood": "Jardim Europa",
                "number": "250"
            },
            {
                'status': 'Aprovado',
                "name": "Farmácia Vital",
                "category": "Farmácias",
                "road": "Rua das Flores",
                "neighboarhood": "Vila Nova",
                "number": "50"
            },
            {
                'status': 'Aprovado',
                "name": "Supermercado ABC",
                "category": "Supermercados",
                "road": "Rua da Paz",
                "neighboarhood": "Jardim das Palmeiras",
                "number": "1000"
            },
            {
                'status': 'Aprovado',
                "name": "Posto de Gasolina Ipiranga",
                "category": "Postos de gasolina",
                "road": "Avenida Getúlio Vargas",
                "neighboarhood": "Centro",
                "number": "777"
            },
        ]
    }),
    components: { DataTable }
}
</script>