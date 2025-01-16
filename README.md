# Currency Rate Checker

This is a Vue 3 application that fetches live exchange rates for USD, GBP, and BDT using a public API. It also recommends the best platform for sending or withdrawing money to Bangladesh based on the exchange rates and platform fees.

---

## Features

- **Live Exchange Rates**: Fetch real-time exchange rates for USD, GBP, and BDT.
- **Platform Recommendation**: Suggests the best platform (e.g., PayPal, Wise, Bank Transfer) based on fees and rates.
- **Responsive Design**: Built with Tailwind CSS for modern, mobile-friendly UI.
- **Customizable Fees**: Easy to update platform fees in the code.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v23)
- npm (comes with Node.js)

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/devkabir/currency-rate-checker.git
   cd currency-rate-checker
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` (or the URL displayed in your terminal).

---

### Deployment

For production builds:

```bash
npm run build
```

Deploy the contents of the `dist` folder to your hosting provider.

---

## Built With

- **[Vue 3](https://vuejs.org/)** - Frontend Framework
- **[Pinia](https://pinia.vuejs.org/)** - State Management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-First CSS Framework
- **[Axios](https://axios-http.com/)** - HTTP Client for API Requests

---

## API Reference

The app fetches exchange rates from [ExchangeRate-API](https://www.exchangerate-api.com/). Replace the example API URL with your actual API key and endpoint in the `fetchRates` method:

```javascript
axios.get('https://api.exchangerate-api.com/v4/latest/USD');
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add my feature"
   ```
4. Push the branch:
   ```bash
   git push origin my-feature
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [ExchangeRate-API](https://www.exchangerate-api.com/) for providing exchange rate data.
- [Tailwind CSS](https://tailwindcss.com/) for the modern styling framework.
- [Vue 3 Documentation](https://vuejs.org/) for excellent resources.
