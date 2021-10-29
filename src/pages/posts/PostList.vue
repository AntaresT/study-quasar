<template>
  <q-page>
    <div class="q-pa-md">
      <q-btn :to="{ name: 'PostCreate' , params: { mode:'new' }}" label="Novo Post" />
    </div>
    <div class="q-pa-md q-gutter-md">
      <div v-for="(post,index) in posts" :key="index">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">{{post.title}}</div>
            <div class="text-subtitle2">by {{post.author}}</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <span>{{post.content}}</span>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        { title: 'Titulo 1', author: 'author 1', content: 'laraarara' },
        { title: 'Titulo 2', author: 'author 2', content: 'laraarara' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
