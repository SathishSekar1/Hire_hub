// import logo from './logo.svg';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { useNavigate } from 'react-router-dom';
import { React, useState } from "react";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productRate, setProductRate] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [image, setImage] = useState("");
  const [result, setResult] = useState(""); 
  const navigate=useNavigate();
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', image);
        formData.append('product', JSON.stringify({product_name: productName, product_description: productDesc, product_rent: productRate, product_category: productCategory}));
    
        const response = await fetch('https://f5e6xkhe5h.execute-api.eu-west-1.amazonaws.com/second/upload', {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            const data = await response.json();
            setResult(data);
            console.log('Success:', result);
            navigate("/home")
        } else {
            console.error('Failed to upload');
        }
    };
  // };

  const handleReset = () => {
      // Reset all state variables here
      setProductName("");
      setProductDesc("");
      setProductRate("");
      setProductCategory("");
      setImage("");
  };

  return (
      <div className="App " >
          <h1>Form in React</h1>
          <fieldset>
              <form action="#" method="get" >
                <Form.Group>
                  <Form.Label for="productName">
                      Product Name
                  </Form.Label>
                  <Form.Control
                      type="text"
                      name="productName"
                      id="productName"
                      className="form-control" 
                      
                      value={productName}
                      onChange={(e) =>
                          setProductName(e.target.value)
                      }
                      placeholder="Enter Product Name"
                      required
                  />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label for="productDesc">Product Desc </Form.Label>
                  <Form.Control
                      type="text"
                      name="productDesc"
                      id="productDesc"
                      className="form-control" 
                      value={productDesc}
                      onChange={(e) =>
                          setProductDesc(e.target.value)
                      }
                      placeholder="Enter Product Desc"
                      required
                  />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label for="productRate">Enter Product Rate </Form.Label>
                  <Form.Control
                      type="text"
                      name="productRate"
                      id="productRate"
                      className="form-control" 
                      value={productRate}
                      onChange={(e) =>
                          setProductRate(e.target.value)
                      }
                      placeholder="Enter product rate"
                      required
                  />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label for="productCategory">ProductCategory*</Form.Label>
                  <Form.Control
                      type="text"
                      name="productCategory"
                      id="productCategory"
                      className="form-control" 
                      value={productCategory}
                      onChange={(e) =>
                          setProductCategory(e.target.value)
                      }
                      placeholder="Enter Product Category "
                      required
                  />
                 </Form.Group>
                  <Form.Group>
                  <Form.Label for="file">Upload Image*</Form.Label>
                  <Form.Control
                      type="file"
                      name="file"
                      id="file"
                      className="form-control" 
                      onChange={(e) =>
                          setImage(e.target.files[0])
                      }
                      placeholder="Enter Upload File"
                      required
                  />
                  </Form.Group>
                  <Form.Group>
                  <Button
                      type="reset"
                      value="reset"
                      className="btn btn-primary"
                      onClick={() => handleReset()}
                  >
                      Reset
                  </Button>
                  <Button
                      type="submit"
                      value="Submit"
                      className="btn btn-primary"
                      onClick={(e) => handleSubmit(e)}
                  >
                      Submit
                  </Button>
                  </Form.Group>
              </form>
          </fieldset>
      </div>
  );
}


export default AddProduct;