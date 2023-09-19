import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MachineNav from "./MachineNav";
import Snack from "./Snack";


const VendingMachine = () => {

    const snacks = [
        {name: "Chips", image: "https://images.pexels.com/photos/479628/pexels-photo-479628.jpeg"},
        {name: "Cold Snack", image: "https://montuckycoldsnacks.com/wp-content/uploads/2022/02/16oz-300ppi.png"},
        {name: "Ranch", image: "https://target.scene7.com/is/image/Target/GUEST_6d7b499f-f90c-439f-9c78-e582ec70c9b4?wid=488&hei=488&fmt=pjpeg"}
      ]

      console.log(snacks)

    return (
        <div>

            <BrowserRouter>

                <Routes>

                    <Route exact path="/" element={<MachineNav />} />

                    <Route exact path="/chips" element={<Snack snack={snacks[0]}/>} />
                    <Route exact path="/cold-snack" element={<Snack snack={snacks[1]}/>} />
                    <Route exact path="/ranch" element={<Snack snack={snacks[2]}/>} />

                </Routes>

            </BrowserRouter>

            {/* {snacks.map(s => <Snack snack={s}/>)} */}



        </div>
    )

}

export default VendingMachine;