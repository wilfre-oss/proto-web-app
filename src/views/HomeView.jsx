
export default function HomeView({count, setCount}){
  return (
    <>
      <h1>Nothing here</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={() => setCount(0)}>
            Reset
        </button>
      </div>
    </>
  )
}