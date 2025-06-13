type WaveSeparatorProps = {
  flip?: boolean;
}

export function TopWaveSeparator(props: Readonly<WaveSeparatorProps>) {
  return (
    <div className={`spacer waves-layered-top-svg ${props.flip ? 'flipHorizontal' : ''}`}></div>
  )
}

export function BottomWaveSeparator(props: Readonly<WaveSeparatorProps>) {
  return (
    <div className={`spacer waves-layered-bottom-svg ${props.flip ? 'flipHorizontal' : ''}`}></div>
  )
}
