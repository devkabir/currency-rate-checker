import { defineStore } from 'pinia';
import axios from 'axios';

export const useExchangeRatesStore = defineStore('exchangeRates', {
  state: () => ({
    rates: null,
    platforms: [
      { name: 'PayPal', fee: 5.0 },
      { name: 'Wise', fee: 2.0 },
      { name: 'Bank Transfer', fee: 3.0 },
    ],
  }),
  actions: {
    async fetchRates() {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD'); // Replace with your API
        this.rates = response.data.rates;
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    },
    getBestPlatform(amount, currency) {
      if (!this.rates) return null;

      const rate = this.rates[currency];
      if (!rate) return null;

      const costs = this.platforms.map((platform) => {
        const total = amount * rate - platform.fee;
        return { ...platform, total };
      });

      return costs.sort((a, b) => b.total - a.total)[0];
    },
  },
});
