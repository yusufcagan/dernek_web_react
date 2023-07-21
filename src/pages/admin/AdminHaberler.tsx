import React from 'react'
import SideMenu from '../../components/SideMenu'

export default function AdminHaberler() {
  return (
    <div className="flex flex-row items-center min-h-screen bg-gray-100">
    <SideMenu />
    <div className="flex flex-grow justify-center">
      <p className="text-3xl">Admin Haberler</p>
    </div>
  </div>
  )
}
