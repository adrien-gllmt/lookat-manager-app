import {MdOutlineSearch, MdPaid, MdAssignment, MdFolderShared} from 'react-icons/md'
import {NavLink} from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
    const options = {
        cutout: window.innerWidth < 768 ? 30 : 70,
        rotation: -90,
        layout: {
            padding: 0,
        },
    }

    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [2500, 1000],
                backgroundColor: [
                    '#98EB8A',
                    '#F0F3F5',
                ],
                hoverBackgroundColor: [
                    '#98EB8A',
                    '#F0F3F5',
                ],
                borderWidth: 0,
            },
        ],
    };
    return (
        <div className={"main"}>
            <section className={"atelier"}>
                <h2>ATELIER</h2>
                <div className={"workshop"}>
                    <div className={"table-container"}>
                        <table>
                            <thead>
                                <tr>
                                    <th>A faire :</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Changement de branche</td>
                                    <td>28/07/2022</td>
                                </tr>
                                <tr>
                                    <td>Changement de branche</td>
                                    <td>28/07/2022</td>
                                </tr>
                                <tr>
                                    <td>Changement de branche</td>
                                    <td>28/07/2022</td>
                                </tr>
                            </tbody>
                        </table>
                        <button>Et 2 de plus ...</button>
                    </div>
                    <div className={"table-container"}>
                        <table>
                            <thead>
                            <tr>
                                <th>En attente :</th>
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Changement de branche</td>
                                <td>28/07/2022</td>
                            </tr>
                            <tr>
                                <td>Changement de branche</td>
                                <td>28/07/2022</td>
                            </tr>
                            <tr>
                                <td>Changement de branche</td>
                                <td>28/07/2022</td>
                            </tr>
                            </tbody>
                        </table>
                        <button>Et 2 de plus ...</button>
                    </div>
                    <div className={"table-container"}>
                        <table>
                            <thead>
                            <tr>
                                <th>Termin?? :</th>
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Changement de branche</td>
                                <td>BOUCHEZ C.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={"dashboard"}>
                <div className={"container"}>
                    <div className={"subcontainer"}>
                        <div className={"informations"}>
                            <div className={"display-informations"}>
                                <h2>INFORMATIONS</h2>
                                <div className={"today-chart"}>
                                    <Doughnut data={data} options={options} />
                                </div>
                            </div>
                            <table className={"shop-stats"}>
                                <thead>
                                    <tr><th> </th><th>Aujourd'hui</th><th>Hier</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DEVIS</td>
                                        <td>0</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>VENTES</td>
                                        <td>1</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>RESERV.</td>
                                        <td>2</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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
                        <div className={"appointment"}>
                            <h2>RENDEZ-VOUS</h2>
                            <p>PROCHAIN</p>
                        </div>
                        <div className={"manage-stock"}>
                            <h2>G??rer le stock</h2>

                            <div className={"stock-stats"}>
                                <div className={"display-stock-state"}>
                                    <p>Disponible</p>
                                    <div><p>20</p></div>
                                </div>

                                <div className={"display-stock-state"}>
                                    <p>R??serv??</p>
                                    <div><p>6</p></div>
                                </div>

                                <div className={"display-stock-state"}>
                                    <p>Command??</p>
                                    <div><p>0</p></div>
                                </div>

                                <div className={"display-stock-state"}>
                                    <p>Hors stock</p>
                                    <div><p>1</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"booked"}>
                    <h2>R??servations</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>NOM</th>
                                <th>REF.</th>
                                <th>STATUT</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>DOE J.</td>
                                <td>LM352</td>
                                <td><span><div className={"res-ready"}></div> Pr??t</span></td>
                            </tr>
                            <tr>
                                <td>DOE J.</td>
                                <td>LM352</td>
                                <td><span><div className={"res-pending"}></div> Attente</span></td>
                            </tr>
                            <tr>
                                <td>DOE J.</td>
                                <td>LM352</td>
                                <td><span><div className={"res-todo"}></div> Non pr??t</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
