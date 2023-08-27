
function Invoice () {
    return (
        <div className="shadow-xl w-[100vh] h-[100vh] mx-auto ">
            <h1>Invoice Generator</h1>

            <div>
                <div className="flex w-[100%]">
                    <div className="w-[70%]">
                    Company name(M/S):<input type="text" placeholder="Enter text" className="border-2 border-black rounded-lg w-80"></input>
                    <br></br>
                    Company name(M/S):<input type="text" placeholder="Enter text" className="border-2 border-black rounded-lg w-80"></input>
          

                    </div>
                    <div className="w-[33%]">

                    Bill No:<input type="text" placeholder="Enter text" className="border-2 border-black rounded-lg "></input>
             
               
                Bill Date:<input type="text" placeholder="Enter text" className="border-2 border-black rounded-lg "></input>
                </div>
                </div>
           
            </div>

        </div>
    )
}

export default Invoice;