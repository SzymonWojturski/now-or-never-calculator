export default function TradeFlag({ label, checked, onChange }) {
  return (
    <label className="flag-input">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      {label}
    </label>
  )
}
