"use client";

// Componente voltado para estudo

import { useState } from "react";

// motion  — componente animável do Framer Motion
// Variants — tipo TypeScript para definir os estados de animação nomeados
import { motion, Variants } from "motion/react";

// Constantes & Utils
import { TestimonialsCards } from "@/constants";
import { cn } from "@/lib/utils";
import TestimonialCard from "./TestimonialCard";

// ─── Tipos ────────────────────────────────────────────────────────────────────

// Descreve a posição e rotação de um card em um determinado estado.
type CardPosition = {
  x: number; // deslocamento horizontal em px a partir do centro do container
  y: number; // deslocamento vertical em px a partir do centro do container
  rotate: number; // rotação em graus
  zIndex: number; // qual card fica "na frente" (maior = mais à frente)
};

// ─── Posições: estado "empilhado" ─────────────────────────────────────────────
//
// Estado inicial: todos os cards estão concentrados ao redor do centro,
// com rotações grandes e zIndex variados, imitando post-its jogados numa mesa.
//
// Os valores x/y são deltas em pixels a partir do ponto de ancoragem (centro
// do container). O Framer Motion aplica esses valores como transform: translate().
const stackedPositions: CardPosition[] = [
  { x: 0, y: -90, rotate: 10, zIndex: 2 }, // card 0 — cinza (centro-alto, atrás)
  { x: -190, y: 20, rotate: -10, zIndex: 3 }, // card 1 — verde (esquerda)
  { x: 200, y: -60, rotate: -6, zIndex: 3 }, // card 2 — azul (direita-alto)
  { x: -150, y: 170, rotate: 10, zIndex: 5 }, // card 3 — rosa (centro, na frente)
  { x: 105, y: 200, rotate: -10, zIndex: 4 }, // card 4 — laranja (baixo-direita)
];

// ─── Posições: estado "espalhado" ────────────────────────────────────────────
//
// Estado ativado ao hover: os cards se afastam para um layout de 3 (topo) + 2
// (base), mas com rotações leves e offsets irregulares — como adesivos
// colados de forma relaxada, não uma grade perfeita.
//
// Layout (vista de cima):
//   [ cinza (0) ]    ← centro-topo
//   [ verde (1) ]  [ azul (2) ]  ← flancos
//   [ rosa (3) ] [ laranja (4) ] ← base-centro
const spreadPositions: CardPosition[] = [
  { x: 0, y: -160, rotate: 0, zIndex: 1 }, // card 0 — cinza (centro-topo)
  { x: -360, y: -130, rotate: 0, zIndex: 1 }, // card 1 — verde (esquerda)
  { x: 360, y: -110, rotate: 0, zIndex: 1 }, // card 2 — azul (direita)
  { x: -185, y: 270, rotate: 0, zIndex: 1 }, // card 3 — rosa (baixo-esq)
  { x: 185, y: 290, rotate: 0, zIndex: 1 }, // card 4 — laranja (baixo-dir)
];

// ─── Variantes de animação por card ──────────────────────────────────────────
//
// Cada card recebe dinamicamente suas variantes com base no índice.
// A função retorna um objeto Variants com dois estados nomeados:
//   "stacked"  → posição empilhada (estado de repouso)
//   "spread"   → posição espalhada (estado de hover)
//
// Usar funções para gerar variantes é uma prática comum quando os valores
// precisam ser diferentes para cada elemento (ex: posições únicas por card).
const createCardVariants = (index: number): Variants => ({
  stacked: {
    x: stackedPositions[index].x,
    y: stackedPositions[index].y,
    rotate: stackedPositions[index].rotate,
    zIndex: stackedPositions[index].zIndex,
    transition: {
      type: "spring",
      stiffness: 60, // mola mais suave ao voltar (para não ser abrupto)
      damping: 15,
    },
  },
  spread: {
    x: spreadPositions[index].x,
    y: spreadPositions[index].y,
    rotate: spreadPositions[index].rotate,
    zIndex: spreadPositions[index].zIndex,
    transition: {
      // "spring" dá a sensação de física real ao abrir os cards,
      // como se cada um "saltasse" para sua posição.
      type: "spring",
      stiffness: 90,
      damping: 18,
      // delay escalonado: cada card começa a mover-se 0.06s depois do anterior.
      // Isso cria o efeito de "leque" se abrindo de forma sequencial.
      delay: index * 0.06,
    },
  },
});

// ─── Componente TestimonialGrid ────────────────────────────────────────────────

const TestimonialGrid = () => {
  // isHovered controla qual estado de animação está ativo.
  // false → "stacked"  |  true → "spread"
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Container principal: visível apenas em lg+ (display:none abaixo disso).
    //
    // position:relative é ESSENCIAL — ele define o ponto de referência para
    // os cards position:absolute que ficam dentro dele.
    //
    // h-[660px] garante espaço suficiente para os cards espalhados.
    // No estado empilhado, a maioria do espaço fica vazio, mas isso é intencional
    // (a pilha fica centralizada nessa área).
    //
    // onMouseEnter/onMouseLeave atualiza o estado que controla a animação.
    // cursor-pointer sinaliza ao usuário que a área é interativa.
    <div
      className="hidden lg:block relative w-full h-[660px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {TestimonialsCards.map((testimony, index) => {
        // Geramos as variantes específicas para este card (com suas posições únicas).
        const variants = createCardVariants(index);

        return (
          // Cada card vive dentro de um wrapper absolute que cobre todo o container.
          // Esse wrapper usa flex para centralizar o card exatamente no meio
          // do container — sem depender de medidas fixas do card.
          //
          // Assim, o ponto de ancoragem de todos os cards é o CENTRO do container,
          // e o Framer Motion desloca cada um a partir daí com x/y.
          <div
            key={testimony.authorKey}
            className="absolute inset-0 flex items-center justify-center"
            // pointer-events:none no wrapper para não interferir no onMouseEnter
            // do container pai. O card dentro recebe os eventos.
            style={{ pointerEvents: "none" }}
          >
            {/*
              motion.div — o card animado.

              variants → aponta para as regras de animação criadas acima.

              initial → estado de partida ao montar o componente ("stacked").

              animate → muda entre "stacked" e "spread" conforme o hover.
                Quando isHovered muda de false para true, o Framer Motion
                interpola suavemente de um estado para o outro usando
                a transition definida dentro da variante.

              whileHover → animação adicional ao passar o mouse SOBRE O CARD
                (diferente do hover do container pai). Aqui o card cresce
                levemente e levanta uma sombra mais pronunciada.

              style={{ pointerEvents: "auto" }} → reativa eventos no card
                (desativados no wrapper acima).
            */}
            <motion.div
              variants={variants}
              initial="stacked"
              animate={isHovered ? "spread" : "stacked"}
              whileHover={{
                scale: 1.05,
                // Aumenta a sombra para dar sensação de "levitar" ao passar o mouse
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className={cn(
                "w-[280px] rounded-3xl p-7 flex flex-col gap-5 items-center",
                // Sombra base: presente o tempo todo, dá profundidade à pilha
                "shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                testimony.bgColor,
              )}
              style={{ pointerEvents: "auto" }}
            >
              <TestimonialCard testimony={testimony} />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialGrid;
