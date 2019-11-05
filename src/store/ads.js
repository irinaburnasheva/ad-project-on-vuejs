export default {
  state: {
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
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = 'Q12345'

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
