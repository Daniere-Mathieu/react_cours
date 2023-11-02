function Refresh({ onClick }: { onClick: () => void }) {
  return (
    <button className="refresh-btn" aria-label="Refresh" onClick={onClick}>
      🔄
    </button>
  );
}
export default Refresh;
