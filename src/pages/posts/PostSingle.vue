<template>
  <q-page class="flex justify-center">
    <div class="text-center q-pa-md postSingle__screenLimit">
      <q-img :ratio="16/9" alt="postImage" src="https://picsum.photos/500/500?random=1" />
      <div class="content-center q-px-md q-mt-md">
        <div class="text-h3">TITULO</div>
        <div class="flex justify-between">
          <div class="text-weight-bold">autor</div>
          <div class="text-weight-bold">created</div>
        </div>
        <div class="text-subtitle2 text-left q-mt-sm">categoria</div>
        <div class="text-subtitle1 q-mt-md">lorem ipshuim asdasda</div>
        <div class="text-body1 q-mt-md q-px-md">{{post.content}}</div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PostSingle',

  data () {
    return {
      post: {
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }
    }
  }

}
</script>

<style lang="scss">
.postSingle {

  &__screenLimit {
    width: 700px;
  }

  &__textArea {
    width: 500px;
  }
}
</style>
