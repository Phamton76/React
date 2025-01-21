import React from 'react'
import '/.style.css'
import { PrimerComponente } from './PrimerComponente'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimerComponente titulo = "esta seccion es de props"/>
    </React.StrictMode>
)