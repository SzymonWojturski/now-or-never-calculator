import './CardFlags.scss'

export default function CardFlags({ flags, onChange }) {
  const handleChange = (key) => (e) => {
    onChange({ ...flags, [key]: e.target.checked })
  }

  return (
    <div className="card-flags">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={flags.shellFlag}
          onChange={handleChange('shellFlag')}
        />
        <span className="checkmark" />
        3 shells for 8 coins trade
      </label>

      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={flags.hammerFlag}
          onChange={handleChange('hammerFlag')}
        />
        <span className="checkmark" />
        3 hammers for 10 coins trade
      </label>
    </div>
  )
}
