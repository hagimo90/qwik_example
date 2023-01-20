import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  const state = useStore({
    name: "",
    price: "",
    url:""
  });

  useClientEffect$(() => {
    const data = JSON.parse(localStorage.getItem('train'))
    state.name = data.name
    state.price = data.price
    state.url = data.url


  });

  return (
    <div class="flex flex-col min-h-screen">
        <div class="w-full h-[70px] bg-slate-200">
        </div>
        <div class="flex flex-col place-items-center bg-slate-200">
        
        <img src={state.url} alt={state.name} class="h-2/3 w-2/3 sm:max-w-{300px} object-cover relative z-10"/>
        <div class="flex p-4 justify-between bg-slate-200 w-2/3">
            <h2 class="text-2xl sm:text-3xl">{state.name}</h2>
            <p class="text-2xl sm:text-3xl">{state.price}</p>
        </div>
        <button onclick$={()=> {
            let trainBasket = { items:[] }
            if (localStorage.getItem('train')) {
                trainBasket = JSON.parse(localStorage.getItem('train'))
            }
            trainBasket.items.push([state.name])
            localStorage.setItem('train-Basket',JSON.stringify(trainBasket))



        }} class="border text-2xl p-4 border-slate-900 border-solid w-1/3 m-5 bg-green-200 sm:text-2xl">Purchase</button>
        </div>
        

    </div>
  );
}
);

export const head: DocumentHead = {
  title: 'Train Details',
};
