const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   switch (req.url) {
  //     case "/":
  //       fs.readFile(
  //         path.join(__dirname, "public", "index.html"),
  //         (err, content) => {
  //           if (err) throw err;
  //           res.writeHead(200, { "Content-Type": "text/html" });
  //           res.end(content);
  //         }
  //       );
  //       break;
  //     case "/about":
  //       fs.readFile(
  //         path.join(__dirname, "public", "about.html"),
  //         (err, content) => {
  //           if (err) throw err;
  //           res.writeHead(200, { "Content-Type": "text/html" });
  //           res.end(content);
  //         }
  //       );
  //       break;
  //     case "/api/users":
  //       const users = [
  //         { name: "Bob", age: 40 },
  //         { name: "Jon", age: 50 },
  //       ];
  //       res.writeHead(200, { "Content-Type": "application/json" });
  //       res.end(JSON.stringify(users));
  //       break;
  //   }

  //build filepath
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //get extension
  let extname = path.extname(filePath);

  //content type
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/js";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENONET") {
        //Page Not Found
        fs.readFile(
          path.join(__dirname, "public", "notfound.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end("Server Error" + err.code, "utf8");
      }
    }else{
        //SUCCESS
        res.writeHead(200, {'Content-Type':contentType})
        res.end(data, 'utf8')
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
