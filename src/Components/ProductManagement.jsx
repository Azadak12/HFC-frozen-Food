import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });
  const productsRef = collection(db, "products");

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(productsRef);
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    
    fetchProducts();
  }, []);

  // Handle new product form input
  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Add new product to Firestore
  const handleAddProduct = async () => {
    await addDoc(productsRef, {
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
    });
    setNewProduct({ name: "", price: "", description: "" });
  };

  // Handle product update
  const handleUpdateProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, newProduct);
  };

  // Handle product delete
  const handleDeleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
  };

  return (
    <div>
      <h1>Manage Products</h1>
      <div>
        <h2>Add New Product</h2>
        <Form>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
          </InputGroup>
          <Button onClick={handleAddProduct}>Add Product</Button>
        </Form>
      </div>
      
      <div>
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button onClick={() => handleUpdateProduct(product.id)}>Update</Button>
            <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManagement;
