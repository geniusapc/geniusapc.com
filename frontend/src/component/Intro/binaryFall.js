const binaryFall = () => {
      var c = document.getElementById("binary-fall");
      var ctx = c.getContext("2d");
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      var binary = "01";
      binary = binary.split("");
      var font_size = 15;

      var columns = c.width / font_size;
      var drops = [];

      for (var x = 0; x < columns; x++) {
        drops[x] = 1;
      }

      function draw() {
        ctx.fillStyle = "rgba(13,17,23, 0.2)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#8892b0";
        ctx.font = font_size + "px arial";
        for (var i = 0; i < drops.length; i++) {
          var text = binary[Math.floor(Math.random() * binary.length)];
          ctx.fillText(text, i * font_size, drops[i] * font_size);
          if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
          drops[i]++;
        }
      }
      setInterval(draw, 100);
    };
    
    export default binaryFall
