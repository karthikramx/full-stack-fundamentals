
import { Button } from './components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import React from 'react'
import './App.css'

function App() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
        <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
       <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
    </div>
  )
}

export default App
