if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const GEMINI_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_KEY) {
  console.error("❌ GEMINI_API_KEY is not set!");
}

module.exports = async (req, res) => {
  res.json({ ok: true, message: "Replace with Gemini call" });
};
