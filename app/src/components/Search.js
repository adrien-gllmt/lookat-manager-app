import axios from "axios"
import {useEffect, useState} from "react";
import Loader from "./Loader";
import { normalizeStr } from "../utils";

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
            const productVendor = normalizeStr(product.product_vendor);
            const productBrand = normalizeStr(product.product_brand);
            const productRef = normalizeStr(product.product_ref);
            const productColor = normalizeStr(product.product_color_code) && normalizeStr(product.product_color_name);
            const productSize = normalizeStr(product.product_size);
            const productGender = normalizeStr(product.product_gender);
            const productMaterial = normalizeStr(product.product_material);
            const productType = normalizeStr(product.product_type);
            const productStyle = normalizeStr(product.product_style);
            return productVendor.includes(normalizeStr(searchVendor)) && productBrand.includes(normalizeStr(searchBrand)) && productRef.includes(normalizeStr(searchRef)) && productColor.includes(normalizeStr(searchColor)) && productSize.includes(normalizeStr(searchSize)) && productGender.includes(normalizeStr(searchGender)) && productMaterial.includes(normalizeStr(searchMaterial)) && productType.includes(normalizeStr(searchType)) && productStyle.includes(normalizeStr(searchStyle));
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
