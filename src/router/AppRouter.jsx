import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRouts } from "../journal/routes/JournalRouts"


export const AppRouter = () => {
  return (
    <Routes>
        {/* login y registro */}
        <Route  path="/auth/*" element={ <AuthRoutes/> }  />

        {/* JournalApp */}
        <Route  path="/*" element={ <JournalRouts/> }  />
        
    </Routes>
  )
}
