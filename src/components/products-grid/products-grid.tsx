import { component$} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';




export default component$(() => {
  const trains = [
    { name:"Red_Blue",url:"https://media.kasperskydaily.com/wp-content/uploads/sites/93/2016/01/06095238/train-hack-featured.jpg",price:"15,000"},
    { name:"Avelia",url:"https://www.alstom.com/sites/alstom.com/files/styles/large_media_cover/public/2022/08/17/Avelia_Horizon_High_Speed_Rendering.jpg?h=993b0409&itok=_QFY9Y_C",price:"20,000"},
    { name:"Vande",url:"https://cdn.telanganatoday.com/wp-content/uploads/2022/10/Vande-Bharat-train-33.jpg",price:"7,000"},
    { name:"Bullet",url:"https://cdn.cnn.com/cnnnext/dam/assets/210110234129-01-china-bullet-train-restricted-full-169.jpg",price:"30,000"},
    { name:"Rocky_Mountaineer",url:"https://media.cntraveler.com/photos/5fce391a3cfe1de2cab7949c/master/pass/Rocky_Mountaineer.jpg",price:"10,000"},
    { name:"Taylors_Mill",url:"https://images.squarespace-cdn.com/content/v1/58bc89fba5790a1de0cef5ea/1621443261223-Q801T9P6W0UQ20D5YE5P/train+banner.png?format=1500w",price:"11,000"},
  ]
 


  return (

      <div id="products" class="min-h-screen bg-slate-200 grid place-items-center py-10">
        <div class="flex flex gap-4 flex-wrap justify-center max-w-{1400px} mx-auto ">
        {trains.map((obj) => {
              return (
                <Link href="/train" >
                <div class="flex flex-col gap-2 p-10 py-5 cursor-pointer border border-solid border-transparent hover:border-slate-900 " onclick$={()=> {
                  localStorage.setItem('train',JSON.stringify(obj))
                }}>
                    <img src={obj.url} alt="{obj.name}" class="w-[700px]  sm:max-w-{300px} object-cover" />
                    <div class="flex flex-col gap-2 p-4 shadow">
                        <h2 class="text-2xl flex flex-col justify-center place-items-center">{obj.name}</h2>
                        <p class="flex flex-col justify-center place-items-center">{obj.price}</p>
            
                    </div>
                </div>
                </Link>
                ); 
          } )}

        </div>

        </div>
      
      

  );
});
