import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import './NowOrNever.scss'
import { loadSolver, solveProblem } from './components/Solver'
import ResourceInput from './components/ResourceInput.jsx'
import SolutionQueue from './components/SolutionQueue.jsx'
import CardFlags from "./components/CardFlags.jsx";

function NowOrNever() {
  const [highs, setHighs] = useState(null)
  const [inputs, setInputs] = useState({
    shells: 3,
    hammers: 2,
    demons: 1,
    crystals: 4,
    shellFlag: false,
    hammerFlag: false,
    demonFlag: false
  })
  const [solutions, setSolutions] = useState([])
  const [solverLoading, setSolverLoading] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadSolver()
      .then(h => {
        setHighs(h)
        setSolverLoading(false)
      })
      .catch(err => console.error(err));
  }, []);

  const handleSolve = async () => {
    if (!highs) return
    setLoading(true)
    try {
      const sol = await solveProblem(highs, inputs)
      setSolutions(prev => {
        const next = [
          ...prev,
          {
            resources: [inputs.shells, inputs.hammers, inputs.demons, inputs.crystals],
            result: Math.floor(sol.objective),
            tradeValues: sol.values,
            shellFlag: sol.shellFlag,
            hammerFlag: sol.hammerFlag,
          }
        ]
        return next.length > 4 ? next.slice(next.length - 4) : next
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box className="now-or-never-wrapper">
      <Box className="now-or-never-background" />
      <Box className="now-or-never-content">
        <div className="header-block">
          <h1>Now or Never</h1>
          <p className="subtitle">Optimal Trade Calculator</p>
        </div>

        <p className="description">
          Fill in your resources, confirm whether you have the necessary cards for better trades, and check the most profitable exchanges.
        </p>

        <Box className="inputs-row">
          {['shells', 'hammers', 'demons', 'crystals'].map(key => (
            <ResourceInput
              key={key}
              value={inputs[key]}
              onChange={val => setInputs(prev => ({ ...prev, [key]: val }))}
              iconName={key}
              min={0}
              max={2048}
            />
          ))}
        </Box>

        <CardFlags
          flags={{ shellFlag: inputs.shellFlag, hammerFlag: inputs.hammerFlag }}
          onChange={(newFlags) => setInputs(prev => ({ ...prev, ...newFlags }))}
        />

        <div className="button-wrapper">
          <button
            className="button-solve"
            onClick={handleSolve}
            disabled={solverLoading || loading}
          >
            {loading ? <span className="btn-loading">...</span> : 'Calculate'}
          </button>
        </div>

        {solutions.length > 0 && (
          <>
            <div className="section-label">Last {solutions.length} calculation{solutions.length > 1 ? 's' : ''} (max 4)</div>
            <SolutionQueue solutions={solutions} />
          </>
        )}
      </Box>
    </Box>
  )
}

export default NowOrNever
