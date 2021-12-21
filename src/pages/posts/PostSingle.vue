<template>
  <q-page class="row">
    <div class="col justify-center">
      <div>
        <img alt="postImage" contain>
      </div>
      <div>TITULO</div>
      <div>categoria</div>
      <div>descrição</div>
      <div>autor</div>
      <div>conteudo</div>
    </div>
  </q-page>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PostSingle'

  // computed: {
  //   ...mapGetters(['post']),
  //   id () {
  //     return this.$route.params.id
  //   }
  // },

  // created () {
  //   this.getPost(this.id)
  // },

  // methods: {
  //   ...mapActions([
  //     'getPost'
  //   ])
  // }
}
</script>
