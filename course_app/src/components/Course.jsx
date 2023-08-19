import {useState,useEffect} from 'react';
import {Card,Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import './Courses.css';
import './InvestorDetails.css';


export default function Course(){
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCourse(data.courses.find((course)=>course.id==id));
        })
    },[])
    //INVESTOR DETAILS
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
    //
    const productsPot = [
        {
          id: 1,
          title: 'Pot 1',
          description: 'Product 1 Description',
          price: 99.99,
          image: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/05/style_store-2.jpg',
        },
        {
          id: 2,
          title: 'Pot 2',
          description: 'Product 2 Description',
          price: 79.99,
          image: 'https://images.squarespace-cdn.com/content/v1/5f7d822f9176547c7c6697f7/1620338476648-YMNZB9MMEVFO4N9NJG1W/.Lisa+2.jpg',
        },
        // Add more product objects here
      ];

      const productsText = [
        {
          id: 1,
          title: 'Cloth 1',
          description: 'Product 1 Description',
          price: 99.99,
          image: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/08/Handmade-skirt-with-embroidery-and-mirror-work.jpg',
        },
        {
          id: 2,
          title: 'Cloth 2',
          description: 'Product 2 Description',
          price: 79.99,
          image: 'https://media.cntraveler.com/photos/5571e4673a5d79a77fcc7943/master/w_320%2Cc_limit/textiles-kente-ghana-cr-getty.jpg',
        },
        {
          id: 3,
          title: 'Cloth 3',
          description: 'Product 3 Description',
          price: 79.99,
          image:'https://www.gitagged.com/wp-content/uploads/2021/01/bomkai-handloom-sarees-1.jpg',
        }
        // Add more product objects here
      ];

      const productsMask = [
        {
          id: 1,
          title: 'Mask 1',
          description: 'Product 1 Description',
          price: 99.99,
          image: 'https://s01.sgp1.cdn.digitaloceanspaces.com/article/161095-btgwrvyotx-1625326465.jpg',
        },
        {
          id: 2,
          title: 'Mask 2',
          description: 'Product 2 Description',
          price: 79.99,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Drishti_Bommai_stall_in_South_india.jpg/800px-Drishti_Bommai_stall_in_South_india.jpg',
        },
        // Add more product objects here
      ];

      //location for potman
      const potlocation = "https://www.google.com/maps/@13.144142,77.5696287,3a,30y,321.43h,84.24t/data=!3m7!1e1!3m5!1sqdNfmUQk7kdcJDZLijsvuA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DqdNfmUQk7kdcJDZLijsvuA%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D281.50342%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu";
      //location for maskman
      const maskman ="https://www.google.com/maps/@13.1443632,77.5696516,3a,82y,290.3h,87.07t/data=!3m6!1e1!3m4!1s4iBjSLbw7rkgdpp_dAEnnA!2e0!7i13312!8i6656?entry=ttu";
      //location for textileman
      const textileman ="";


      //For pot
      if (id==2){
        return (
          <div className="font-sans bg-gray-100">
            <header className="bg-white shadow-md py-4">
              <div className="container mx-auto px-4"style={{width:805}}>
                <h1 className="text-2xl font-semibold">Get to Know the Hands behind the art</h1>
              </div>
            </header>
      
            <main className="container mx-auto px-4 py-8">
              <div className="bg-white p-6 shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <img src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/87333/147707/1659418431360_IMG_20210102_125836__24358.1660721298.jpg?c=2" alt="Seller Photo" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">Mr Mahesh</h2>
                    <a href={potlocation} class="text-gray-600">123 Main Street</a>
                    <a href={potlocation} class="text-gray-600">City, State ZIP</a>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                  </div>
                </div>
              </div>
      
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div style={{display:'flex',justifyContent:"center",background:"white",width:"100vw"}}>
                  {productsPot.map(product => (
                    <Card style={{
                      margin:50,
                      width:250,
                      height:400,
                      alignContent:'center'
                   }}>

                      <div key={product.id} className="bg-white p-6 shadow-md" >
                      <Card style={{width:200,height:200}}>
                        <img src={product.image} style={{width:"100%",height:"100%",objectFit:"cover"}} alt={product.title} className="w-full mb-4" />
                      </Card>
                      
                      <h2 className="text-lg font-semibold">{product.title}</h2>
                      <p className="text-gray-600">{product.description}</p>
                      <p className="text-lg text-green-600">${product.price}</p>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                          Add to Cart
                      </button>
                      </div>

                    </Card>
                    
                  ))}
                </div>
                      
              </section>
              <div className="container">
                <h1>Investor Details</h1>
                <div className="investor-details">
                  <h2>Lorem Ipsum</h2>
                  <p><strong>Email:</strong> lorem.ipsum@example.com</p>
                  <p><strong>Investment Amount:</strong> $50,000</p>
                  <p><strong>Investment Type:</strong> Equity</p>
                </div>
                <br/><br/>
                <div className="interest-section">
                  <h2>Are you interested in investing in this product?</h2><br/>
                  <div style={{display:'flex'}}>
                    <p>Please leave your details here for pottery .   </p><br/>
                    <button className="interest-button" onClick={togglePopup}>Express Interest</button>
                  </div>
                  
                </div>

                {showPopup && (
                  <div className="popup">
                    <div className="popup-content">
                      <br/>
                      <h2>Leave Your Details</h2>
                      <br/>
                      <p>Please provide your contact details so we can get in touch with you:</p>
                      <input type="text" className="contact-input" placeholder="Your Name" />
                      <input type="email" className="contact-input" placeholder="Your Email" />
                      <input type="tel" className="contact-input" placeholder="Your Phone" />
                      <br/>
                      <button className="submit-button">Submit</button>
                      <button className="close-button" onClick={togglePopup}>Close</button>
                    </div>
                  </div>
                )}
              </div>
            </main>
      
            <footer className="bg-gray-800 text-white text-center py-4">
              <p>&copy; 2023 Seller Name. All rights reserved.</p>
            </footer>
          </div>
        );
      }
      //for textile
      else if(id==3){
        return (
          <div className="font-sans bg-gray-100">
            <header className="bg-white shadow-md py-4">
              <div className="container mx-auto px-4"style={{width:805}}>
                <h1 className="text-2xl font-semibold">Get to Know the Hands behind the art</h1>
              </div>
            </header>
      
            <main className="container mx-auto px-4 py-8">
              <div className="bg-white p-6 shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <img src="https://media.istockphoto.com/id/531553340/photo/indian-woman-selling-colorful-fabrics.jpg?s=1024x1024&w=is&k=20&c=bT87gP-M_Ba-ulQSYb0dIqzu9gpMSrzho-FVcA9jiJU=" alt="Seller Photo" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">Mrs. Ranjitha</h2>
                    <p className="text-gray-600">123 Main Street</p>
                    <p className="text-gray-600">City, State ZIP</p>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                  </div>
                </div>
              </div>
      

                <div style={{display:'flex',justifyContent:'center',background:'white'}}>
                  {productsText.map(product => (
                    <Card style={{
                      width:330,
                      height:400,
                   }}>
                      <div>
                      <div key={product.id} className="bg-white p-6 shadow-md">
                      <Card style={{width:150,height:200}}>
                        <img src={product.image} style={{width:"100%",height:"100%",objectFit:"cover"}} alt={product.title} className="w-full mb-4" />
                      </Card>
                      
                      <h2 className="text-lg font-semibold">{product.title}</h2>
                      <p className="text-gray-600">{product.description}</p>
                      <p className="text-lg text-green-600">${product.price}</p>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                          Add to Cart
                      </button>
                      </div>
                      </div>
                    </Card>
                    
                  ))}
                </div>

              <div className="container">
                <h1>Investor Details</h1>
                <div className="investor-details">
                  <h2>Lorem Ipsum</h2>
                  <p><strong>Email:</strong> lorem.ipsum@example.com</p>
                  <p><strong>Investment Amount:</strong> $50,000</p>
                  <p><strong>Investment Type:</strong> Equity</p>
                </div>
                <br/><br/>
                <div className="interest-section">
                  <h2>Are you interested in investing in this product?</h2><br/>
                  <div style={{display:'flex'}}>
                    <p>Please leave your details here.   </p>
                    <button className="interest-button" onClick={togglePopup}>Express Interest</button>
                  </div>
                  
                </div>

                {showPopup && (
                  <div className="popup">
                    <div className="popup-content">
                      <br/>
                      <h2>Leave Your Details</h2>
                      <br/>
                      <p>Please provide your contact details so we can get in touch with you:</p>
                      <input type="text" className="contact-input" placeholder="Your Name" />
                      <input type="email" className="contact-input" placeholder="Your Email" />
                      <input type="tel" className="contact-input" placeholder="Your Phone" />
                      <br/>
                      <button className="submit-button">Submit</button>
                      <button className="close-button" onClick={togglePopup}>Close</button>
                    </div>
                  </div>
                )}
              </div>
            </main>
      
            <footer className="bg-gray-800 text-white text-center py-4">
              <p>&copy; 2023 Seller Name. All rights reserved.</p>
            </footer>
          </div>
        );
      }
      

      //for mask
      else if(id ==4){
        return (
          <div className="font-sans bg-gray-100">
            <header className="bg-white shadow-md py-4">
              <div className="container mx-auto px-4"style={{width:805}}>
                <h1 className="text-2xl font-semibold">Get to Know the Hands behind the art</h1>
              </div>
            </header>
      
            <main className="container mx-auto px-4 py-8">
              <div className="bg-white p-6 shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <img src="https://static.toiimg.com/thumb/imgsize-23456,msid-76449515,width-600,resizemode-4/76449515.jpg" alt="Seller Photo" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">Mr Raejsh</h2>
                    <a href={maskman} class="text-gray-600">123 Main Street</a>
                    <a href={maskman} class="text-gray-600">City, State ZIP</a>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                  </div>
                </div>
              </div>
      
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div style={{display:'flex',justifyContent:'center',background:"white",width:"100vw"}}>
                  {productsMask.map(product => (
                    <Card style={{
                      margin:50,
                      width:300,
                      height:400,
                   }}>
                      <div>
                      <div key={product.id} className="bg-white p-6 shadow-md">
                      <Card style={{width:200,height:200}}>
                        <img src={product.image} style={{width:"100%",height:"100%",objectFit:"cover"}} alt={product.title} className="w-full mb-4" />
                      </Card>
                      
                      <h2 className="text-lg font-semibold">{product.title}</h2>
                      <p className="text-gray-600">{product.description}</p>
                      <p className="text-lg text-green-600">${product.price}</p>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                          Add to Cart
                      </button>
                      </div>
                      </div>
                    </Card>
                    
                  ))}
                </div>
                      
              </section>
              <div className="container">
                <h1>Investor Details</h1>
                <div className="investor-details">
                  <h2>Lorem Ipsum</h2>
                  <p><strong>Email:</strong> lorem.ipsum@example.com</p>
                  <p><strong>Investment Amount:</strong> $50,000</p>
                  <p><strong>Investment Type:</strong> Equity</p>
                </div>
                <br/><br/>
                <div className="interest-section">
                  <h2>Are you interested in investing in this product?</h2><br/>
                  <div style={{display:'flex'}}>
                    <p>Please leave your details here.   </p>
                    <button className="interest-button" onClick={togglePopup}>Express Interest</button>
                  </div>
                  
                </div>

                {showPopup && (
                  <div className="popup">
                    <div className="popup-content">
                      <br/>
                      <h2>Leave Your Details</h2>
                      <br/>
                      <p>Please provide your contact details so we can get in touch with you:</p>
                      <br/>
                      <input type="text" className="contact-input" placeholder="Your Name" />
                      <input type="email" className="contact-input" placeholder="Your Email" />
                      <input type="tel" className="contact-input" placeholder="Your Phone" />
                      <br/><br/>
                      <div>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Submit   </button>
                      <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={togglePopup}>Close</button>
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>
            </main>
      
            <footer className="bg-gray-800 text-white text-center py-4">
              <p>&copy; 2023 Seller Name. All rights reserved.</p>
            </footer>
          </div>
        );
      }
    }