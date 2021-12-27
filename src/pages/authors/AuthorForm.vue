<template>
  <q-page class="flex justify-center">
    <div class="">
      <div class="q-pa-md text-h3">
        Novo Autor
      </div>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" >
          <q-input filled v-model="name" label="Nome" lazy-rules :rules="nameRules" />
          <q-input filled type="number" v-model="age" label="Idade" lazy-rules :rules="ageRules"/>
          <div class="text-right">
            <q-btn label="Cancelar" type="reset" color="warning" flat class="q-ml-sm" />
            <q-btn label="Enviar" type="submit" color="warning"/>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>

// import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {

  data () {
    return {
      fields: {
        name: '',
        age: '',
        creationDate: ''
      }
    }
  },

  computed: {
    checkRoute () {
      console.log(this.$route)
      return this.$route
    },

    ageRules (value) {
      return [
        value => (value !== null && value !== '') || 'Please type your age',
        value => (value > 0 && value < 100) || 'Please type a real age'
      ]
    },

    nameRules (value) {
      return [val => (val && val.length > 0) || 'Please type something']
    }
  },

  setup () {
    // const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit () {
        // TODO Chamada de API para inserir o autor
        // if (accept.value !== true) {
        //   $q.notify({
        //     color: 'red-5',
        //     textColor: 'white',
        //     icon: 'warning',
        //     message: 'You need to accept the license and terms first'
        //   })
        // } else {
        //   $q.notify({
        //     color: 'green-4',
        //     textColor: 'white',
        //     icon: 'cloud_done',
        //     message: 'Submitted'
        //   })
        // }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}

</script>
