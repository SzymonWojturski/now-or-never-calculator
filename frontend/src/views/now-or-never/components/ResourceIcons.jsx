import coins from '/icons/coins.webp'
import shells from '/icons/shell.webp'
import hammers from '/icons/tools.webp'
import demons from '/icons/bottled-demon.webp'
import crystals from '/icons/crystal.webp'

const icons = {
  coins,
  shells,
  hammers,
  demons,
  crystals
}

const iconConfig = {
  coins: { ratio: 100 / 100, padding: 0.01 },
  shells: { ratio: 91 / 100, padding: 0.01 },
  hammers: { ratio: 81 / 100, padding: 0.01 },
  demons: { ratio: 77 / 100, padding: 0.01 },
  crystals: { ratio: 60 / 100, padding: 0.05 }
}

export default function Icon({ name, size = 100 }) {
  const { ratio, padding } = iconConfig[name]

  const iconWidth = size * ratio
  const pad = size * padding

  return (
    <div
      style={{
        width: size + pad,
        height: size + pad,
        padding: pad,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}
    >
      <img
        src={icons[name]}
        width={iconWidth}
        height={size}
        style={{ display: 'block' }}
      />
    </div>
  )
}
