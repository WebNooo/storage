import React from 'react'
import { FileManager } from '../../ui'
import { Header, Footer } from './components'

import '../../../assets/styles/layouts/user.scss'

export const User: React.FC<{ title?: string }> = ({
  children,
  title = 'Файлы'
}) => {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <div className="content_title">{title}</div>
        <div className="content_body">
          <FileManager />
        </div>
      </main>
      <Footer />
    </div>
  )
}
