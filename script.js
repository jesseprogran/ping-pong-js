const canvasEl = document.querySelector("canvas"), canvasCtx = canvasEl.getContext("2d");

const lineWidth = 15;

function setup() {
  canvasEl.width = canvasCtx.width = window.innerWidth;
  canvasEl.height = canvasCtx.height = window.innerHeight;
}

function draw() {
  // desenha o campo
  canvasCtx.fillStyle = "#03351e";
  canvasCtx.fillRect(0, 0, window.innerWidth,window.innerHeight );

  canvasCtx.fillStyle = "#ffffff";

  // desenha linha central

  const x = window.innerWidth / 2 - lineWidth / 2 ;
  const y = 0;
  const w = lineWidth;
  const h = window.innerHeight;

  canvasCtx.fillRect(x, y, w, h);

  // desenha a raquete esquerda
  canvasCtx.fillRect(10, 350, lineWidth, 200);
  // desenha a raquete direita 
  canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 200, lineWidth, 200);


}

setup();
draw();
