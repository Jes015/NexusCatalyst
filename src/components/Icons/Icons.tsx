interface props {
  width: string
  height: string
}

const AddIcon = ({ width, height }: props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height={height}
      width={width}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
  )
}

function RemoveIcon ({ width, height }: props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height={height}
      width={width}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M18.947 17.153l26.098 25.903M19.045 43.153l25.902-26.097"
      />
    </svg>
  )
}

export { AddIcon, RemoveIcon }
