import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Icon from './ResourceIcons.jsx'
import './ResourceInput.scss'

export default function ResourceInput({ value, onChange, min, max, step = 1, iconName }) {
  const increment = () => {
    const newVal = (value || 0) + step
    if (max !== undefined) {
      onChange(Math.min(newVal, max))
    } else {
      onChange(newVal)
    }
  }
  const decrement = () => {
    const newVal = (value || 0) - step
    if (min !== undefined) {
      onChange(Math.max(newVal, min))
    } else {
      onChange(newVal)
    }
  }

  const handleInput = e => {
    let newVal = Number(e.target.value)
    if (!isNaN(newVal)) {
      if (min !== undefined) newVal = Math.max(newVal, min)
      if (max !== undefined) newVal = Math.min(newVal, max)
      onChange(newVal)
    }
  }


  return (
    <Box className="resource-input">
      <button type="button" className="triangle triangle-up" onClick={increment} aria-label="increase">
        <svg viewBox="0 0 24 16" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,0 24,16 0,16" />
        </svg>
      </button>


      <Box className="resource-input-box">
        <TextField
          className="resource-input-field"
          type="number"
          value={value}
          onChange={handleInput}
          inputProps={{ min, step }}
          InputProps={{ disableUnderline: true }}
          variant="standard"
        />
         {iconName && (
          <Box className="resource-input-icon">
            <Icon name={iconName} size={100} />
          </Box>
        )}

     </Box>


      <button type="button" className="triangle triangle-down" onClick={decrement} aria-label="decrease">
        <svg viewBox="0 0 24 16" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 24,0 12,16" />
        </svg>
      </button>
    </Box>
  )
}
