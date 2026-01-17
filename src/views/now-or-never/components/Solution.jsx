import Box from '@mui/material/Box'
import Icon from './ResourceIcons.jsx'
import './Solution.scss'

export default function Solution({ resources, result }) {
  const icons = ['shells', 'hammers', 'demons', 'crystals']

  return (
    <Box className="solution-row">
      <Box className="resources">
        {resources.map((v, i) => (
          <Box key={i} className="solution-item">
            <Box className="solution-number">{v}</Box>
            <Icon name={icons[i]} size={100} />
          </Box>
        ))}
      </Box>

      <Box className="arrow" aria-hidden="true" />

      <Box className="solution-item result-item">
        <Box className="solution-number">{result}</Box>
        <Icon name="coins" size={100} />
      </Box>
    </Box>
  )
}
