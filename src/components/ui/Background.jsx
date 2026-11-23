export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__grid" />
      <div className="bg__glow bg__glow--a" />
      <div className="bg__glow bg__glow--b" />
      <div className="bg__noise" />
    </div>
  )
}
