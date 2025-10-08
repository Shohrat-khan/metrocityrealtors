const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware for static files (CSS/JS/Images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index"); // index.ejs
});

app.get("/about", (req, res) => {
  res.render("about-us"); // about-us.ejs
});

app.get("/properties", (req, res) => {
  res.render("listing-topmap-grid"); // listing-topmap-grid.ejs
});

app.get("/contact", (req, res) => {
  res.render("contacts"); // contact.ejs
});

app.get("/terms&condition", (req, res) => {
  res.render("terms"); // terms.ejs
});

app.get("/privacypolicy", (req, res) => {
  res.render("privacy"); // terms.ejs
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
