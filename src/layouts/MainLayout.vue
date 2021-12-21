<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-white q-pl-md q-pr-md" style="background-color: #f39c12">
        <q-toolbar-title>
          BlogSpot
        </q-toolbar-title>
        <q-list class="row">
          <q-item-label header />
          <q-item v-for="(item, index) in allLinks" :key="index" >
            <q-item-section>
              <!--<q-item-label  class="text-black">{{item.title}}</q-item-label>-->
              <q-btn :label="item.title" push :ripple="{color: 'purple'}" :to="{name: item.name}" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const linksList = [
  {
    title: 'Author',
    name: 'AuthorList'
  },
  {
    title: 'Post',
    name: 'PostList'
  }
]

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  computed: {
    allLinks () {
      return linksList
    }
  }
})
</script>
