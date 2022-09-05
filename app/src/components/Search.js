import axios from "axios"
import {useEffect, useState} from "react";
import Loader from "./Loader";

export default function Search() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchVendor, setSearchVendor] = useState('');
    const [searchBrand, setSearchBrand] = useState('');
    const [searchRef, setSearchRef] = useState('');
    const [searchColor, setSearchColor] = useState('');
    const [searchSize, setSearchSize] = useState('');
    const [searchGender, setSearchGender] = useState('');
    const [searchMaterial, setSearchMaterial] = useState('');
    const [searchType, setSearchType] = useState('');
    const [searchStyle, setSearchStyle] = useState('');

    async function getData() {
        try {
            const response = await axios.get(`http://localhost:8090/api/products`);
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

    const filterProducts = (data, searchVendor, searchBrand, searchRef, searchColor, searchSize, searchGender, searchMaterial, searchType, searchStyle) => {
        if (error) {
            return;
        }

        if (!searchVendor && !searchBrand && !searchRef && !searchColor && !searchSize && !searchGender && !searchMaterial && !searchType && !searchStyle) {
            return data;
        }

        return data.filter((product) => {
            const productVendor = product.product_vendor.toLowerCase();
            const productBrand = product.product_brand.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const productRef = product.product_ref.toLowerCase();
            const productColor = product.product_color_code.toLowerCase() && product.product_color_name.toLowerCase();
            const productSize = product.product_size.toLowerCase();
            const productGender = product.product_gender.toLowerCase();
            const productMaterial = product.product_material.toLowerCase();
            const productType = product.product_type.toLowerCase();
            const productStyle = product.product_style.toLowerCase();
            return productVendor.includes(searchVendor.toLowerCase()) && productBrand.includes(searchBrand.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) && productRef.includes(searchRef.toLowerCase())  && productColor.includes(searchColor.toLowerCase()) && productSize.includes(searchSize.toLowerCase()) && productGender.includes(searchGender.toLowerCase()) && productMaterial.includes(searchMaterial.toLowerCase()) && productType.includes(searchType.toLowerCase()) && productStyle.includes(searchStyle.toLowerCase());
        });
    };
    const filteredProducts = filterProducts(data, searchVendor, searchBrand, searchRef, searchColor, searchSize, searchGender, searchMaterial, searchType, searchStyle);

    useEffect(() => {
        getData().then()
    }, []);

    return(
        <div className={"main"}>
            <section className={"search-section"}>
                <h2>RECHERCHER</h2>
                <div className={"input-container"}>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>FOURNISSEUR</p>
                        </label>
                        <input type="search" placeholder="ALTITUDE EYEWEAR" value={searchVendor} onInput={(e) => {
                            setSearchVendor(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>MARQUE</p>
                        </label>
                        <input type="search" placeholder="AÏE" value={searchBrand} onInput={(e) => {
                            setSearchBrand(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>REFERENCE</p>
                        </label>
                        <input type="search" placeholder="LARL3002" value={searchRef} onInput={(e) => {
                            setSearchRef(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>COULEUR</p>
                        </label>
                        <input type="search" placeholder="NO / NOIR" value={searchColor} onInput={(e) => {
                            setSearchColor(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>TAILLE</p>
                        </label>
                        <input type="search" placeholder="50x20" value={searchSize} onInput={(e) => {
                            setSearchSize(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>SEXE</p>
                        </label>
                        <input type="search" placeholder="MIXTE" value={searchGender} onInput={(e) => {
                            setSearchGender(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>MATERIAU</p>
                        </label>
                        <input type="search" placeholder="PLASTIQUE" value={searchMaterial} onInput={(e) => {
                            setSearchMaterial(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>TYPE</p>
                        </label>
                        <input type="search" placeholder="OPTIQUE" value={searchType} onInput={(e) => {
                            setSearchType(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                    <div className={"search-field"}>
                        <label>
                            <p className={"search-field-name"}>STYLE</p>
                        </label>
                        <input type="search" placeholder="TRADITIONNEL" value={searchStyle} onInput={(e) => {
                            setSearchStyle(e.target.value);
                            getData().then();
                        }}/>
                    </div>
                </div>
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
                    {data && filteredProducts.map(({ product_id, product_vendor, product_brand, product_ref, product_color_code, product_color_name, product_size, product_gender, product_material, product_type, product_style, product_avail, product_booked }) => (
                        <tr key={product_id}>
                            <td>{product_vendor}</td>
                            <td>{product_brand}</td>
                            <td>{product_ref}</td>
                            <td>{product_color_code} / {product_color_name}</td>
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
                {loading &&
                    <div className={"loading"}>
                        <Loader />
                    Chargement...
                    </div>
                }
                {error && (<div className={"error"}>Une erreur est survenue lors du chargement des données - <span className={"search-error"}>{error}</span></div>)}
            </section>
        </div>
    );
}
