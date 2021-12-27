<template>
  <q-page>
    <div class="q-pa-md text-right">
      <q-btn :to="{ name: 'AuthorCreate' , params: { mode:'new' }}" label="Novo Autor" />
    </div>
    <div class="q-pa-md">
      <q-table title="Autores" :rows="rows" :columns="columns" row-key="name" >
        <template #top-right>
          <q-input borderless dense debounce="300" placeholder="Search">
            <template #append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template #body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props" >
              {{ col.value }}
            </q-td>
            <q-td auto-width>
              <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="full-width flex justify-end q-gutter-md">
                <q-btn round color="red-7" text-color="black" icon="delete_outline" />
                <q-btn round color="primary" text-color="black" icon="edit"  />
                <q-btn round color="amber" text-color="black" icon="visibility" :to="{ name: 'AuthorSingle', params: { id: 1 } }" />
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AuthorList',

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
          id: 1,
          name: 'nome X',
          age: 43,
          creationDate: '2021-10-14'
        },
        {
          id: 2,
          name: 'fasldla',
          age: 60,
          creationDate: '2021-10-14'
        }
      ]
    }

  }

}
</script>
