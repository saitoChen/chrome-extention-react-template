/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-07 23:40:49
 * @Description: 
 */
import React from "react";
import { createRoot } from 'react-dom/client'
import '../assets/tailwind.css'

const app = (
    <div>
        <div className="text-5xl">Hello World</div>
    </div>
)

const container = document.createElement('div')
document.body.appendChild(container)

const root = createRoot(container)
root.render(app)