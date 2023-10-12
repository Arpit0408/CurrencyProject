import { useState } from 'react'
import {InputBox} from './Components'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'


function App() {
  const [Amount, setAmount] = useState(0)
  const [from , setfrom] =useState("usd")
  const [To , setTo] =useState("inr")
  const[ConvertedAmount ,setConvertedAmt]=useState('')

const currencyInfo=UseCurrencyInfo(from)

const options=Object.keys(currencyInfo)

const swap=()=>{
  setfrom(To)
  setTo(from)
  setConvertedAmt(Amount)
  setAmount(ConvertedAmount)
}

const convert =()=>{
  setConvertedAmt(Amount*currencyInfo[To])
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/18153675/pexels-photo-18153675/free-photo-of-buildings-and-viaduct-in-downtown-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          Amount={Amount}
                          CurrencyOptions={options}
                          onCurrencyChange={(currency)=>{
                            setAmount(Amount)
                          }}
                          SelectCurrency={from}
                          onAmountchange={(Amount)=>setAmount(Amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                            label="From"
                            Amount={ConvertedAmount}
                            CurrencyOptions={options}
                           onCurrencyChange={(currency)=>{
                            setTo(currency)
                           }}
                            SelectCurrency={To}
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()}To{To.toUpperCase}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
