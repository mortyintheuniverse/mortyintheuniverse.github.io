"use client";
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Image from 'next/image';
import "./globals.css";

const firebaseConfig = {
  apiKey: "AIzaSyD4MWk4PujNyXNF9_F2rwWhG9vtmdW10SM",
  authDomain: "posts-146b2.firebaseapp.com",
  projectId: "posts-146b2",
  storageBucket: "posts-146b2.appspot.com",
  messagingSenderId: "330965439458",
  appId: "1:330965439458:web:a7256b989e9515982b1fbb",
  measurementId: "G-T6R6RRKSZP"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);


const SubmissionForm = ({ onSubmissionSuccess,submitted }) => {
  const [boolValue, setBoolValue] = useState(false); // Default boolean value
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const petitionRef = doc(collection(db, "petition"));
      await setDoc(petitionRef, {bool:boolValue,comments:comments});
      onSubmissionSuccess(submitted);
      
      console.log('Data successfully submitted to Firebase!');
    } catch (error) {
      console.error('Error submitting data: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='text-white ml-20'>
      <div>
        <label htmlFor="bool">Need a rework?:    </label>
        <select
          id="bool"
          value={boolValue}
          onChange={(e) => setBoolValue(e.target.value === 'true')}
          required
        >
          <option className='text-black' value="true">✔️</option>
          <option  value="false">❌</option>
        </select>
      </div>
      <div className='py-4'>
        <label  htmlFor="comments">Your Comment:</label>
        <br></br>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
          className='rounded-md'
        />
      </div>
      <button type="submit" className='w-24  rounded-sm bg-blue-400'>Submit</button>
    </form>
  );
};



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(apps);






const PetitionsList = ({petitions, setPetitions, submitted}) => {
  

  useEffect(() => {
    const fetchPetitions = async () => {
      try {
        const petitionsRef = collection(db, 'petition');
        const querySnapshot = await getDocs(petitionsRef);
        
        const fetchedPetitions = [];
        querySnapshot.forEach((doc) => {
          fetchedPetitions.push({ id: doc.id, ...doc.data() });
        });

        setPetitions(fetchedPetitions);
      } catch (error) {
        console.error('Error fetching petitions:', error);
      }
    };

    fetchPetitions();
  }, [submitted]);

  return (
    <div className=' w-[55rem] p-4 '>
      <ul>
        {petitions.map((petition) => (
          <Petition key={petition.id} petition={petition} />
        ))}
      </ul>
    </div>
  );
};

const Petition = ({ petition }) => {
  
  return (
    <article className={`text-wrap petition w-[50rem] p-6 rounded-500 ${getRandomColor()}`}>
    <li>

      <p>{petition["comments"]}</p>

      {/* Render other details of the petition as needed */}
    </li></article>
  );
};

function getRandomColor() {
  const arr = ['bg-red-300/80', 'bg-indigo-300/80',  'bg-lime-300/80','bg-cyan-300/80','bg-pink-300/80','bg-slate-300/80','bg-teal-200/80'];
  const randomIndex = Math.floor(Math.random() * arr.length);

  const color = arr[randomIndex] ;
  return (color);
}


export default function App() {
  const [petitions, setPetitions] = useState([]);
  const petitionsRef = collection(db, 'petition');
  const [submitted, setSubmitted] = useState(false);
  getDocs(petitionsRef).then((querySnapshot) => {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  console.log(data); // This will log the array of petition data
}).catch((error) => {
  console.error('Error fetching petitions:', error);
});

const handleSubmissionSuccess = (submitted) => {
  setSubmitted(!submitted);
  
};
  return (<div>
   
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 ">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[red] to-[#9089fc] opacity-70"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <p className="text leading-12 text-gray-900">
          <strong className="font-semibold">Save the pangolier</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Stop the evil Gaben from corruting the hero !
        </p>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[red] to-[#9089fc] opacity-70"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
       

      </div>
    </div>
    <div className="flex  justify-end h-[36rem]">
    <div className="pt-40 grid text-center lg:grid-cols-1 lg:text-left w-[50rem]">
        <a
         
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-green-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          
        >
          <h2 className={`mb-3 text-4xl font-semibold`}>
          👍
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-green-400">
              -&gt;
            {petitions.filter(e=>e["bool"]==true).length}

            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] opacity-80 boxes`}>
            Change back to the old pangolier.
          </p>
        </a>
        <a
         
         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
         target="_blank"
         
       >
         <h2 className={`mb-3 text-4xl font-semibold`}>
         👎
           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-red-400">
             -&gt;
           {petitions.filter(e=>e["bool"]==false).length}

           </span>
         </h2>
         <p className={`m-0 max-w-[30ch] opacity-80 boxes`}>
         He is in a good shape.
         </p>
       </a>
   
      </div>
    <video className='h-[36rem]'  poster="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.png" autoPlay preload="auto" loop playsInline muted>
    <source type="video/webm" src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.webm"/>
    
    </video></div>
    <div className="pt-40 grid text-center lg:grid-cols-2 lg:text-left w-[50rem]">
      <div>
    <SubmissionForm onSubmissionSuccess={handleSubmissionSuccess} submitted={submitted}/></div>
    <div>
    <PetitionsList petitions={petitions} submitted={submitted} setPetitions={setPetitions}/></div>
    </div>
    </div>
  );
}
