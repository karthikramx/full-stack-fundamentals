import { TestContext } from "../context/testContext"
import { useContext } from "react"


export function TestComponent() {

    const { test, setTest } = useContext(TestContext)
    console.log(test)

    return (<div>
        <button onClick={() => { setTest(!test) }}>Click Me!</button>
    </div>)
}