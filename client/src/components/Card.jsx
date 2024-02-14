import { download } from '../assets';
import { downloadImage } from '../utils';
const Card = ({ rowid, name, prompt, photo }) => {
  console.log(rowid);
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 ">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center font-bold text-xs text-white">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            className="outline-none bg-transparent border-none"
            type="button"
            onClick={() => downloadImage(rowid, photo)}
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
