<template>
  <q-page>
    <div class="q-pa-md">
      <q-btn :to="{ name: 'PostCreate' , params: { mode:'new' }}" label="Novo Post" />
    </div>
    <div class="q-pa-md q-gutter-md">
      <div v-for="(post,index) in posts" :key="index">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Overline</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat>
              7:30PM
            </q-btn>
            <q-btn flat color="primary">
              Reserve
            </q-btn>
          </q-card-actions>
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
