<template>
  <q-page>
    <div class="q-pa-md text-h3">
      Autores
    </div>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" >
        <q-input filled v-model="name" label="Name" lazy-rules :rules="nameRules" />
        <q-input filled type="number" v-model="age" label="Age" lazy-rules :rules="ageRules"/>
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>

// import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {

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
