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
    <div class="logout">
      <Icon name="logout" />
    </div>
  </div>
</template>

<script>
import Icon from '../../icons/icon.vue'
export default {
  components: {
    Icon
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
