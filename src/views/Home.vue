<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 class="text-4xl font-extrabold mb-6 text-blue-600">
        Currency Rate Checker
      </h1>
  
      <!-- Fetch Rates Button -->
      <button
        @click="fetchRates"
        class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-lg focus:outline-none"
      >
        Fetch Exchange Rates
      </button>
  
      <!-- Display Exchange Rates -->
      <div v-if="rates" class="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Exchange Rates</h2>
        <ul class="space-y-2 text-gray-700">
          <li class="flex justify-between">
            <span>USD to BDT:</span>
            <span class="font-bold">{{ rates.BDT }}</span>
          </li>
          <li class="flex justify-between">
            <span>GBP to BDT:</span>
            <span class="font-bold">{{ (rates.BDT / rates.GBP).toFixed(2) }}</span>
          </li>
        </ul>
      </div>
  
      <!-- Platform Recommendation -->
      <div class="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">
          Best Platform Recommendation
        </h2>
  
        <!-- Input Amount -->
        <div class="mb-4">
          <label for="amount" class="block text-gray-600 mb-2">Amount</label>
          <input
            v-model="amount"
            id="amount"
            type="number"
            placeholder="Enter amount"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
  
        <!-- Select Currency -->
        <div class="mb-6">
          <label for="currency" class="block text-gray-600 mb-2">Currency</label>
          <select
            v-model="currency"
            id="currency"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
  
        <!-- Recommendation Button -->
        <button
          @click="recommendPlatform"
          class="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 shadow-lg focus:outline-none"
        >
          Get Recommendation
        </button>
  
        <!-- Display Recommendation -->
        <div v-if="recommendation" class="mt-6">
          <p class="text-lg text-gray-800">
            <strong>Best Platform:</strong> {{ recommendation.name }}
          </p>
          <p class="text-lg text-gray-800">
            <strong>Total Received:</strong> {{ recommendation.total.toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useExchangeRatesStore } from '../stores/exchangeRates';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const store = useExchangeRatesStore();
      const rates = store.rates;
      const amount = ref(0);
      const currency = ref('USD');
      const recommendation = ref(null);
  
      const fetchRates = async () => {
        await store.fetchRates();
      };
  
      const recommendPlatform = () => {
        recommendation.value = store.getBestPlatform(amount.value, currency.value);
      };
  
      return {
        rates,
        amount,
        currency,
        fetchRates,
        recommendPlatform,
        recommendation,
      };
    },
  };
  </script>
  