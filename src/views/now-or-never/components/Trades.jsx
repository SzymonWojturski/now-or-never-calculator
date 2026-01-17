import Box from '@mui/material/Box'
import Icon from './ResourceIcons.jsx'

export default function Trades({ values, shellFlag, hammerFlag }) {
  const trades = [
    { resources: ['shells'], reward: 1 },
    { resources: ['hammers'], reward: 2 },
    { resources: ['demons'], reward: 2 },
    { resources: ['crystals'], reward: 2 },
    { resources: ['shells', 'shells', 'shells'], reward: !shellFlag ? 5 : 8 },
    { resources: ['hammers', 'hammers', 'shells'], reward: 7 },
    { resources: ['demons', 'demons', 'hammers'], reward: 9 },
    { resources: ['crystals', 'crystals', 'crystals'], reward: 11 },
    { resources: ['shells', 'hammers', 'demons'], reward: 11 },
    { resources: ['shells', 'hammers', 'demons', 'crystals'], reward: 12 },
    { resources: ['demons', 'demons', 'crystals', 'crystals'], reward: 14 }
  ]

  if (hammerFlag) {
    trades.push({ resources: ['hammers', 'hammers', 'hammers'], reward: 10 })
  }

  return (
    <Box>
      {trades.map((t, i) => (
        <Box key={i} display="flex" alignItems="center" gap={1}>
          {t.resources.map((r, j) => (
            <Icon key={j} name={r}/>
          ))}

          <span>→</span>

          <span>{t.reward}</span>
          {values &&
            <>
              <span>*</span>
              <span>{values[i]}</span>
              <span> = </span>
              <span>{values[i] * t.reward}</span>
            </>
          }
        </Box>
      ))}
    </Box>
  )
}
