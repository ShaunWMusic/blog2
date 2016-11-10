<template lang="html">
  <div class="">
    <h2>IS THIS WORKING!!!</h2>

    <ul>
      <li v-for="post in posts">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['posts'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
