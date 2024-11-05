import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../data/productos'
import Loading from '../Loading/Loading';

export default function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    
    const decrementQuantity = () => {
        if(quantity > 1 ){ 
            setQuantity(quantity - 1)
        }
    }
    const incrementQuantity = () => {
        if(quantity < product.stock){ //
            setQuantity(quantity + 1)
        }
    }


    useEffect(() => {
        getProductById(id).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
            <h1 className="text-3xl font-bold mb-4">{product.nombre}</h1>
            <img src={product.imagen} alt={product.nombre} className="w-min h-min object-cover mb-2" />
            <p className="text-lg mb-4">{product.descripcion}</p>
            <p className="text-lg font-bold mb-4">Precio: ${product.precio.toLocaleString()}</p>
            <p className="text-lg mb-4">Stock: {product.stock}</p>
            <div className='flex justify-center'>
                        <button onClick={decrementQuantity} className='rounded-[5px] hover:bg-blue-700 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> - </button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity} className='rounded-[5px] hover:bg-blue-700 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> + </button>
            </div>
            <p className="text-lg mb-4">Subtotal: ${product.precio * quantity}</p>
            <p className="text-lg mb-4">Categoría: {product.categoria}</p>
            <Link to="/ItemList" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                volver
            </Link>
        </div>
    );
};