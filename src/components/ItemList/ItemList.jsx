    import { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import Item from '../Item/Item';
    import Loading from '../Loading/Loading';
    import { getProducts, getProductByCategoria } from '../../data/productos';

    const categorias = [
    { id: 1, nombre: 'Computacion' },
    { id: 2, nombre: 'Videojuegos' },
    { id: 3, nombre: 'Seguridad' },
    { id: 4, nombre: 'Telefonia' },
    { id: 5, nombre: 'Audio' },
    
    ];

    const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
        setLoading(true);
        try {
            const data = categoriaSeleccionada
            ? await getProductByCategoria(categoriaSeleccionada)
            : await getProducts();
            setProducts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };
        fetchProducts();
    }, [categoriaSeleccionada]);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Productos</h2>
        <div className="flex justify-center mb-4">
            <select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            >
            <option value="">inicio</option>
            {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.nombre}>
                {categoria.nombre}
                </option>
            ))}
            </select>
        </div>
        {loading ? (
            <div className="flex justify-center">
            <Loading />
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <div key={product.id} className="bg-white h-full w-full py-4 px-6 flex">
                <Link to={`/item/${product.id}`}>
                    <Item {...product} />
                </Link>
                </div>
            ))}
            </div>
        )}
        </div>
    );
    };

    export default ItemList;