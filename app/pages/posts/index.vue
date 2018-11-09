<template>
  <section class="container posts-page">
    <el-card>
      <div
        slot="header"
        class="clearfix">
        <span>新規投稿</span>
      </div>
      <el-table
        :data="showPosts"
        style="width: 100%"
        class="table"
        @row-click="handleClick">
        <el-table-column
          prop="title"
          label="タイトル"
          placeholder=""/>
        <el-table-column
          prop="user.id"
          label="投稿者"
          width="180"/>
        <el-table-column
          prop="created_at"
          label="投稿日時"
          width="240"/>
      </el-table>
    </el-card>
  </section>
</template>

<script>
import moment from '~/plugins/moment'
import { mapGetters } from 'vuex'

export default {
  // async asyncData({ store }) {
  //   await store.dispatch('posts/fetchPosts')
  // },
  computed: {
    showPosts() {
      //   return this.posts.map(post => {
      //     post.created_at = moment(post.created_at).format('YYYY/MM/DD HH:mm:ss')
      //     return post
      //   })
      return [
        {
          id: '001',
          title: 'How to development Nuxt.js Application',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          created_at: '2018/08/10 12:00:00',
          user: {
            id: 'tarober'
          }
        },
        {
          id: '002',
          title: 'How to development Nuxt.js Application',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          created_at: '2018/08/10 12:00:00',
          user: {
            id: 'tarober'
          }
        }
      ]
    }
    // ...mapGetters('posts', ['posts'])
  },
  methods: {
    handleClick(post) {
      this.$router.push(`/posts/${post.id}`)
    }
  }
}
</script>

<style>
.posts-page el-table__row {
  cursor: pointer;
}
</style>
