import './App.css';
import './index.css'
import { useState } from 'react';

function App() {
  const [formdata, setFormdata] = useState({
    name:'',
    surname:'',
    email:'',
    phone:'',
    country:'India',
    city:'',
    postal:'',
    state:'',
    comments:false,
    offers:false,
    candidates:false,
    pushNotify:""
  });

  function handleChange(e){
    const {name, value,type,checked} = e.target;
    setFormdata((prev)=>({
      ...prev,
      [name]:type === "checkbox" ? checked : value}))     
  }

  function handleSubmit(event){
      event.preventDefault();
      console.log("printing the formdata");
      console.log(formdata);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration Form</h2>

        <div className="mb-4">
          <label htmlFor='name' className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" 
            placeholder="Enter your name" 
            name='name'
            onChange={handleChange}
            id='name'
            value={formdata.name}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
          />
        </div>

        <div className="mb-4">
          <label htmlFor='surname' className="block text-gray-700 font-bold mb-2">Surname</label>
          <input type='text'
            placeholder='Enter your surname'
            name='surname'
            id='surname'
            value={formdata.surname}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor='email' className="block text-gray-700 font-bold mb-2">Email</label>
          <input type='email'
            placeholder='Enter your email'
            name='email'
            id='email'
            value={formdata.email}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor='phone' className="block text-gray-700 font-bold mb-2">Contact</label>
          <input type='number'
            placeholder='Enter your Phone Number'
            name='phone'
            id='phone'
            value={formdata.phone}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor='country' className="block text-gray-700 font-bold mb-2">Country</label>
          <select
            name='country'
            value={formdata.country}
            id='country'
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
          > 
            <option value='India'>India</option>
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
            <option value='Australia'>Australia</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor='city' className="block text-gray-700 font-bold mb-2">City</label>
          <input type='text'
            placeholder='Enter your City'
            name='city'
            id='city'
            value={formdata.city}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor='state' className="block text-gray-700 font-bold mb-2">State/Province</label>
          <input type='text'
            placeholder='Enter your State'
            name='state'
            id='state'
            value={formdata.state}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor='postal' className="block text-gray-700 font-bold mb-2">Postal/ZIP Code</label>
          <input type='number'
            placeholder='Enter your Postal Code'
            name='postal'
            id='postal'
            value={formdata.postal}
            className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-600'
            onChange={handleChange}
          />
        </div>

        <fieldset className="mb-4">
          <legend className="text-lg font-bold text-gray-700 mb-2">By Email</legend>
          <div className='flex items-start mb-2'>
            <input type='checkbox'
              id='comments'
              name='comments'
              checked={formdata.comments}
              onChange={handleChange}
              className='mr-2 mt-1'
            />
            <div>
              <label htmlFor='comments' className="font-bold text-gray-700">Comments</label>
              <p className="text-gray-600 text-sm">Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className='flex items-start mb-2'>
            <input type='checkbox'
              id='candidates'
              name='candidates'
              checked={formdata.candidates}
              onChange={handleChange}
              className='mr-2 mt-1'
            />
            <div>
              <label htmlFor='candidates' className="font-bold text-gray-700">Candidates</label>
              <p className="text-gray-600 text-sm">Get notified when someone applies for a job.</p>
            </div>
          </div>

          <div className='flex items-start'>
            <input type='checkbox'
              id='offers'
              name='offers'
              checked={formdata.offers}
              onChange={handleChange}
              className='mr-2 mt-1'
            />
            <div>
              <label htmlFor='offers' className="font-bold text-gray-700">Offers</label>
              <p className="text-gray-600 text-sm">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="text-lg font-bold text-gray-700 mb-2">Push Notification</legend>
          <p className="text-gray-600 text-sm mb-2">These are delivered via SMS to your mobile phone.</p>

          <div className='mb-2'>
            <input type='radio'
              name='pushNotify'
              id='pusheverything'
              onChange={handleChange}
              value="Everything"
              className='mr-2'
            />
            <label htmlFor='pusheverything' className="text-gray-700">Everything</label>
          </div>

          <div className='mb-2'>
            <input type='radio'
              name='pushNotify'
              id='pushemail'
              onChange={handleChange}
              value="Same as Email"
              className='mr-2'
            />
            <label htmlFor='pushemail' className="text-gray-700">Same as Email</label>
          </div>

          <div>
            <input type='radio'
              name='pushNotify'
              id='pushNo'
              onChange={handleChange}
              value="No push notification"
              className='mr-2'
            />
            <label htmlFor='pushNo' className="text-gray-700">No push notification</label>
          </div>
        </fieldset>

        <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
          Save
        </button>   
      </form>
    </div>
  );
}

export default App;

