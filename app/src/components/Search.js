import {MdAssignment, MdFolderShared, MdOutlineSearch, MdPaid} from "react-icons/md";
import axios from "axios"
import {useEffect, useState} from "react";

export default function Search() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let i = 0;
        async function getData() {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/products`
                );
                console.log(i);
                i++;
                console.log(i);
                console.log(response);
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData().then()
    }, []);

    return(
        <div className={"main"}>
            <section className={"search-section"}>
                <h2>RECHERCHER</h2>
                <p>La fonction de recherche est encore en cours de développement... <br/></p>
                    Toutefois les données affichées sont fetch depuis l'API disponible dans le repo github !
            </section>

            <section className={"search-result"}>
                <table>
                    <thead>
                    <tr>
                        <th>FOURNISSEUR</th>
                        <th>MARQUE</th>
                        <th>REF.</th>
                        <th>COULEUR</th>
                        <th>TAILLE</th>
                        <th>SEXE</th>
                        <th>MATERIAU</th>
                        <th>TYPE</th>
                        <th>STYLE</th>
                        <th>QD</th>
                        <th>QR</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data && data.map(({ product_id, product_vendor, product_brand, product_ref, product_color, product_size, product_gender, product_material, product_type, product_style, product_avail, product_booked }) => (
                        <tr key={product_id}>
                            <td>{product_vendor}</td>
                            <td>{product_brand}</td>
                            <td>{product_ref}</td>
                            <td>{product_color}</td>
                            <td>{product_size}</td>
                            <td>{product_gender}</td>
                            <td>{product_material}</td>
                            <td>{product_type}</td>
                            <td>{product_style}</td>
                            <td>{product_avail}</td>
                            <td>{product_booked}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
