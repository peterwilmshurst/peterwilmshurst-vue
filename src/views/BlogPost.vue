<template>
  <div class="blog-detail">
    <div class="container">
      <div class="column">
        <div class="post" v-if="post && author">
          <article>
            <div class="image">
              <img
                :alt="post.fields.title"
                :src="
                  `${post.fields.image[0].fields.file.url}?w=1680&h=750&fit=crop`
                "
              />
            </div>
            <div>
              <h1 class="title">{{ post.fields.title }}</h1>
              <div class="content" v-html="post.fields.content.html"></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comfortable from "comfortable-javascript";
import { comfortable } from "@/comfortable.js";
import _ from "lodash";

export default {
  name: "blogPost",
  data() {
    return {
      post: null,
      author: null
    };
  },
  methods: {
    getPost() {
      const options = {
        embedAssets: true,
        includes: 1,
        filters: new Comfortable.Filter().addAnd(
          "slug",
          "equal",
          this.$route.params.slug
        )
      };

      comfortable
        .getDocuments(options)
        .then(result => {
          this.post = result.data[0];
          this.author = _.find(result.includes.author, { meta: {} });
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {
    this.getPost();
  }
};
</script>
<style lang="scss">
.title {
  color: $green;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
}
.description {
  .title {
    margin-bottom: 0.25rem;
  }
}
</style>
