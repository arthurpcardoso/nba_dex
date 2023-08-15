import logo from '../assets/logo-boston-celtics-4096.png';

const Teambox = () => {
    return ( 
    <div className="card w-48 h-64 rounded-xl bg-gray-100 relative p-4 border-2 border-gray-300 transition duration-500 ease-out overflow-visible hover:border-blue-500 hover:shadow-md">
      <div>
        <img src="https://logodetimes.com/times/boston-celtics/logo-boston-celtics-2048.png" className="object-cover h-full w-full"></img>
      </div>
      <div className="card-details flex flex-col justify-center items-center gap-1 text-black h-full">
        <p className="text-title text-lg font-semibold">Boston celtics</p>
        <p className="text-body text-gray-500">Here are the details of the card</p>
      </div>
      <button className="card-button absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full opacity-0 transition duration-300 ease-out bg-blue-500 text-white rounded-md px-4 py-2 text-sm hover:opacity-100 hover:translate-y-1/2">
        More info
      </button>
    </div>
     );
}
 
export default Teambox;