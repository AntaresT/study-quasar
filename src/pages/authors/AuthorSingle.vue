<template>
  <q-page class="flex justify-center">
    <div class="text-center q-pa-md row">
      <q-img :ratio="16/9" alt="postImage" src="https://picsum.photos/500/500?random=1" />
      <div class="content-center q-px-md q-mt-md">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Autor</div>
            <div class="text-subtitle2">data de criação</div>
          </q-card-section>

          <q-separator />

          <q-card-actions horizontal>
            <q-btn text-color="black" icon="edit" label="Editar" />
            <q-btn text-color="black" icon="edit" label="Deletar" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AuthorSingle'
}
</script>
