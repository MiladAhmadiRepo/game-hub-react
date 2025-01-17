

function App() {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2  ">
            {/*First Row with 2 Columns*/}
            <div className="bg-green-300   ">Column 1</div>
            <div className="bg-red-300   ">Column 2</div>

            {/* Second Row with 1 Column (Hidden on Tablet and Larger Screens) */}
            <div className="bg-yellow-400 md:block md:col-span-2 hidden">Column 3</div>
        </div>

  )
}

export default App
