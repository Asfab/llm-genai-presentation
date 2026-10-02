import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const loopSteps = [
  { prompt: 'The cat sat on the', guess: 'car', correct: 'mat', isWrong: true },
  { prompt: 'She went to the', guess: 'park', correct: 'store', isWrong: true },
  { prompt: 'The sun is very', guess: 'bright', correct: 'bright', isWrong: false },
  { prompt: 'I need to charge my', guess: 'horse', correct: 'phone', isWrong: true },
  { prompt: 'He opened the front', guess: 'door', correct: 'door', isWrong: false },
  { prompt: 'They went out for', guess: 'swimming', correct: 'dinner', isWrong: true },
  { prompt: 'The movie was really', guess: 'good', correct: 'good', isWrong: false },
];

const layerSizes = [4, 6, 6, 3];
const layerX = [36, 108, 180, 252];
const svgW = 288;
const svgH = 220;

function getNodeY(layerIdx, nodeIdx) {
  const count = layerSizes[layerIdx];
  const gap = 32;
  const totalH = (count - 1) * gap;
  const startY = (svgH - 30 - totalH) / 2;
  return startY + nodeIdx * gap;
}

function genWeights(seed) {
  const w = [];
  for (let l = 0; l < layerSizes.length - 1; l++) {
    for (let i = 0; i < layerSizes[l]; i++) {
      for (let j = 0; j < layerSizes[l + 1]; j++) {
        const hash = (seed * 31 + l * 7 + i * 13 + j * 17) % 100;
        w.push(0.2 + (hash / 100) * 0.8);
      }
    }
  }
  return w;
}