//without css-
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [formdata, setFormdata] = useState({
//     name:'',
//     surname:'',
//     email:'',
//     phone:'',
//     country:'India',
//     city:'',
//     postal:'',
//     state:'',
//     comments:false,
//     offers:false,
//     candidates:false,
//     pushNotify:""
//   })

//   function handleChange(e){
//     const {name, value} = e.target;
//     setFormdata({
//       ...formdata,
//       [name]: name==="checkbox" ? e.target.checked : value
//     })
//   }

//   function handleSubmit(event){
//       event.preventDefault();

//       console.log("printing the formdata")
//       console.log(formdata)
//   }
//   return (
//     <div className="flex flex-col items-center mt-2">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='name'>Name : </label>
//         <br/>
//         <input type="text" 
//         placeholder="Enter your name" 
//         name='name'
//         onChange={handleChange}
//         id='name'
//         value={formdata.name}
//         className='outline'
//         />

//         <br/>
//         <br/>

//         <label htmlFor='surname'>SurName : </label>
//         <br/>
//         <input type='surname'
//         placeholder='Enter your surname'
//         name='surname'
//         id='surname'
//         value={formdata.surname}
//         className='outline'
//         onChange={handleChange}
//         />
//         <br/>
//         <br/>

//         <label htmlFor='email'>Email : </label>
//         <br/>
//         <input type='email'
//         placeholder='Enter your email'
//         name='email'
//         id='email'
//         value={formdata.email}
//         className='outline'
//         onChange={handleChange}
//         />
//         <br/>
//         <br/>

//         <label htmlFor='Phone'>Contact : </label>
//         <br/>
//         <input type='number'
//         placeholder='Enter your Phone Number'
//         name='phone'
//         id='phone'
//         value={formdata.phone}
//         className='outline'
//         onChange={handleChange}
//         />
//         <br/>
//         <br/>
        
//         <label htmlFor='country'>Country : </label>
//         <br/>
//         <select
//         name='country'
//         value={formdata.country}
//         id='country'
//         onChange={handleChange}
//         className='outline'
//         > 
//           <option value='India'>India</option>
//           <option value='USA'>USA</option>
//           <option value='UK'>UK</option>
//           <option value='Australia'>Australia</option>
//         </select>

//         <br/>
//         <br/>

//         <label htmlFor='city'>City : </label>
//         <br/>
//         <input type='text'
//         placeholder='Enter your City'
//         name='city'
//         id='city'
//         value={formdata.city}
//         className='outline'
//         onChange={handleChange}
//         />

//         <br/>
//         <br/>

//         <label htmlFor='state'>State/Province : </label>
//         <br/>
//         <input type='state'
//         placeholder='Enter your State'
//         name='state'
//         id='state'
//         value={formdata.state}
//         className='outline'
//         onChange={handleChange}
//         />

//         <br/>
//         <br/>

//         <label htmlFor='postal'>Postal/ZIP Code : </label>
//         <br/>
//         <input type='number'
//         placeholder='Enter your Postal Code'
//         name='postal'
//         id='postal'
//         value={formdata.postal}
//         className='outline'
//         onChange={handleChange}
//         />

//         <br/>
//         <br/>

//         <fieldset>
//           <legend>By Email : </legend>
//           <div className='flex flex-row'>
//           <input type='checkbox'
//            id='comments'
//            name='comments'
//            checked={formdata.comments}
//            onChange={handleChange}
//            />
//           <div>
//           <label htmlFor='comments'>Comments</label>
//           <p>Get notified when someone post a comment on a posting.</p>
//           </div>
//           </div>

//           <br/>

//           <div className='flex flex-row'>
//           <input type='checkbox'
//            id='candidates'
//            name='candidates'
//            checked={formdata.candidates}
//            onChange={handleChange}
//            />
//           <div>
//           <label htmlFor='candidates'>Candidates</label>
//           <p>Get notified when someone applies for a job.</p>
//           </div>
//           </div>

//           <br/>

//           <div className='flex flex-row'>
//           <input type='checkbox'
//            id='offers'
//            name='offers'
//            checked={formdata.offers}
//            onChange={handleChange}
//            />
//           <div>
//           <label htmlFor='offers'>Offers</label>
//           <p>Get notified when candidate accept or reject a offer.</p>
//           </div>
//           </div>          
//         </fieldset>

//         <fieldset>
//           <legend>Push Notification : </legend>
//           <p>These are delivered via SMS to your mobile phone</p>

//           <input type='radio'
//           name='pushNotification'
//           id='pusheverything'
//           onChange={handleChange}
//           value="Everything"
//           />
//           <label htmlFor='pusheverything'>Everything</label>
//            <br/>
//           <input type='radio'
//           name='pushNotification'
//           id='pushemail'
//           onChange={handleChange}
//           value="Same as Email"
//           />
//           <label htmlFor='pushemail'>Same as Email</label>
//           <br/>
//           <input type='radio'
//           name='pushNo'
//           id='everything'
//           onChange={handleChange}
//           value="No push notification"
//           />
//           <label htmlFor='pushNo'>No push notification</label>
//         </fieldset>

//         <button>Save</button>   
//       </form>
//     </div>
//   );
// }

// export default App;