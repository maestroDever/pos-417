import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [{
        invId: 1,
        item: 'An Item',
        image: '//placehold.it/200',
        price: 999
      },
      {
        invId: 2,
        quantity: 'An Item',
        item: '//placehold.it/200',
        price: 999
      },
      {
        invId: 3,
        quantity: 'An Item',
        item: '//placehold.it/200',
        price: 999
      },
      {
        invId: 4,
        quantity: 'An Item',
        item: '//placehold.it/200',
        price: 999
      },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    SUBMIT(state, invId) {
      state.inCart.push(invId);
    },
    REMOVE_FROM_CART(state, index) {
      state.inCart.splice(index, 1);
    },
  },
  actions: {
    submit(context, invId) {
      context.commit('SUBMIT', invId);
    },
    removeFromCart(context, index) {
      context.commit('REMOVE_FROM_CART', index);
    },
  },
});