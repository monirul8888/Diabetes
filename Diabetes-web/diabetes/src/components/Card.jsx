export default function Card({title,description}){

return(

<div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">

<h3 className="text-xl font-semibold mb-2">{title}</h3>

<p className="text-gray-600">
{description}
</p>

</div>

)

}