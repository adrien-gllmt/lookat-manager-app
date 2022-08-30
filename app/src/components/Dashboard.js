import {MdOutlineSearch, MdPaid, MdAssignment, MdFolderShared} from 'react-icons/md'
import {NavLink} from "react-router-dom";

export default function Dashboard() {
    return (
        <div className={"main"}>
            <section className={"atelier"}></section>

            <section className={"dashboard"}>
                <div className={"container"}>
                    <div className={"subcontainer"}>
                        <div className={"informations"}></div>
                        <div className={"tiles-container"}>
                            <div>
                                <NavLink to="/search">
                                    <MdOutlineSearch/>
                                </NavLink>
                            </div>

                            <div>
                                <MdPaid/>
                            </div>

                            <div>
                                <MdAssignment/>
                            </div>

                            <div>
                                <MdFolderShared/>
                            </div>
                        </div>
                    </div>
                    <div className={"subcontainer"}>
                        <div className={"appointment"}></div>
                        <div className={"manage-stock"}></div>
                    </div>
                </div>

                <div className={"booked"}></div>
            </section>
        </div>
    );
}
