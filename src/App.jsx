// Supports weights 200-800
import '@fontsource-variable/dosis';
import ImcCalc from './components/ImcCalc';

export default function App() {
  return (
    <div className="flex justify-center items-center h-[500px] w-[450px] bg-[#2d4258] border border-orange-400">
      
      <ImcCalc></ImcCalc>

    </div>
  )
}