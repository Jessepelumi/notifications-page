/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "red": "hsl(1, 90%, 64%)",
          "blue": "hsl(219, 85%, 26%)"
        },
        neutral: {
          "white": "hsl(0, 0%, 100%)",
          "vl-grayish-blue": "hsl(210, 60%, 98%)",
          "l-grayish-blue1": "hsl(211, 68%, 94%)",
          "l-grayish-blue2": "hsl(205, 33%, 90%)",
          "grayish-blue": "hsl(219, 14%, 63%)",
          "d-grayish-blue": "hsl(219, 12%, 42%)",
          "v-dark-blue": "hsl(224, 21%, 14%)"
        }
      },
      fontSize: {
        "custom": "16px"
      },
      fontFamily: {
        "plusjakarta": ["PlusJakarta"]
      }
    },
  },
  plugins: [],
}

