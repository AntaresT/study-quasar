<template>
  <div class="postItem" v-for="(post, index) in posts" :key="index">
    <q-card class="my-card">
      <q-card-section :horizontal="cardOrientation">
        <q-img :src="post.img" />
        <q-card-section :class="changeSize" class="flex justify-between">
          <q-card-section class="full-width flex justify-between">
            <span>{{ post.author }}</span>
            <span>{{ post.created }}</span>
          </q-card-section>
          <q-card-section class="flex">
            <q-card-section>
              <span>
                {{ post.description }}
              </span>
            </q-card-section>
          </q-card-section>
          <q-card-actions class="full-width flex justify-end">
            <q-btn round color="red-7" text-color="black" icon="delete_outline" :to="{ name: 'PostSingle', params: { id: post.id } }" />
            <q-btn round color="primary" text-color="black" icon="edit" :to="{ name: 'PostSingle', params: { id: post.id } }" />
            <q-btn round color="amber" text-color="black" icon="visibility" :to="{ name: 'PostSingle', params: { id: post.id } }" />
          </q-card-actions>
        </q-card-section>

      </q-card-section>
    </q-card>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    $q.screen.setSizes({ sm: 500, md: 600 })
  },

  props: {
    posts: {
      type: Array,
      default: () => ([])
    }
  },

  data () {
    return {
      side: ''
    }
  },

  computed: {
    responsiveGutter () {
      return this.$q.screen.lt.sm ? 'q-mt-md' : 'row q-mt-xl'
    },

    changeSize () {
      return this.$q.screen.lt.md ? '' : 'postItem__card'
    },

    cardOrientation () {
      return !this.$q.screen.lt.sm
    }
  },

  methods: {
    zigzagItem () {
      console.log(this.posts.indexOf())
    }
  }

}
</script>

<style lang="scss">
.postItem {
  &__card {
    width: 700px;
    max-width: 700px;
    min-width: 400px;
  }

  &__smallCard {
    width: auto;
  }

  &__description {
    width: 300px;
    max-width: 300px;
  }

  &__screenLimit {
    width: 800px;
  }

  &__cardSize {
    max-width: 600px;
    max-height: 500px;
  }
}
</style>
