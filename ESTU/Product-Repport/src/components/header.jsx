// eslint-disable-next-line no-unused-vars
import React from "react"
const  Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Estu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Jadwal Produksi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Laporan Hasil Produksi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Keluar</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Header
