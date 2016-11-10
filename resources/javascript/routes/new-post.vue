<template lang="html">
  <div class="">
    <h2>hello new post</h2>

    <div class="row">
      <div class="col-xs-6">
        <div class="form-group">
          <textarea v-model="content" rows="50" class="form-control"></textarea>
        </div>
      </div>
      <div class="col-xs-6">
        <div v-html="makeHtml(content)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import showdown from 'showdown';
const converter = new showdown.Converter();

export default {
  data() {
    return {
      content: ''
    };
  },

  methods: {
    makeHtml(text) {
      return converter.makeHtml(text);
    },
  },
};
</script>
