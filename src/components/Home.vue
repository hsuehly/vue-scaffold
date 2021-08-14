<template>
  <div class="home">
    这是Home组件
    <ul>
      <li v-for="item in data" :key="item.uid">{{item.uname}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data:''
    }
  },
 async created() {
     const data = await this.axios.get('/api/list')
    console.log(data.data)
    this.data = data.data.data
  }
}
</script>
<style lang="scss">
.hoem {
  color: aquamarine;
}

</style>