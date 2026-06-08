let gotas = [];
let plantacao = 50;
let agua = 50;
let pontos = 0;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(135, 206, 235);

  fill(50, 180, 50);
  rect(0, 450, width, 150);

  fill(0);
  textSize(24);
  text("Água: " + agua, 20, 40);
  text("Produção: " + plantacao, 20, 80);
  text("Pontos: " + pontos, 20, 120);

  fill(139, 69, 19);
  rect(mouseX - 40, 400, 80, 20);

  if (frameCount % 20 == 0) {
    gotas.push({
      x: random(width),
      y: -20,
      velocidade: random(3, 7)
    });
  }

  for (let i = gotas.length - 1; i >= 0; i--) {
    let g = gotas[i];

    fill(0, 100, 255);
    ellipse(g.x, g.y, 15, 20);

    g.y += g.velocidade;

    if (
      g.y > 390 &&
      g.x > mouseX - 40 &&
      g.x < mouseX + 40
    ) {
      agua += 2;
      pontos++;
      gotas.splice(i, 1);
      continue;
    }

    if (g.y > height) {
      gotas.splice(i, 1);
    }
  }

  if (frameCount % 60 == 0) {
    agua -= 1;

    if (agua > 40) {
      plantacao += 1;
    } else {
      plantacao -= 1;
    }
  }

  agua = constrain(agua, 0, 100);
  plantacao = constrain(plantacao, 0, 100);

  fill(255);
  rect(650, 30, 200, 25);
  fill(0, 200, 0);
  rect(650, 30, plantacao * 2, 25);

  fill(0);
  textSize(16);
  text("Nível da Produção", 680, 20);

  if (plantacao >= 100) {
    textSize(40);
    fill(0, 150, 0);
    text("FAZENDA SUSTENTÁVEL!", 220, 250);
    noLoop();
  }

  if (plantacao <= 0) {
    textSize(40);
    fill(200, 0, 0);
    text("PLANTAÇÃO PERDIDA!", 250, 250);
    noLoop();
  }
}
