<template>
  <q-page>
    <div class="q-pa-md">
      <q-btn :to="{ name: 'AuthorCreate' , params: { mode:'new' }}" label="Novo Autor" />
    </div>
    <div class="q-pa-md">
      <q-table title="Autores" :rows="rows" :columns="columns" row-key="name" >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AuthorList',

  data () {

  },

  computed: {
    columns () {
      return [
        {
          name: 'name',
          required: true,
          label: 'Nome do Author',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'age', align: 'left', label: 'Idade', field: 'age', sortable: true },
        { name: 'creationDate', align: 'left', label: 'Data de Criação', field: 'creationDate', sortable: true }
      ]
    },

    rows () {
      return [
        {
          title: 'titulo',
          name: 'nome X',
          age: 43,
          creationDate: '2021-10-14'
        },
        {
          title: 'titulo2',
          name: 'fasldla',
          age: 60,
          creationDate: '2021-10-14'
        }
      ]
    }

  }

}
</script>
