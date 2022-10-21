<template>
  <div class="user-info">
    <div class="home">
      <Icon name="home" />
    </div>
    <div class="user-photo">
      <img
        src="https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-c.jpg"
        class="img-avatar"
        alt="user photo"
      />
    </div>
    <div @click="logout" class="logout">
      <Icon name="logout" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Icon from '../../icons/icon.vue'
export default {
  components: {
    Icon
  },
  methods: {
    ...mapActions({
      logoutAction: 'auth/logout'
    }),
    logout () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'auth' })
      window.location.reload()
    }
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
