import { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaShare } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const ProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [isWishlist, setIsWishlist] = useState(false);
    const { addToCart } = useCart();

    const handleQuantityChange = (value) => {
        const newQuantity = quantity + value;
        if (newQuantity > 0 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity }, 'product');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <div className="bg-white rounded-lg overflow-hidden mb-4">
                    <img
                        src={selectedImage}
                        alt={product.name}
                        className="w-full h-96 object-contain"
                    />
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {[product.image, ...product.features.slice(0, 3).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedImage(product.image)}
                            className={`border rounded-md overflow-hidden ${selectedImage === product.image ? 'border-primary-600' : 'border-gray-200'}`}
                        >
                            <img
                                src={product.image}
                                alt={`Preview ${i + 1}`}
                                className="w-full h-20 object-cover"
                            />
                        </button>
                    ))]}
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'} />
                        ))}
                    </div>
                    <span className="text-gray-500">({product.rating}) | {product.stock} en stock</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-2xl font-bold text-primary-600 mb-2">{product.price.toFixed(2)}€</p>
                    <p className="text-gray-600">{product.description}</p>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Caractéristiques:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {product.features.map((feature, i) => (
                            <li key={i} className="text-gray-700">{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                            -
                        </button>
                        <span className="px-4 py-2">{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
                    >
                        <FaShoppingCart className="mr-2" />
                        Ajouter au panier
                    </button>

                    <button
                        onClick={() => setIsWishlist(!isWishlist)}
                        className={`p-3 rounded-full ${isWishlist ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
                    >
                        <FaHeart />
                    </button>

                    <button className="p-3 rounded-full text-gray-400 hover:text-primary-600 hover:bg-primary-50">
                        <FaShare />
                    </button>
                </div>

                <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Catégorie:</span>
                        <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600">Livraison:</span>
                        <span className="font-medium">
                            {product.deliveryOptions.map(opt =>
                                opt === 'standard' ? 'Standard' :
                                    opt === 'express' ? 'Express' :
                                        'Le jour même'
                            ).join(', ')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;