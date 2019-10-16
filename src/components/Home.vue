<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
          <v-carousel-item
            v-for="ad in ads"
            :key="ad.id"
            :src="ad.imageSrc">
            <!--reverse-transition="fade-transition"-->
            <!--transition="fade-transition"-->
          </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex
          xs12
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card>
            <v-card-media :src="ad.imageSrc"
                          height="200px"
            >
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div>{{ ad.description }}</div>
              </div>
            </v-card-title>
            <v-card-action>
              <v-spacer></v-spacer>
              <v-btn flat>Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'First ad',
          description: 'description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '123'
        },
        {
          title: 'Second ad',
          description: 'description',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '1234'
        },
        {
          title: 'Third ad',
          description: 'description',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '12345'
        }
      ]
    }
  }
}
</script>
