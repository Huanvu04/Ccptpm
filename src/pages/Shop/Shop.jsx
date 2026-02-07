// src/pages/Shop/index.jsx
import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import ProductCard from '../../components/features/product/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Gọi API thật để lấy danh sách sản phẩm
        const response = await productApi.getAll();
        setProducts(response.data); // Giả sử API trả về { data: [...] }
      } catch (error) {
        console.error("Lỗi khi lấy hàng nè:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Đang lấy đồ thể thao xịn cho bạn...</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map(item => <ProductCard key={item.id} product={item} />)}
    </div>
  );
};