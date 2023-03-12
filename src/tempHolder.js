
const EffectDemo = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  //example one: runs once
  useEffect(() => {
    // just contains the first argument which is the callback function
    // so this function will be called after every render
    console.log("hi! this happens with every render")
  })

  //example 2: runs twice
  useEffect(() => {
    // contains the first argument and an empty dependancy array
    // so this function will just run on mount
    console.log("hi! this happens on mount")
  }, [])

  // example 3
  useEffect(() => {
    // contains the first argument and a dependency array with a state variable in it to watch
    // so this function will happen on mount, and every time count updates

    console.log("hi! this happens when count updates and on mount ", count)
  // don't do this:  setCount(count+1)  --basically don't set the state inside of the useEffect that will cause dependency array to change with each iteration, you'll get an infinitely called fxn
  // you could do this because it is more restrictive:  if(count===2)
  
  }, [count])

  
  return (
    <>
      < button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      < button onClick={() => setCount(0)}>Reset</button>
      <form>
        <input onChange={(e) => setText(e.target.value)} value={text} />
      </form>
    </>
  )
}

export default EffectDemo;