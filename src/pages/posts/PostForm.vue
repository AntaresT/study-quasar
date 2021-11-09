<template>
  <q-page class="row justify-center">
    <div class="col col-md-8 col-sm-10 col-xs-12">
      <div class="q-pa-md text-h3">
        Post
      </div>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" >
          <q-input filled v-model="post.title" label="Title" lazy-rules :rules="fieldRules" />
          <q-select filled v-model="post.category" :options="options" label="Category" />
          <q-input filled v-model="post.description" label="Description" lazy-rules :rules="fieldRules" />
          <q-input filled v-model="post.author" label="Author" lazy-rules :rules="fieldRules" />
          <q-input filled type="textarea" v-model="post.content" label="Content" lazy-rules :rules="fieldRules"/>
          <q-uploader url="http://localhost:4444/upload" color="blue" label="Image" flat bordered style="max-width: 300px" />
          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>

import { ref } from 'vue'

export default {

  data () {
    return {
      post: {
        category: '',
        title: '',
        description: '',
        image: '',
        content: '',
        author: ''
      },
      options: [
        'Movies', 'Music', 'Science', 'Art'
      ],
      persistent: false
    }
  },

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
