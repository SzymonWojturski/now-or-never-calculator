import Box from '@mui/material/Box'
import Solution from './Solution.jsx'
import './SolutionQueue.scss'

export default function SolutionQueue({ solutions }) {
  return (
    <Box className="solution-queue">
      {[...solutions].reverse().map((item, i) => (
        <Solution
          key={i}
          resources={item.resources}
          result={item.result}
        />
      ))}
    </Box>
  )
}
