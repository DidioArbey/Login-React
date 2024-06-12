import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRouts } from "../journal/routes/JournalRouts"
import { useSelector } from "react-redux"
import { CheckingAuth } from "../ui/components/CheckingAuth"


export const AppRouter = () => {
  const { status } = useSelector ( state => state.auth );
  if (status === 'checking'){
    return <CheckingAuth />
  }
  return (
    <Routes>
        {/* login y registro */}
        <Route  path="/auth/*" element={ <AuthRoutes/> }  />

        {/* JournalApp */}
        <Route  path="/*" element={ <JournalRouts/> }  />
        
    </Routes>
  )
}
