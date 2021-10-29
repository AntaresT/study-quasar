<template>
  <q-page>
    <div class="q-pa-md text-h3">
      Post
    </div>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" >
        <q-input filled v-model="title" label="Title" lazy-rules :rules="fieldRules" />
        <q-input filled type="textarea" v-model="postContent" label="Content" lazy-rules :rules="fieldRules"/>
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>

import { ref } from 'vue'

export default {

  computed: {
    checkRoute () {
      console.log(this.$route)
      return this.$route
    },

    fieldRules (value) {
      return [value => (value && value.length > 0) || 'Please type something']
    }
  },

  setup () {
    const title = ref(null)
    const postContent = ref(null)

    return {
      title,
      postContent,

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
        title.value = null
        postContent.value = null
      }
    }
  }
}

</script>
