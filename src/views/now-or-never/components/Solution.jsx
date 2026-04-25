import Box from '@mui/material/Box'
import Icon from './ResourceIcons.jsx'
import './Solution.scss'

const TRADES = [
  { resources: ['shells'],                                label: '1× Shell',            baseReward: 1  },
  { resources: ['hammers'],                               label: '1× Hammer',           baseReward: 2  },
  { resources: ['demons'],                                label: '1× Demon',            baseReward: 2  },
  { resources: ['crystals'],                              label: '1× Crystal',          baseReward: 2  },
  { resources: ['shells', 'shells', 'shells'],            label: '3× Shell',            baseReward: 5, shellFlagReward: 8 },
  { resources: ['hammers', 'hammers', 'shells'],          label: '2× Hammer + Shell',   baseReward: 7  },
  { resources: ['demons', 'demons', 'hammers'],           label: '2× Demon + Hammer',   baseReward: 9  },
  { resources: ['crystals', 'crystals', 'crystals'],      label: '3× Crystal',          baseReward: 11 },
  { resources: ['shells', 'hammers', 'demons'],           label: 'Shell+Hammer+Demon',  baseReward: 11 },
  { resources: ['shells', 'hammers', 'demons', 'crystals'], label: 'All 4 resources',   baseReward: 12 },
  { resources: ['demons', 'demons', 'crystals', 'crystals'], label: '2× Demon+Crystal', baseReward: 14 },
  { resources: ['hammers', 'hammers', 'hammers'],         label: '3× Hammer',           baseReward: 10, hammerFlagOnly: true },
]

export default function Solution({ resources, result, tradeValues, shellFlag, hammerFlag }) {
  const icons = ['shells', 'hammers', 'demons', 'crystals']

  const activeTrades = tradeValues
    ? TRADES
        .filter((t, i) => {
          if (t.hammerFlagOnly && !hammerFlag) return false
          return tradeValues[i] > 0
        })
        .map((t, idx) => {
          const i = TRADES.indexOf(t)
          const count = tradeValues[i]
          const reward = (t.shellFlagReward && shellFlag) ? t.shellFlagReward : t.baseReward
          return { ...t, count, reward, total: count * reward }
        })
    : []

  return (
    <Box className="solution-row">
      <Box className="solution-top">
        <Box className="resources">
          {resources.map((v, i) => (
            <Box key={i} className="solution-item">
              <Box className="solution-number">{v}</Box>
              <Icon name={icons[i]} size={80} />
            </Box>
          ))}
        </Box>

        <Box className="arrow" aria-hidden="true" />

        <Box className="solution-item result-item">
          <Box className="solution-number result-number">{result}</Box>
          <Icon name="coins" size={80} />
        </Box>
      </Box>

      {activeTrades.length > 0 && (
        <Box className="trades-breakdown">
          <div className="trades-title">Trade breakdown</div>
          <div className="trades-list">
            {activeTrades.map((t, i) => (
              <div key={i} className="trade-row">
                <div className="trade-icons">
                  {t.resources.map((r, j) => (
                    <Icon key={j} name={r} size={28} />
                  ))}
                </div>
                <div className="trade-meta">
                  <span className="trade-count">×{t.count}</span>
                  <span className="trade-sep">→</span>
                  <span className="trade-reward">{t.reward} coins</span>
                  <span className="trade-sep">=</span>
                  <span className="trade-total">{t.total} coins</span>
                </div>
              </div>
            ))}
          </div>
        </Box>
      )}
    </Box>
  )
}
