import { Link, useParams } from "react-router-dom"
import Datas from '../Data.json'


function SnakesDetail (){

    const {Id} = useParams()
    const data = Datas.find(data => data.Id == Id)

    return(
        <>
            <div className="border rounded-lg shadow bg-zinc-800 border-gray-700 m-5">
                <img className="rounded-t-lg" src={`/${data.Img}`}/>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{data.MMName}</h5>
                    <p className="text-zinc-400">{data.EngName}</p>
                    <div className=" flex text-white mt-5">
                        { data.IsPoison === "Yes" ? <div> အဆိပ်ရှိ </div> : <div> အဆိပ်မရှိ </div>} 
                        /
                        { data.IsDanger === "Yes" ? <div> အန္တရာယ်ရှိ </div> : <div> အန္တရာယ်မရှိ </div>} 
                    </div>
                    <p className="my-5 text-gray-400">{data.Detail}</p>
                    <Link to="/" className="px-6 py-2 text-lg text-white rounded-2xl focus:outline-none bg-zinc-600 hover:bg-zinc-500">
                        Back
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SnakesDetail