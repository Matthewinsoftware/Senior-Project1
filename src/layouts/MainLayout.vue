<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          MyPantry
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Grocery Store Options
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [

  {
    title: 'Publix',
    caption: 'Publix',
    icon: 'code',
    link: 'https://www.publix.com/'
  },
  {
    title: 'Kroger',
    caption: 'Kroger',
    icon: 'chat',
    link: 'https://www.kroger.com/'
  },
  {
    title: 'Whole Foods Market',
    caption: 'Whole Foods Market',
    icon: 'record_voice_over',
    link: 'https://www.wholefoodsmarket.com/'
  },
  {
    title: 'Trader Joes',
    caption: 'Trader Joes',
    icon: 'rss_feed',
    link: 'https://www.traderjoes.com/home'
  },
  
  {
    title: 'Linkedin Profile',
    caption: 'My Linkedin Profile',
    icon: 'favorite',
    link: 'https://www.linkedin.com/in/matthew-robertson98/'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