function NeuralNet({ adjusting, iteration }) {
  const weights = genWeights(iteration);
  const connections = [];
  let idx = 0;
  for (let l = 0; l < layerSizes.length - 1; l++) {
    for (let i = 0; i < layerSizes[l]; i++) {
      for (let j = 0; j < layerSizes[l + 1]; j++) {
        connections.push({
          x1: layerX[l], y1: getNodeY(l, i),
          x2: layerX[l + 1], y2: getNodeY(l + 1, j),
          layer: l, weight: weights[idx], idx,
        });
        idx++;
      }
    }
  }

  return (
    <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`}>
      {connections.map((c) => (
        <motion.line
          key={c.idx}
          x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
          animate={{
            strokeOpacity: adjusting ? [c.weight * 0.4, c.weight * 0.9, c.weight * 0.4] : c.weight * 0.35,
            strokeWidth: adjusting ? [c.weight * 0.8, c.weight * 2.5, c.weight * 0.8] : c.weight * 1,
            stroke: adjusting ? colors.accent : colors.textTertiary,
          }}
          transition={adjusting ? {
            duration: 0.7,
            delay: c.layer * 0.12,
            ease: 'easeInOut',
          } : {
            duration: 0.5,
          }}
        />
      ))}

      {layerSizes.map((count, l) =>
        Array.from({ length: count }).map((_, i) => {
          const cy = getNodeY(l, i);
          const isInput = l === 0;
          const isOutput = l === layerSizes.length - 1;
          const r = isInput || isOutput ? 7 : 5;

          const idleStroke = isInput ? colors.cyan : isOutput ? colors.emerald : colors.textTertiary;
          const activeStroke = isOutput ? colors.rose : colors.accent;

          return (
            <motion.circle
              key={`n-${l}-${i}`}
              cx={layerX[l]}
              cy={cy}
              r={r}
              fill={colors.bg}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: adjusting && !isInput ? [1, 1.4, 1] : 1,
                stroke: adjusting ? activeStroke : idleStroke,
                strokeWidth: isInput || isOutput ? 2 : 1.5,
              }}
              transition={adjusting ? {
                duration: 0.5,
                delay: l * 0.1 + i * 0.02,
              } : {
                duration: 0.4,
                delay: 0.2 + l * 0.06 + i * 0.025,
                ease,
              }}
            />
          );
        })
      )}

      {[
        { x: layerX[0], text: 'Input' },
        { x: (layerX[1] + layerX[2]) / 2, text: 'Hidden layers' },
        { x: layerX[3], text: 'Output' },
      ].map((lbl) => (
        <text
          key={lbl.text}
          x={lbl.x} y={svgH - 4}
          textAnchor="middle"
          fill={colors.textTertiary}
          fontSize="9"
          fontFamily="'DM Sans', sans-serif"
          fontWeight="600"
        >
          {lbl.text}
        </text>
      ))}
    </svg>
  );
}

export default function HowItLearns() {
  const [loopIdx, setLoopIdx] = useState(-1);
  const [adjusting, setAdjusting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoopIdx(0), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loopIdx < 0 || loopIdx >= loopSteps.length) return;

    setShowResult(false);
    setShowCorrect(false);

    const step = loopSteps[loopIdx];
    let t1, t2, t3, t4;

    t1 = setTimeout(() => {
      setShowResult(true);

      if (step.isWrong) {
        t2 = setTimeout(() => {
          setShowCorrect(true);
          setAdjusting(true);
          setIteration((v) => v + 1);

          t3 = setTimeout(() => {
            setAdjusting(false);
            t4 = setTimeout(() => setLoopIdx((c) => c + 1), 600);
          }, 1400);
        }, 1400);
      } else {
        t2 = setTimeout(() => {
          setLoopIdx((c) => c + 1);
        }, 1800);
      }
    }, 1600);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [loopIdx]);

  const current = loopIdx >= 0 && loopIdx < loopSteps.length ? loopSteps[loopIdx] : null;
  const done = loopIdx >= loopSteps.length;

  return (
    <SlideLayout subtitle="Training">
      <Heading
        tag="The Learning Loop"
        sub="Before a model can predict anything, it has to practice — billions of times."
      >
        How does it actually learn?
      </Heading>

      <div style={{ display: 'flex', gap: 20, marginBottom: 20, alignItems: 'stretch' }}>
        <Card delay={0.3} style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: colors.accent,
            }}>
              Training in action
            </div>
            {loopIdx >= 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: colors.textTertiary,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Example {Math.min(loopIdx + 1, loopSteps.length)} / {loopSteps.length}
              </motion.div>
            )}
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 130 }}>
            {current ? (
              <motion.div
                key={loopIdx}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease }}
              >
                <div style={{
                  fontSize: 17,
                  color: colors.text,
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: 16,
                  lineHeight: 1.5,
                  padding: '10px 14px',
                  background: colors.surface,
                  borderRadius: 8,
                  border: `1px solid ${colors.border}`,
                }}>
                  {current.prompt} <span style={{ color: colors.accent }}>___</span>
                </div>

                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ marginBottom: 10 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span style={{
                        fontSize: 12,
                        color: colors.textTertiary,
                        fontWeight: 500,
                        width: 72,
                      }}>
                        Predicted:
                      </span>
                      <span style={{
                        padding: '3px 10px',
                        borderRadius: 5,
                        fontSize: 15,
                        fontWeight: 700,
                        fontFamily: "'DM Mono', monospace",
                        background: current.isWrong ? colors.roseMuted : colors.emeraldMuted,
                        color: current.isWrong ? colors.rose : colors.emerald,
                        border: `1px solid ${current.isWrong ? colors.rose + '30' : colors.emerald + '30'}`,
                      }}>
                        {current.guess}
                      </span>
                      <span style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: current.isWrong ? colors.rose : colors.emerald,
                      }}>
                        {current.isWrong ? '✗' : '✓'}
                      </span>
                    </div>

                    {current.isWrong && showCorrect && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                          <span style={{
                            fontSize: 12,
                            color: colors.textTertiary,
                            fontWeight: 500,
                            width: 72,
                          }}>
                            Expected:
                          </span>
                          <span style={{
                            padding: '3px 10px',
                            borderRadius: 5,
                            fontSize: 15,
                            fontWeight: 700,
                            fontFamily: "'DM Mono', monospace",
                            background: colors.emeraldMuted,
                            color: colors.emerald,
                            border: `1px solid ${colors.emerald}30`,
                          }}>
                            {current.correct}
                          </span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0.8 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ delay: 0.15 }}
                          style={{
                            padding: '5px 12px',
                            background: colors.warmMuted,
                            borderRadius: 6,
                            fontSize: 12,
                            fontWeight: 600,
                            color: colors.warm,
                            display: 'inline-block',
                            transformOrigin: 'left',
                          }}
                        >
                          Backpropagating error → adjusting weights
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ) : done ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: 'center', padding: '10px 0' }}
              >
                <div style={{
                  fontSize: 18,
                  color: colors.emerald,
                  fontWeight: 700,
                  marginBottom: 8,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                }}>
                  Now imagine this — trillions of times.
                </div>
                <div style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.55 }}>
                  Each mistake tunes the network. After enough data,
                  it learns grammar, facts, reasoning — all from next-word prediction.
                </div>
              </motion.div>
            ) : (
              <div style={{ fontSize: 14, color: colors.textTertiary, textAlign: 'center' }}>Loading training data...</div>
            )}
          </div>
        </Card>

        <Card delay={0.4} style={{ width: 320, padding: '16px 16px 10px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 4,
          }}>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: adjusting ? colors.warm : colors.cyan,
              transition: 'color 0.3s',
            }}>
              Neural Network
            </div>
            {adjusting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: colors.warm,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Updating
              </motion.div>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NeuralNet adjusting={adjusting} iteration={iteration} />
          </div>
        </Card>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        {[
          { num: '01', title: 'Forward pass', desc: 'Feed words through the network, get a prediction', color: colors.cyan },
          { num: '02', title: 'Compare', desc: 'How far off was the prediction from the real answer?', color: colors.accent },
          { num: '03', title: 'Backpropagate', desc: 'Trace the error back through every connection', color: colors.warm },
          { num: '04', title: 'Update weights', desc: 'Adjust each connection to reduce the error next time', color: colors.emerald },
        ].map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease }}
            style={{
              flex: 1,
              padding: '14px 16px',
              borderRadius: 10,
              background: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{
              fontSize: 11,
              fontWeight: 800,
              color: s.color,
              marginBottom: 5,
              fontFamily: "'DM Mono', monospace",
            }}>
              {s.num}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.text, marginBottom: 3 }}>
              {s.title}
            </div>
            <div style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 1.45 }}>
              {s.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
