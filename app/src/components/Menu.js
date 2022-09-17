import {MdAccountCircle, MdSettings, MdLogout, MdOutlineArrowDropDown, MdDashboard, MdOutlineSearch, MdPaid, MdAssignment, MdFolderShared, MdFactCheck} from 'react-icons/md'
import {IoHammerSharp} from 'react-icons/io5'
import { Listbox } from '@headlessui/react'
import {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Menu() {
    const retails = [
        { id: 1, name: 'LookAt Cannes', unavailable: false },
        { id: 2, name: 'LookAt Nice', unavailable: false },
    ]
    const [selectedRetail, setSelectedRetail] = useState(retails[0]);

    return (
        <header>
            <section className={"user-info"}>
                <div className={"mobile-user-bg"}>
                    <MdAccountCircle viewBox={"2 2 20 20"}/>
                </div>
                <div className={"display-user"}>
                    <div>

                        <h2>NOM Prénom</h2>

                        <div className={"retail-location"}>
                            <Listbox value={selectedRetail} onChange={setSelectedRetail}>
                                <Listbox.Button><p>{selectedRetail.name}</p><MdOutlineArrowDropDown viewBox={"7 10 10 5"}/></Listbox.Button>
                                <Listbox.Options>
                                    {retails.map((retail) => (
                                        <Listbox.Option key={retail.id} value={retail} disabled={retail.unavailable}>
                                            {({ active }) => (
                                                <p className={`${active ? 'active-option' : ''}`}>
                                                    {retail.name}
                                                </p>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>

                        </div>
                    </div>

                    <div className={"settings"}>
                        <MdSettings viewBox={"2 2 20 20"}/>
                        <MdLogout viewBox={"2 2 20 20"}/>
                    </div>
                </div>
            </section>

            <nav>
                <ul>

                    <li>
                        <NavLink to="/" exact className={({ isActive }) => isActive ? "menu-selected" : ""}>
                            <MdDashboard viewBox={"2 2 20 20"}/><h3>DASHBOARD</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className={({ isActive }) => isActive ? "menu-selected" : ""}>
                            <MdOutlineSearch viewBox={"2 2 20 20"}/><h3>RECHERCHER</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/workshop" className={({ isActive }) => isActive ? "menu-selected" : ""}>
                            <IoHammerSharp/><h3>ATELIER</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/factures" className={({ isActive }) => isActive ? "menu-selected" : ""}>
                            <MdPaid viewBox={"2 2 20 20"}/><h3>FACTURES</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/commandes" className={({ isActive }) => isActive ? "menu-selected" : ""}>
                            <MdAssignment viewBox={"2 2 20 20"}/><h3>COMMANDES</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dossiers" className={({ isActive }) => isActive ? "menu-selected" : ""}>
                            <MdFolderShared viewBox={"2 2 20 20"}/><h3>DOSSIERS</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservations" className={({ isActive }) => isActive ? "menu-selected" : ""}>
                            <MdFactCheck viewBox={"2 2 20 20"}/><h3>RESERVATIONS</h3>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
