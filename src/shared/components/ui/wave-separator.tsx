type WaveSeparatorProps = {
  flip?: boolean;
}

export function TopWaveSeparator(props: WaveSeparatorProps) {
  return (
    <div className={`spacer waves-layered-top-svg ${props.flip ? 'flipHorizontal' : ''}`}></div>
  )
}

export function BottomWaveSeparator(props: WaveSeparatorProps) {
  return (
    <div className={`spacer waves-layered-bottom-svg ${props.flip ? 'flipHorizontal' : ''}`}></div>
  )
}
