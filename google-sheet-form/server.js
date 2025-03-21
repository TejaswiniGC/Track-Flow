const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

app.post("/api/submit", (req, res) => {
  console.log(req.body);
  res.json({ status: "success", message: "Data received successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


// Google Sheets API Setup
const SPREADSHEET_ID = "1UT6fKEZIjpOpuXiieYdSlWurlhtfR0KmWM8CU9VTuq8";
const SHEET_NAME = "Sheet1"; // Change if needed

const auth = new google.auth.GoogleAuth({
  keyFile: "google-credentials.json", // Update with your credentials file
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

app.post("/submit", async (req, res) => {
  try {
    const { email, plantName, quantity, date } = req.body;
    if (!email || !plantName || !quantity || !date) {
      return res.status(400).json({ status: "error", message: "All fields are required" });
    }

    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, plantName, quantity, date]],
      },
    });

    res.json({ status: "success", message: "Data saved to Google Sheets" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});


