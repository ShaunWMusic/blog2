<template lang="html">
  <div class="">
    <router-view
      :posts="posts"
      @findAllPosts="findAllPosts"
      @findPost="findPost"
    ></router-view>
    <h2>Appy</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    this.findAllPosts();
  },

  methods: {
    findAllPosts() {
      fetch('/api/posts', {
        credentials: 'same-origin',
      })
        .then((r) => r.json())
        .then((posts) => {
          this.posts = posts;
        });
    },

    findPost() {

    },
  },
};
</script>
