<template>
  <q-page class="flex justify-center">
    <div class="full-width q-pa-md text-right">
      <q-btn label="Novo Post" :to="{ name:'PostCreate', params:{ mode:'new' } }"/>
    </div>
    <div class="q-pa-md q-gutter-lg flex content-center postList__screenLimit">
      <post-item :posts="posts"/>
    </div>
  </q-page>
</template>

<script>
import PostItem from '../../components/PostItem'

export default {
  components: {
    PostItem
  },

  data () {
    return {
      posts: [
        {
          id: 1,
          img: 'https://picsum.photos/200/200?random=1',
          title: 'Titulo 1',
          category: 'teste',
          description: 'lorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem iasdlorem iupsoiasdlorem iasdlorem iupsoiasdlorem',
          author: 'author 1',
          content: 'laraarara',
          created: '2020-11-29'
        },
        {
          id: 2,
          img: 'https://picsum.photos/200/200?random=2',
          title: 'Titulo 2',
          category: 'teste',
          description: 'lorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem iasdlorem iupsoiasdlorem iasdlorem iupsoiasdlorem',
          author: 'author 2',
          content: 'laraarara',
          created: '2020-11-29'
        },
        {
          id: 3,
          img: 'https://picsum.photos/200/200?random=3',
          title: 'Titulo 3',
          category: 'teste',
          description: 'lorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem',
          author: 'author 3',
          content: 'laraarara',
          created: '2020-11-29'
        },
        {
          id: 4,
          img: 'https://picsum.photos/200/200?random=4',
          title: 'Titulo 4',
          category: 'teste',
          description: 'lorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem',
          author: 'author 4',
          content: 'laraarara',
          created: '2020-11-29'
        },
        {
          id: 5,
          img: 'https://picsum.photos/200/200?random=5',
          title: 'Titulo 5',
          category: 'teste',
          description: 'lorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem',
          author: 'author 5',
          content: 'laraarara',
          created: '2020-11-29'
        },
        {
          id: 6,
          img: 'https://picsum.photos/200/200?random=6',
          title: 'Titulo 6',
          category: 'teste',
          description: 'lorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem iupsoiasdlorem',
          author: 'author 6',
          content: 'laraarara',
          created: '2020-11-29'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.postList {

  &__screenLimit {
    width: 800px;
  }
}
</style>
