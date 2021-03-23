<template>
  <div class="home">
    <div class="container">
      <div class="column">
        <div class="blog-post" v-for="post in posts" :key="post.meta.id">
          <router-link :to="`/blog/${post.fields.slug}`">
            <div class="columns is-vcentered is-centered">
              <div class="column is-2">
                <div class="image">
                  <img
                    :alt="post.fields.title"
                    :src="
                      `${post.fields.image[0].fields.file.url}?w=480&h=480&fit=crop`
                    "
                  />
                </div>
              </div>
              <div class="column is-8">
                <div class="description">
                  <h3 class="title">{{ post.fields.title }}</h3>
                  <span class="date">
                    <i class="far fa-clock"></i> {{ post.fields.date }}
                  </span>
                  <p class="excerpt">{{ post.fields.summary }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <button v-if="totalPosts > posts.length" @click="getPosts">
          {{ loading ? "Loading..." : "Load more posts" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { comfortable } from "@/comfortable.js";

export default {
  name: "home",
  data() {
    return {
      posts: [],
      totalPosts: 0,
      loading: false
    };
  },
  methods: {
    getPosts() {
      this.loading = true;

      const options = {
        embedAssets: true,
        offset: this.posts.length
      };

      comfortable
        .getCollection("blogpost", options)
        .then(result => {
          this.posts.push(...result.data);
          this.totalPosts = result.meta.total;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          throw err;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>
