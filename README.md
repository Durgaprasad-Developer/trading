# Trading Pro

## Overview
Trading Pro is a web-based project that utilizes the **Alpha Vantage API** and **TradingView Widget** to demonstrate stock market trends. The project implements the **Relative Strength Index (RSI) indicator** to predict market movements based on real-time data fetched from Alpha Vantage.

## Features
- **Real-time stock market data** using the Alpha Vantage API
- **TradingView Widget** for an interactive chart display
- **RSI Indicator Implementation** to predict market trends
- **Buy/Sell Indicators** based on RSI levels (Buy when RSI < 30, Sell when RSI > 70)

## Technologies Used
- **HTML, CSS, JavaScript** for frontend development
- **Alpha Vantage API** for fetching market data
- **TradingView Widget** for interactive charts

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/trading-pro.git
   cd trading-pro
   ```
2. **Get an API Key from Alpha Vantage**
   - Visit [Alpha Vantage](https://www.alphavantage.co/)
   - Sign up for a free API key

3. **Update the API Key in Your Code**
   - Locate the JavaScript file where API calls are made
   - Replace `YOUR_API_KEY` with your actual API key

4. **Open `index.html` in Your Browser**
   - No additional setup required, just open the file to see the Trading Pro in action

## Limitations
- **Free API Limit**: Alpha Vantage has free-tier limitations, so excessive requests might be restricted.
- **Market Hours**: If the stock market is closed, real-time data may not be available.
- **Delay in Data**: API data may have a slight delay compared to actual market movements.

## Future Enhancements
- Implement **WebSockets** for real-time price updates
- Support multiple indicators like **MACD, Bollinger Bands**
- Add user authentication for personalized stock tracking

## Contributions
Feel free to fork the repository, raise issues, and submit pull requests to improve the project.

## License
This project is open-source and available under the **MIT License**.

---
**Author:** Durga Prasad  
**GitHub:** [Your GitHub Profile](https://github.com/yourusername)

