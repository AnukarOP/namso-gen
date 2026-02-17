# Namso Gen - Credit Cards Generator

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AnukarOP/namso-gen/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/AnukarOP/namso-gen)](https://github.com/AnukarOP/namso-gen/stargazers)

NamsoGen is a random test credit card number generator based on your own BIN pattern. This tool is designed to provide test card numbers for development purposes, helping software developers, testers, and QA professionals validate payment systems without needing real card details.

## Features

- **BIN (Bank Identification Number) Generation**: Input your specific BIN or generate numbers using random BINs.
- **Expiration Date**: Select a month and year or opt for random values.
- **Security Code (CCV)**: Customize the CCV or generate a random value.
- **Quantity of Cards**: Generate multiple card numbers in one request.
- **Light/Dark Mode**: Easily toggle between light and dark themes.

## Getting Started

### Prerequisites

This project is a simple web-based application that requires no installation. It utilizes HTML, JavaScript, and CSS along with external libraries like Bootstrap and Font Awesome.

Make sure you have the following:
- A web browser (Chrome, Firefox, Edge, etc.)

#### Usage

- Open `index.html` in your browser.
- Input the desired **BIN** (Bank Identification Number).
- Customize the **Month**, **Year**, **CCV**, and **Quantity** fields as required.
- Click the **Generate** button to generate test credit card numbers.
- Use the **Copy** button to quickly copy the generated credit card numbers.

## Technology Stack

- **HTML**: For creating the main structure of the application.
- **JavaScript**: For handling user input and generating card numbers.
- **CSS**: Styling with **Bootstrap** and **Font Awesome** for better user experience.

## Demo

You can try out the application directly [here](https://anukarop.is-a.dev/namso-gen/).

## How It Works

Namso Gen utilizes the **Luhn Algorithm** to generate structurally valid credit card numbers. These numbers cannot be used for real transactions but are ideal for testing payment systems, ensuring they can handle real-world card details.

### Components

- **BIN Input**: The first six digits of a credit card (known as the BIN) identify the issuing institution.
- **Expiration Date & CCV**: Used to generate test cards with realistic formats.
- **Quantity**: Choose how many card numbers you want to generate at once.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/AnukarOP/namso-gen/blob/main/LICENSE) file for more details.

## Acknowledgements

- **Bootstrap** - For providing a responsive CSS framework.
- **Font Awesome** - For the icons used throughout the application.
- **Luhn Algorithm** - Used to generate valid test credit card numbers.

## Contact

Made with ❤️ by [@AnukarOP](https://anukar.tech/). If you have any questions or feedback, feel free to reach out.

Do ⭐ the repository if you found it useful!

## Disclaimer

Namso Gen generates **fictitious credit card numbers** solely for **testing purposes**. These numbers are not real, do not contain funds, and cannot be used for actual transactions. Always use these tools responsibly.

##

![](https://visitor-badge.laobi.icu/badge?page_id=AnukarOP.readme)
