import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a
          href="https://github.com/cjturtle/academic_project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <span className="ms-1">&copy; 2023 project</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://pnc.edu.ph/" target="_blank" rel="noopener noreferrer">
          Students ( Pamantasan ng Cabuyao )
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
